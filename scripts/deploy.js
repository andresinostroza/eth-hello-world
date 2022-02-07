const { ethers } = require('hardhat')

async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");

    const helloWorld = await HelloWorld.deploy("Hello World!");

    console.log("Contract was deployed to address: ", helloWorld.address)
}

main ()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });