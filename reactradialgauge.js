// Bridges between React and the Canvas Gauge npm lib
// Use this.gauge.options.* to change parameters
// and then this.gauge.update() to render

import React from 'react';
import { RadialGauge } from 'canvas-gauges';

class ReactRadialGauge extends React.Component {
  constructor(e) {
    super(e);
    this.canvasRef = React.createRef();
  }

  componentDidMount () {
    const options = Object.assign({}, this.props, { renderTo: this.canvasRef.current });  
    // renders the element to the webpage
    this.gauge = new RadialGauge(options).draw();
    // assign the initial value
    this.gauge.value = this.props.value;
  }

  componentDidUpdate() {
   if(this.gauge.value !== this.props.value) 
    this.gauge.value = this.props.value;
  }

  render () {
    return (
      <canvas ref={this.canvasRef} />
    )
  }
}

export default ReactRadialGauge;
