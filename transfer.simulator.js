export function simulateTransfer(fromToken, toToken, amount) {
  console.log("Simulating cross-chain transfer...");

  return {
    from: fromToken,
    to: toToken,
    amount: amount,
    txHash: "0xSIMULATEDTXHASH123456789",
    status: "PENDING"
  };
}
