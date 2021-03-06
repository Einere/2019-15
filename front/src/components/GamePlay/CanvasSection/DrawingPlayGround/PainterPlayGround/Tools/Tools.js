import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  VerticalAlignDiv,
  ToolsStyle,
  ToolTitleStyle,
} from 'components/GamePlay/CanvasSection/DrawingPlayGround/PainterPlayGround/Tools/Tools.style';
import ColorPicker from 'components/GamePlay/CanvasSection/DrawingPlayGround/PainterPlayGround/Tools/ColorPicker/ColorPicker';
import ToolType from 'components/GamePlay/CanvasSection/DrawingPlayGround/PainterPlayGround/Tools/ToolType/ToolType';
import PainterToolManager from 'components/GamePlay/CanvasSection/DrawingPlayGround/PainterPlayGround/Tools/ToolType/PainterToolManager';
import Slider from 'components/globalComponents/Slider/Slider';

Tools.propTypes = {
  drawingOptions: PropTypes.shape({
    tool: PropTypes.oneOf(PainterToolManager.toolList),
    fillColor: PropTypes.string,
    strokeColor: PropTypes.string,
    strokeWidth: PropTypes.number,
  }),
  setDrawingOptions: PropTypes.func.isRequired,
};

Tools.defaultProps = {
  drawingOptions: PropTypes.shape({
    tool: PainterToolManager.toolList[0],
    fillColor: '#FFFFFF',
    strokeColor: '#000000',
    strokeWidth: 10,
  }),
};

export default function Tools({ drawingOptions, setDrawingOptions }) {
  const { tool, strokeColor, strokeWidth, fillColor } = drawingOptions;
  const changeTool = (toolToChange) => {
    setDrawingOptions({ type: 'tool', value: toolToChange });
  };

  const changeStrokeColor = (rgb) => {
    setDrawingOptions({ type: 'strokeColor', value: rgb });
  };

  const changeStrokeWidth = useCallback(
    (newStrokeWidth) => {
      setDrawingOptions({ type: 'strokeWidth', value: newStrokeWidth });
    },
    [setDrawingOptions],
  );

  const changeFillColor = (rgb) => {
    setDrawingOptions({ type: 'fillColor', value: rgb });
  };

  return (
    <ToolsStyle>
      <div>
        <ToolTitleStyle>도구</ToolTitleStyle>
        <ToolType tool={tool} changeTool={changeTool} />
      </div>
      <div>
        <ToolTitleStyle>선 굵기</ToolTitleStyle>
        <VerticalAlignDiv>
          <Slider
            max={50}
            min={5}
            unit={5}
            initialStep={strokeWidth}
            onChange={changeStrokeWidth}
          />
        </VerticalAlignDiv>
      </div>
      <div>
        <ToolTitleStyle>선 색</ToolTitleStyle>
        <ColorPicker color={strokeColor} changeColor={changeStrokeColor} />
      </div>
      <div>
        <ToolTitleStyle>채우기 색</ToolTitleStyle>
        <ColorPicker color={fillColor} changeColor={changeFillColor} />
      </div>
    </ToolsStyle>
  );
}
