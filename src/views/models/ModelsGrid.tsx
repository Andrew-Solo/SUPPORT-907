import React, {FC} from "react";
import Model from "../../domains/Model";
import {FlexboxGrid} from "rsuite";

const ModelsGrid: FC<{models: Model<any, any>[]}> = ({models}) => {
  return (
    <FlexboxGrid style={{gap: 10}}>
      {models.map((model) => (
        <FlexboxGrid.Item key={model.id} style={{width: 150, height: 150}}>
          {model.title}
        </FlexboxGrid.Item>
      ))}
    </FlexboxGrid>
  )
};
export default ModelsGrid