import React, { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");

  const getWelcomeMessage = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("/api", requestOptions);
    const data = await response.json();

    if (!response.ok) {
      console.log("something messed up");
    } else {
      setMessage(data.message);
    }
  };

  useEffect(() => {
    getWelcomeMessage();
  }, []);
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default App;
