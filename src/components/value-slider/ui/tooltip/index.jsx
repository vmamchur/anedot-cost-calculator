import styles from "./styles.module.scss";

const Tooltip = ({ value }) => {
  return (
    <div className={styles.tooltip}>
      <span>{value}</span>
    </div>
  );
};

export default Tooltip;
