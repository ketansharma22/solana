import { Connection,clusterApiUrl,PublicKey, Keypair } from "@solana/web3.js";

const publicc=(Keypair.generate().publicKey.toBase58())
console.log(publicc);
const conn=new Connection(clusterApiUrl("devnet"));
const address=new PublicKey("FwHw65mc2iJoVDs7LPyczUBxJphhCfX2dD83a6CEjKCH")
const balance=await conn.getBalance(address)

console.log(balance);