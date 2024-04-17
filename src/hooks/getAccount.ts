import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IAccount } from "../../typings";

export const getAccount = (apiKey: string, accountNumber: string) => {
  return useQuery({
    queryKey: ["account"],
    queryFn: async () => {
      const { data } = await axios.get(
        //THIS GETS INFO ON THE ACCOUNT
        // `https://api.octopus.energy/v1/accounts/${accountNumber}/`,
        //THIS GETS THE CONSUMPTION DATA
        // `https://api.octopus.energy/v1/electricity-meter-points/1800023268202/meters/17P0143525/consumption/`,
        //THIS RETURNS ALL or just GREEN PRODUCTS
        // `https://api.octopus.energy/v1/products`,
        // `https://api.octopus.energy/v1/products/?is_green=true`,
        // PRODUCT WITH THE CODENAME GIVE MORE DETAILS 
        `https://api.octopus.energy/v1/products/AGILE-24-04-03/`,
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
