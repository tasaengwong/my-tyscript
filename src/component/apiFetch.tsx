import  { useState, useEffect } from "react";

export const Apifetch = () => {
  const url = "http://demo6738459.mockable.io/";
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.items));
  }, []);

  return Data;
};
