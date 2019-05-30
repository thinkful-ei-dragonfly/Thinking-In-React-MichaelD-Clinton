import React from "react";
import Summary from "../Summary/Summary";

// the SummaryList is the

function SummaryList(props) {
  const summaryList = Object.keys(props.selected).map(key => (
    <Summary
      name={props.selected[key].name}
      key={key}
      cost={props.selected[key].cost}
    />
  ));

  return (
    <section className="main__summary">
      <h3>NEW GREENLEAF 2018</h3>
      {summaryList}
    </section>
  );
}

export default SummaryList;
