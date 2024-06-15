import cn from "classnames";

import styles from "./styles.module.scss";

const RadioInput = ({ name, value, onSelect, isSelected }) => {
  return (
    <label className={styles.container}>
      <button
        className={cn(styles.radio_input, {
          [styles.selected]: isSelected,
        })}
        onClick={() => onSelect(value)}
        type="button"
      />
      {/* <input type="radio" name={name} /> */}
      <span>{name}</span>
    </label>
  );
};

export default RadioInput;
