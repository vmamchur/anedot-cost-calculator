import { useEffect, useState } from "react";

import featureIcon from "../../assets/feature.svg";

import calculateCost from "../../helpers/calculate-cost";
import InputContainer from "./ui/input-container";
import ValueSlider from "../value-slider";
import RadioInput from "../radio-input";

import styles from "./styles.module.scss";

const TYPES_OF_ORGANIZATION = [
  {
    name: "501(c)(​З)",
    rate: 0.033,
  },
  {
    name: "Standard",
    rate: 0.04,
  },
  {
    name: "Ministry",
    rate: 0.03,
  },
];

const FEATURES_ITEMS = [
  "QR codes",
  "Ticket + donation",
  "Donor covers fees",
  "No monthly fees",
  "Unlimited ticket types",
];

const CostCalculator = () => {
  const [rate, setRate] = useState(TYPES_OF_ORGANIZATION[0].rate);
  const [moneyWillRaise, setMoneyWillRaise] = useState(0);
  const [guestsCount, setGuests] = useState(0);
  const [cashTicketPercentage, setCashTicket] = useState(0);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    const calculatedCost = calculateCost(
      rate,
      moneyWillRaise,
      guestsCount,
      cashTicketPercentage
    );

    setCost(calculatedCost);
  }, [rate, moneyWillRaise, guestsCount, cashTicketPercentage]);

  return (
    <div className={styles.cost_calculator}>
      <div className={styles.left}>
        <h3>Cost Calculator</h3>
        <p>
          Make informed decisions and discover how low our cost can be with
          simple and transported pricing.
        </p>

        <form>
          <InputContainer title="Type of organization">
            <div className={styles.radio_container}>
              {TYPES_OF_ORGANIZATION.map((type, index) => (
                <RadioInput
                  key={index}
                  name={type.name}
                  value={type.rate}
                  onSelect={setRate}
                  isSelected={rate === type.rate}
                />
              ))}
            </div>
          </InputContainer>

          <InputContainer title="How much money will you raise?">
            <ValueSlider
              value={moneyWillRaise}
              setValue={setMoneyWillRaise}
              max={100000}
              tooltipValue={`$${moneyWillRaise.toLocaleString()}`}
            />
          </InputContainer>

          <InputContainer title="How many guests do you expert?">
            <ValueSlider
              value={guestsCount}
              setValue={setGuests}
              max={1000}
              tooltipValue={guestsCount.toLocaleString()}
            />
          </InputContainer>

          <InputContainer title="% of cash ticket purchases">
            <ValueSlider
              value={cashTicketPercentage}
              setValue={setCashTicket}
              max={100}
              isMarksVisible
              tooltipValue={`${cashTicketPercentage}%`}
            />
          </InputContainer>
        </form>
      </div>

      <div className={styles.right}>
        <h3>Anedot</h3>
        <div className={styles.cost}>
          <span>${cost}</span>
          <span>*Even less with Donor Covers Fees</span>
        </div>
        <button className={styles.start_button}>Start Now</button>
        <ul className={styles.features}>
          {FEATURES_ITEMS.map((item, index) => (
            <li key={index}>
              <img src={featureIcon} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CostCalculator;
