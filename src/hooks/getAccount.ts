import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IAccount } from "../../typings";

export const getAccount = (apiKey: string, accountNumber: string) => {
  return useQuery({
    queryKey: ["account"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.octopus.energy/v1/accounts/${accountNumber}/`,
        {
          headers: {
            Authorization: `Basic ${window.btoa(apiKey + ":")}`,
          },
        }
      );
      return data as IAccount;
    },
  });
};
