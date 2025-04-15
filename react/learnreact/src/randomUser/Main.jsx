import { useEffect, useState } from "react";
import axios from "axios";

function Main() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    getRandomData();
  }, []);

  // async function getRandomData() {
  //   const response = await fetch("https://randomuser.me/api/");
  //   const result = await response.json();
  //   console.log(result.results);
  //   setImage(result.results[0].picture.large);
  //   setName(result.results[0].name.first + " " + result.results[0].name.last);
  // }

  //https://fakestoreapi.in/api/products

  async function getRandomData() {
    const result = await axios.get("https://randomuser.me/api/");
    const data = result.data.results[0];
    setImage(data.picture.large);
    setName(`${data.name.first} ${data.name.last}`);
  }

  return (
    <>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </>
  );
}

export default Main;
