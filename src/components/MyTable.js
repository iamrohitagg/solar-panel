import React, { useState, useEffect, useRef } from "react";
import { Table } from "react-bootstrap";

var MyTable = (props) => {
  const panelRef = useRef(null);
  useOutsideAlerter(panelRef);

  let [panel, setPanel] = useState([
    ["S", "O", "L", "A"],
    ["R", "P", "A", "N"],
    ["E", "L", "S", "O"],
    ["L", "A", "R", "R"],
  ]);

  const [flag, setflag] = useState(false);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        const sx = 1;
        const ex = 2;
        const sy = 2;
        const ey = 4;
        if (ref.current && !ref.current.contains(event.target)) {
          const newpanel = panel
            .slice(sx, ex + 1)
            .map((i) => i.slice(sy, ey + 1));
          setPanel(newpanel);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const handleRowColAddition = (i, j) => {
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
      <Table className={flag ? "border table-dark" : ""}>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
  return (
    <>
      <div ref={panelRef}>{renderTable()}</div>
    </>
  );
};

export default MyTable;
