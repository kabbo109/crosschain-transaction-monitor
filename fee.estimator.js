export function estimateFee(amount) {
  const fee = amount * 0.002;
  return fee.toFixed(4);
}
