const main = async () => {
    const [ deployer ] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance(); 
    
    console.log("deploying contracts with account:", deployer.address);
    console.log("account balance..", accountBalance.toString());

     // this will compile the contract and generate the necessary files needed to work with the contract under the artifacts
    const msgContractFactory = await hre.ethers.getContractFactory("sayHi");

    // Hardhat to create a local Ethereum network
    const msgContract = await msgContractFactory.deploy();

   // wait until the contract officially deployed to the blockchain
    await msgContract.deployed(); 

    console.log("sayHi contract address...", msgContract.address);
};

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    } catch (error) {
       console.log(error);
       process.exit(1);
    }
}
runMain(); 