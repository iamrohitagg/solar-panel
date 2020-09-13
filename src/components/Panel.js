import React from "react";
import MyTable from "./MyTable";

const Panel = () => {
  return (
    <div className="col-6 mx-auto">
      <MyTable />
      <p className="font-weight-normal">Click on any cell to add new panel</p>
    </div>
  );
};

export default Panel;
