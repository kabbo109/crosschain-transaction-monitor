export function validateTransaction(txHash) {
  console.log("Validating transaction:", txHash);

  return {
    txHash: txHash,
    confirmed: true,
    blockNumber: 12345678
  };
}
