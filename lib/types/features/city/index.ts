export type Store = {
  cities: City[];
};

export type Actions = {
  add: (city: City) => void;
  remove: (city: City) => void;
};

export type City = {
  name: string;
  time: number;
};
