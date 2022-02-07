const { API_KEY, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env


const { ethers, network } = require("hardhat");

const contract = require("..artifacts/contracts/HelloWorld.sol/HelloWorld.json");

const alchemyProvider = new ethers.providers.AlchemyProvider(network='ropsten', API_KEY);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer); 

async function main () {

}


main ()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });