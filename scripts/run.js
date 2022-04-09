const main = async () => {
     //  grab the wallet address of contract owner and a random wallet address
    //const [ owner, randomPerson ] = await hre.ethers.getSigners();

    // this will compile the contract and generate the necessary files needed to work with the contract under the artifacts
const msgContractFactory = await hre.ethers.getContractFactory("sayHi");

// Hardhat to create a local Ethereum network
const msgContract = await msgContractFactory.deploy();

// wait until the contract officially deployed to the blockchain
await msgContract.deployed(); 

console.log("contract deployed to..", msgContract.address);
console.log("contract deployed by..", owner.address);

let msgCount;
msgCount = await msgContract.getTotalMessage();
console.log(msgCount.toNumber());

// let's send a message 
let sendmsgTxn = await msgContract.sendmsg("Hey, send eth"); 
await sendmsgTxn.wait(); // wait for the transaction to be mined

const [_, randomPerson ] = await hre.ethers.getSigners();
sendmsgTxn = await msgContract.connect(randomPerson).sendmsg("Hi, pls send another eth!");
await sendmsgTxn.wait() // wait for the transaction to be mined 

let allMsgs = await msgContract.getAllMessages(); 
console.log(allMsgs); 

/* msgCount = await msgContract.getTotalMessage();
let getAllMessagesTxn = msgContract.getAllMessages();
await getAllMessagesTxn.wait();
msgCount = await msgContract.getTotalMessage();

sendmsgTxn = await msgContract.connect(randomPerson).sendmsg(); 
await sendmsgTxn.wait();
msgCount = await msgContract.getTotalMessage(); */

};

const runMain = async () => {
    try {
        await main();
        process.exit(0); // exit node process without error

    } catch (error) {
        process.exit(1); // exit node process while indicating 'Uncaught Fatal Exception' error
    console.log(error); 
    }
};
runMain();

