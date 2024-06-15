import styles from "./styles.module.scss";

const PricingItemWrapper = ({ children }) => {
  return <div className={styles.pricing_item}>{children}</div>;
};

export default PricingItemWrapper;
