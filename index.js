import { connectRPC } from "./rpc.client.js";
import { simulateTransfer } from "./transfer.simulator.js";
import { validateTransaction } from "./transaction.validator.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Crosschain Transaction Monitor");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const result = simulateTransfer("TOKEN_X", "TOKEN_Y", 500);

const validation = validateTransaction(result.txHash);

generateReport(result, validation);
