export function generateReport(result, validation) {
  console.log("----- Transaction Report -----");
  console.log("From Token:", result.from);
  console.log("To Token:", result.to);
  console.log("Amount:", result.amount);
  console.log("Transaction Hash:", result.txHash);
  console.log("Confirmed:", validation.confirmed);
  console.log("Block Number:", validation.blockNumber);
  console.log("------------------------------");
}
