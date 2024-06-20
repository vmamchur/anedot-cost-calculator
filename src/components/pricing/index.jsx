import logo from "../../assets/logo.svg";

import styles from "./styles.module.scss";
import PricingItemWrapper from "./ui/pricing-item-wrapper";

const PRICING_TYPES = [
  {
    title: "501(c)(3)",
    paymentMethods: [
      {
        title: "Credit/debit cards, Apple Pay, Google Pay, PayPal",
        price: "3.3% + 30c",
      },
      {
        title: "ACH",
        price: "0.3% + 30c",
      },
    ],
  },
  {
    title: "Standart",
    paymentMethods: [
      {
        title: "Credit/debit cards, Apple Pay, Google Pay, PayPal",
        price: "4.0% + 30c",
      },
    ],
  },
  {
    title: "Ministry",
    paymentMethods: [
      {
        title: "Credit/debit cards, Apple Pay, Google Pay, PayPal",
        price: "3.0% + 30c",
      },
      {
        title: "ACH",
        price: "0.3% + 30c",
      },
    ],
  },
];

const OTHER_PLATFORMS = [
  {
    title: "GiveButter",
    subtitle: "Peer-to-Peer Plan",
    price: "$890",
  },
  {
    title: "Classy",
    subtitle: "Pro + Live Plan",
    price: "$4,550",
  },
  {
    title: "EventBrite",
    subtitle: "Flex Plan",
    price: "$4,600",
  },
  {
    title: "OneCause",
    subtitle: "Professional Plan",
    price: "$2,140",
  },
  {
    title: "Virtuous",
    subtitle: "Platform Plan",
    price: "$1,890",
  },
];

const Pricing = () => {
  return (
    <div className={styles.pricing}>
      <h2>Anedot Transparent Pricing</h2>
      <h3>Compared with other platforms</h3>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img src={logo} />
          {PRICING_TYPES.map((pricingType, index) => (
            <PricingItemWrapper key={index}>
              <div className={styles.pricing_type}>
                <h5 className={styles.pricing_item_title}>
                  {pricingType.title}
                </h5>
                {pricingType.paymentMethods.map((paymentMethod, index) => (
                  <p key={index}>
                    {paymentMethod.title}: <span>{paymentMethod.price}</span>
                  </p>
                ))}
              </div>
            </PricingItemWrapper>
          ))}
        </div>

        <div className={styles.right}>
          <h4>Other Platform</h4>
          {OTHER_PLATFORMS.map((platform, index) => (
            <PricingItemWrapper key={index}>
              <div className={styles.other_platform}>
                <div className={styles.other_platform_heading}>
                  <h5 className={styles.pricing_item_title}>
                    {platform.title}
                  </h5>
                  <span>{platform.subtitle}</span>
                </div>
                <span className={styles.other_platform_price}>
                  {platform.price}
                </span>
              </div>
            </PricingItemWrapper>
          ))}
          <p className={styles.disclaimer}>
            All pricing sourced from competitor websites and galapricing.com.
            Pricing subject to change
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
