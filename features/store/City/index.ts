import { Actions, City, Store } from "@/lib";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCitiesStore = create<Store & Actions>()(
  persist(
    (set) => ({
      cities: [],
      add: (city: City) => {
        set((state) => {
          const cities = [...state.cities];

          const existingCityIndex = cities.findIndex(
            (c) => c.name === city.name
          );
          if (existingCityIndex !== -1) {
            cities.splice(existingCityIndex, 1);
          }

          cities.unshift(city);

          return { cities };
        });
      },
      remove: (city: City) => {
        set((state) => {
          const cities = state.cities.filter(
            (cities) => cities.name !== city.name
          );
          return { cities };
        });
      },
    }),
    {
      name: "cities",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
