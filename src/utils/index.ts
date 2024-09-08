import { type PokemonType, pokemonTypes } from "types/pokemon";

const promiseAllSettledWithRetry = async <T>(maxRetryCount: number, promiseList: Promise<T>[], waitTime = 1000): Promise<T[]> => {
    const results: T[] = [];
    let currentRun = 0;
    let unfulfilledPromises = promiseList;
    do {
        if (currentRun > 0) {
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }
        currentRun++;
        const settledPromises = await Promise.allSettled(unfulfilledPromises);
        const cachedPromiseList = unfulfilledPromises;
        unfulfilledPromises = [];
        settledPromises.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                results.push(result.value);
            } else {
                if (cachedPromiseList[index]) unfulfilledPromises.push(cachedPromiseList[index])
            }
        });
    } while (unfulfilledPromises.length > 0 && currentRun - 1 < maxRetryCount)

    return results;
}

const isValidPokemonType = (value: string): value is PokemonType => {
    return pokemonTypes.includes(value as PokemonType);
};

const zeroPad = (num: number, places: number) => String(num).padStart(places, '0')

export { promiseAllSettledWithRetry, isValidPokemonType, zeroPad }