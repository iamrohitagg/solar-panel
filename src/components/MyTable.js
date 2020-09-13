import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

var MyTable = () => {
  let [panel, setPanel] = useState([
    ["S", "O", "L", "A"],
    ["R", "P", "A", "N"],
    ["E", "L", "S", "O"],
    ["L", "A", "R", "R"],
  ]);

  const [bgColor, setbgColor] = useState("white");

  const colorHandler = () => {
    setbgColor("green");
  };

  const handleRowColAddition = (i, j) => {
    console.log(i, j);
    if (j === 0) {
      let state = [...panel];

      state = state.map((row) => {
        return ["S"].concat(row);
      });

      const row = Array(state[0].length).fill("S");
      state = [row].concat(state);

      setPanel(state);
    } else if (i === 0) {
      let state = [...panel];

      state = state.map((row) => {
        return row.concat(["0"]);
      });

      const row = Array(state[0].length).fill("O");
      state = [row].concat(state);

      setPanel(state);
    }
  };
  function renderTable() {
    var rows = panel.map(function (item, i) {
      var entry = item.map(function (element, j) {
        return (
          <td
            id={j}
            style={{ backgroundColor: bgColor }}
            onClick={() => {
              handleRowColAddition(i, j);
            }}
          >
            {element}
          </td>
        );
      });
      return (
        <tr
          id={i}
          onClick={() => {
            colorHandler();
          }}
        >
          {entry}
        </tr>
      );
    });
    return (
      <Table>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
  return (
    <>
      <div>{renderTable()}</div>
    </>
  );
};

export default MyTable;
