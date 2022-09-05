import React from 'react';

// chart
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts';

export default function SparkLine({
  id,
  height,
  width,
  color,
  currentColor,
  data,
  type,
}) {
  return (
    <SparklineComponent
      type={type}
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName='x'
      yName='yval'
      tooltipSettings={{
        visible: true,
        format: '${x} : data ${yval}',
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
}
