import React from "react";
import Feature from "../Feature/Feature";

function Features(props) {
  const features = Object.keys(props.features).map(key => {
    const options = props.features[key].map((item, index) => {
      return(<Feature 
        item={item}
        selected={props.selected}
        itemKey={key}
        index={index}
        updateFeature={props.updateFeature}
        name={props.name}
        cost={props.cost}
      />)
      ;
    });

    return (
      <div className="feature" key={key}>
        <div className="feature__name">{key}</div>
        <ul className="feature__list">{options}</ul>
      </div>
    );
  });
  return features;
}

export default Features;
