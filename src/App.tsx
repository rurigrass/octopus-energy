import { useEffect, useState } from "react";
import { IAccount } from "../typings";

// interface IState {
//   account: IAccount;
//   mpan: string;
//   elecSerial: string;
// }

function App() {
  const initialState = {
    account: {},
    mpan: "",
    elecSerial: "",
  };

  const [state, setState] = useState(initialState);
  const { account, mpan, elecSerial } = state;

  const apiKey = import.meta.env.VITE_API_KEY;
  const accountNumber = import.meta.env.VITE_ACCOUNT_NUMBER;
  const url = `https://api.octopus.energy/v1/accounts/${accountNumber}/`;
  const productsUrl = "https://api.octopus.energy/v1/products";

  const consumption = `https://api.octopus.energy/v1/electricity-meter-points/${mpan}/meters/${elecSerial}/consumption/?page_size=100&period_from=2023-03-29T00:00Z&period_to=2023-03-29T01:29Z&order_by=period`;

  // const [account, setAccount] = useState<IAccount>();

  useEffect(() => {
    const getAccount = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Basic ${window.btoa(apiKey + ":")}`,
          },
        });
        const data: IAccount = await response.json(); // Extract JSON from the HTTP response
        if (data) {
          setState({
            ...state,
            account: data,
            mpan: data.properties[0].electricity_meter_points[0].mpan,
            elecSerial:
              data.properties[0].electricity_meter_points[0].meters[0]
                .serial_number,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAccount();
  }, []);

  console.log(state);

  // const userAction = async () => {
  //   fetch(url, {
  //     headers: {
  //       Authorization: `Basic ${btoa(apiKey + ":")}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  // };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-xl text-blue-300"> poo yes </p>
    </div>
  );
}

export default App;
