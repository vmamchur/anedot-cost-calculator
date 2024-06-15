export default function calculateCost(
  rate,
  moneyRaised,
  guestsCount,
  cashTicketPercentage
) {
  return Math.round(
    rate * moneyRaised + guestsCount * 0.3 * (cashTicketPercentage / 100)
  );
}
