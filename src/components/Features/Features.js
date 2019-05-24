import React from 'react';


function Features () {

  const CPU = {
    name:'firstCpu',
    cost:100
  }

  const OS = {}
  const GPU = {}


  return(
    <div className="feature">
      {CPU.name}
      {CPU.cost}
    </div>
  )
}

export default Features
