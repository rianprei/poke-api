import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../services/getPokemon";

export const useGetPokemons = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-pokemon"],
    queryFn: getPokemons,
  });

  return {
    pokeList: data,
    isLoadingPokeList: isLoading,
    isError,
  };
};
