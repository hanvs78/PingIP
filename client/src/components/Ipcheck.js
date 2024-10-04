//rafce
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const Ipcheck = () => {
  const [data, setData] = useState(null);
  //javascript
  useEffect(() => {
    //code ...
    const socket = io("http://localhost:5000/");

    socket.on("nodeStatus", ({ id, status, ip, label }) => {
      setData((prevData) => ({
        ...prevData,
        [id]: { id, label, status, ip },
      }));
    });
  }, []);

  //console.log(data)

  if (data === null || data === undefined) {
    return <h1>Loading...</h1>;
  }

  const tableRows = Object.values(data).map((node) => (
    <tr key={node.id}>
      <td>{node.id}</td>
      <td>{node.label}</td>
      <td>{node.status}</td>
      <td>{node.ip}</td>
      <td>
        <span
          className={`status-circle ${node.status === "up" ? "up" : "down"}`}
        />
      </td>
    </tr>
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Label</td>
            <td>Status</td>
            <td>IP</td>
            <td>Color</td>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

export default Ipcheck;
