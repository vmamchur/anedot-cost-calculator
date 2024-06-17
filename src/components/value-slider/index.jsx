import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "./Slider.scss";

import Tooltip from "./ui/tooltip";

import styles from "./styles.module.scss";

const ValueSlider = ({
  value,
  setValue,
  max,
  isMarksVisible,
  tooltipValue,
}) => {
  const marks = {
    0: isMarksVisible ? "0" : " ",
    [max]: isMarksVisible ? `${max}` : " ",
  };

  return (
    <div className={styles.slider}>
      <Slider
        max={max}
        value={value}
        onChange={setValue}
        styles={{
          track: {
            backgroundColor: "#D0DEFD",
          },
          rail: {
            backgroundColor: "#D0DEFD",
          },
          handle: {
            backgroundColor: "#1761F5",
            border: "none",
            boxShadow: "none",
            opacity: 1,
          },
        }}
        dotStyle={{
          backgroundColor: "#D0DEFD",
          width: 4,
          height: 16,
          bottom: "-6px",
          border: "none",
          borderRadius: 0,
        }}
        marks={marks}
        handleRender={(renderProps) => (
          <div {...renderProps.props}>
            <Tooltip value={tooltipValue} />
          </div>
        )}
      />
    </div>
  );
};

export default ValueSlider;
