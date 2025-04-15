import axios from "axios";
import { useState } from "react";

function Main() {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");

  async function handleData() {
    const result = await axios.get(
      "https://api.openweathermap.org/data/2.5/find?q=" +
        city +
        "&appid=&units=metric"
    );
    console.log(result);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter City name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleData}>Submit</button>
    </div>
  );
}

export default Main;
