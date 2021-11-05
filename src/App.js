import { useEffect, useState } from "react";
import "./styles.css";
import Child from "./Child";

export default function App() {
  const api = async () => {
    const response = await fetch("https://api.github.com/users");
    try {
      if (response.ok) {
        const data = await response.json();
        setDataValue(data);
        console.log(data);
      } else {
        throw new Error("something went wrong");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const [dataValue, setDataValue] = useState([]);
  useEffect(() => {
    api();
  }, []);
  return (
    <div className="App">
      {dataValue.map((data) => {
        return (
          <div>
            <Child key={Math.random()} data={data} />
          </div>
        );
      })}
    </div>
  );
}
