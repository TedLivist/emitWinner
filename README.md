# Solution to ALCHEMY Ethereum course W4 assignment

The assignment was to emit an event on method `(attempt)` of a deployed sepolia contract (goerli no longer functional, so used a sepolia contract instead).

The method requires that the `msg.sender` and the `tx.origin` not be the same in order to successfully emit the event.

To achieve this, I deployed a contract `(Contract)` that implemented an interface `(IContract)` of the `attempt` method on the target contract. During the deployment of the `Contract`, an instance of the target contract is saved on the contract state.

Then, a new method `(attemptCall)` was added to call the interface method using the instance of the target contract. This way the initiator of the tx is `tx.origin` but the `msg.sender` would be my contract. This successfully emits the event [here](https://sepolia.etherscan.io/address/0x890697B6bf90eA125D2Bc3B7B4F5AB2ec610C373#events). 

This is the transactioin hash `(0x46ccbc12122d0b3a7e8b0a545e95fd589926f9fc6620457382f6ec80eb31dfa3)`. As you can see, the `Winner` address is a contract address, but upon closer inspection of the transaction you can see that the initiator is an EOA which is different from the contract address, hence the emission of event.

The `scripts` directory contains `deploy` and `callAttempt` JS files. The deploy file was used to deploy the `Contract`, while, `callAttempt` was used to initiate the transaction.


# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
