import { get } from "./axiosConfig";

export const getPokemons = async () => {
  const response = await get("/pokemon");

  return response.data;
};
