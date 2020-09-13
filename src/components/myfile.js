import React, { useState, useRef } from "react";
import { Table } from "react-bootstrap";

var MyTable = () => {
  let [panel, setPanel] = useState([
    ["S", "O", "L", "A"],
    ["R", "P", "A", "N"],
    ["E", "L", "S", "O"],
    ["L", "A", "R", "R"],
  ]);

  const [bgColor, setbgColor] = useState("");
  const [flag, setflag] = useState(false);

  // const panelRef = useRef(null);

  // const onClickHandler = (state, rowinfo, column, instance) => {
  //   onClick: (e) => {
  //     console.log(column);
  //   };
  // };

  const onClickHandler = (event) => {
    // // let panelId = event.target.id;
    // // console.log(panelId);
    // setPanel(panel.push(["", "", "", ""]));
    // const addPanel = ["", "", "", ""];
    // if (event.target.id == 0) {
    //   setbgColor("green");
    // }
    // console.log(event.target.id);
    // setPanel(panel.push(addPanel));
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
              setflag(true);
            }}
          >
            {element}
          </td>
        );
      });
      return <tr id={i}>{entry}</tr>;
    });
    return (
      <Table>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
  return <>{renderTable()}</>;
};

export default MyTable;
