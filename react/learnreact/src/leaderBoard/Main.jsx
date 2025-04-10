/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

function Main() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [country, setCountry] = useState("");
  const [score, setScore] = useState("");
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(1);

  useEffect(() => {
    if (data.length > 0) {
      const copy = [...data];
      setData(copy.sort((a, b) => b.score - a.score));
    }
  }, [score, flag]);

  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      id: Date.now(),
      name: fname + " " + lname,
      country: country,
      score: score,
    };

    setData([...data, obj]);

    // setData((prevData) => {
    //   const newData = [...prevData, obj];
    //   return newData.sort((a, b) => b.score - a.score);
    // });

    setFname("");
    setLname("");
    setCountry("");
    setScore("");
  }

  function modifyScore(id, sign) {
    setFlag(flag * -1);
    setData(
      data.map((obj) =>
        obj.id === id
          ? {
              ...obj,
              score:
                sign === "+" ? Number(obj.score) + 5 : Number(obj.score) - 5,
            }
          : obj
      )
    );
  }

  function handleDelete(id) {
    setData(data.filter((obj) => obj.id !== id));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lname"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <select
          name="country"
          value={country}
          id=""
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="australia">Australia</option>
          <option value="west indies">West Indies</option>
          <option value="pakistan">Pakistan</option>
          <option value="new zealand">New Zealand</option>
        </select>

        <input
          type="text"
          placeholder="Score"
          name="score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div>
        {data.length > 0 &&
          data.map((obj) => {
            return (
              <div key={obj.id} className="flex">
                <p>{obj.name}</p>
                <p>{obj.country}</p>
                <p>{obj.score}</p>
                <p>
                  <span onClick={() => handleDelete(obj.id)}>Delete</span>
                  <span onClick={() => modifyScore(obj.id, "+")}> +5 </span>
                  <span onClick={() => modifyScore(obj.id, "-")}> -5 </span>
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Main;
