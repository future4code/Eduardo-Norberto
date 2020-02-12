import React from "react";
import { connect } from "react-redux";
import InputTask from "../InputTask";
import ListTask from "../ListTask";


export class Planner extends React.Component {
  render() {
    return (
      <div>
        <InputTask />
        <ListTask />
      </div>
    )
  }
}

export default connect()(Planner);
