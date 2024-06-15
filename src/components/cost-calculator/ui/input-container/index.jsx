import styles from "./styles.module.scss";

const InputContainer = ({ title, gap, children }) => {
  return (
    <div className={styles.input_container} style={{ gap }}>
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default InputContainer;
