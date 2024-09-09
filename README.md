# Frontend Coding Interview Test

Assignment at https://github.com/mmiro-balize/frontend-test

App available at https://balize-frontend-test.vercel.app/

[![Watch the video](https://img.youtube.com/vi/M--gbavnR5A/0.jpg)](https://youtu.be/M--gbavnR5A)

## Requirements

1. **Fetch Pokémon Data:**
2. **Create Initial Data Table:**
3. **Enhance Data Table with Additional Columns:**
I've tried this approach, and all it was doin was causing UI flickering and shifts, simply because the API endpoinds are so fast, the enhanced data is available in a fraction of a second. I've thus decided to merge both of these calls in one, and present the finished data. Having pokemon names visible without the enhanced data isn't much use anyways. I've thus chained the details calls for each pokemon in a Promise.All, which makes all the API calls concurrent. This works well, but if any of the 20 calls fails, the whole Promise.all fails. So I used Promise.allSettled which avoids the issue, but causes an issue of not having retries for failed calls. So I've implemented a utility function called ```promiseAllSettledWithRetry```, and am using 3 retries in the app.
This all works well, and is fast and robust. 
I used zod for some API response validation.
```data/hooks/use-pokemon-list.ts```
```types/use-pokemon-list.ts```
```utils/index.ts```
4. **Pagination or Infinite Scroll:**
I'm using infinite scroll in the app. It just seems like a more elegant option. It does have the drawback of having to scroll for hours to get to the last pokemon, but for this demo, I'm sticking with the infinite scroll scenario.
5. **Skeleton Loading State:**
Skeletons are present for all loading data.

# Comments

## Visual design
I implemented two layout designs, conveniently labeled "Layout 1" and "Layout 2" in the page header component.
"Layout 1" strictly follows the assignment parameters: render table with 3 columns: name, image, types.
"Layout 2" is what I would ship to prod if it was my app. I took some inspiration from the official pokemon page at https://www.pokemon.com/us/pokedex, and then spruced it up a bit.

## Extra content
I added a details modal for each pokemon. Just because it felt like there should be some interaction with the page. The data is already given on the api call that fetches images and types, so it was basically free.
I also added a search field in the top right. It does a simple "includes" check for the pokemon names.

## Error handling
Not much error handling in the app. If it was going to prod, there would need to be a "no-image" image, some custom 404 page, some fallback if the API endpoints are unavailable etc. 

## SSR
The app is mostly client side, as it was the industry standard for many, many years. Recently Server Side Rendering has made a big splash, and people started using it just because its the new shiny thing. Personally, I don't think its justified for small and medium projects. All it does is shift the cost from client to server, and if you're the company running the page...we'll, you're not paying for the client costs, but you sure are paying for the server costs. 
Having said all of that, there is a path to moving all this server side, there even seems to be some wrapper libraries to use for this https://github.com/PokeAPI/pokedex-promise-v2.

## Caching
No caching, just pure spam on the API! =D
Should definitely add caching if this was ever going to be used by more than 2 people though. 

## Optimization
The app loads 20 pokemon at a time. Which means it would take 50 loads to reach 1000 items, which is where I would think about using react-window or react-virtualized for some list virtualization. 
Caching falls under this category.



