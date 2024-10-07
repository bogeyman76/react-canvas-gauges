// Bridges between React and the Canvas Gauge npm lib
// Use this.gauge.options.* to change parameters
// and then this.gauge.update() to render

import React, { useRef, useEffect } from 'react';
import { RadialGauge } from 'canvas-gauges';

const ReactRadialGauge = (props) => {
  const canvasRef = useRef(null);
  const gaugeRef = useRef(null);

  useEffect(() => {
    if (!gaugeRef.current) {
      const options = { ...props, renderTo: canvasRef.current };
      gaugeRef.current = new RadialGauge(options).draw();
    }

    if (gaugeRef.current.value !== props.value) {
      gaugeRef.current.value = props.value;
    }

    return () => {
      if (gaugeRef.current) {
        gaugeRef.current.destroy();
      }
    };
  }, [props]);

  return <canvas ref={canvasRef} />;
});

export default ReactRadialGauge;
