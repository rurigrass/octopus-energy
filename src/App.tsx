import { useEffect } from "react";

function App() {
  const apiKey = "sk_live_NttNvo5ijXNPfYE92RhDruFL";
  const url = "https://api.octopus.energy/v1/accounts/A-B8EB5983/";
  const productsUrl = "https://api.octopus.energy/v1/products";
  const consumption = `https://api.octopus.energy/v1/electricity-meter-points/< MPAN >/meters/< meter serial number >/consumption/?page_size=100&period_from=2020-03-29T00:00Z&period_to=2020-03-29T01:29Z&order_by=period`

  const userAction = async () => {
    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${btoa(apiKey + ":")}`,
      },
    })
    const myJson = await response.json(); // Extract JSON from the HTTP response
    console.log(myJson); // Do something with myJson
  };

  

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

  userAction();

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-xl text-blue-300"> poo yes</p>
    </div>
  );
}

export default App;
