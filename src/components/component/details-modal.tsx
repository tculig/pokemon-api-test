"use client";

import { type Dispatch, type SetStateAction } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { type Pokemon } from "types/pokemon";
interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  pokemon?: Pokemon;
}
export const DetailsModal = ({ open, setOpen, pokemon }: Props) => {
  if (!pokemon) return null;
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          ><div>
            <div className=" font-bold text-2xl p-2 pl-4">{pokemon.name}</div>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="border-b bg-gray-100 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                    Stat
                  </th>
                  <th className="border-b bg-gray-100 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b px-4 py-2 text-sm text-gray-700">
                    Abilities
                  </td>
                  <td className="border-b px-4 py-2 text-sm text-gray-700">
                    {pokemon.details?.abilities
                      .map((el) => el.ability.name)
                      .join(", ")}
                  </td>
                </tr>
                {pokemon.details?.stats.map((el, index) => {
                  return (
                    <tr key={index}>
                      <td className="border-b px-4 py-2 text-sm text-gray-700">
                        {el.stat.name}
                      </td>
                      <td className="border-b px-4 py-2 text-sm text-gray-700">
                        {el.base_stat}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
