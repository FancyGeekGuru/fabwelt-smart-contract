const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json")

console.log(JSON.stringify(contract.abi));

const provider = new ethers.providers.AlchemyProvider(network = "ropsten", API_KEY)
const signer = new ethers.Wallet(PRIVATE_KEY, provider)
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer)

async function main() {
    const message = await helloWorldContract.message()
    console.log("current_msg: ", message)

    console.log("=============updating message==================")
    const tx = await helloWorldContract.update("How are you");
    await tx.wait();

    const newMessage = await helloWorldContract.message();
    console.log("The new message is: " + newMessage);

}

main()
    .then(_ => {
        console.log("OK")
    })
    .catch(err => {
        console.log("err: ", err)
    })