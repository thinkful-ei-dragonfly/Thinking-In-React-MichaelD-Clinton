import React from "react";

function Summary(props) {
  const summary = Object.keys(props.selected).map(key => (
    <div className="summary__option" key={key}>
      <div className="summary__option__label">{key} </div>
      <div className="summary__option__value">{props.selected[key].name}</div>
      <div className="summary__option__cost">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        }).format(props.selected[key].cost)}
      </div>
    </div>
  ));

  return (
    <section className="main__summary">
      <h3>NEW GREENLEAF 2018</h3>
      {summary}
    </section>

    // <main>
    //     <section className="main__form"></section>
    //     <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
    //     <div key={PLACEHOLDERFORKEYCHANGEHTIS} className="feature">Processor
    //       <div className="feature__name"></div>
    //       <ul className="feature__list">
    //         <li className="feature__item">
    //           <div className="feature__option feature__selected"></div>
    //           </li>
    //       </ul>
    //     </div>
    //   </main>
  );
}

export default Summary;
