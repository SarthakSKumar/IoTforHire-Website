import { useState, useEffect } from "react";

export default function Sale() {
  const [products, setProducts] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    fetch("https://iotforhire-backend-exp.vercel.app/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .then((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <div>
        <img src="" />
      </div>
    </div>
  );
}
