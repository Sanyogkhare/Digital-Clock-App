import { useEffect, useState } from "react";

const Clock = ({ color }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        fontSize: "3rem",
        fontWeight: "bold",
        color: color,
        padding: "20px 40px",
        borderRadius: "10px",
        background: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
        minWidth: "250px",
      }}
    >
      {time.toLocaleTimeString()}
    </div>
  );
};

export default Clock;
