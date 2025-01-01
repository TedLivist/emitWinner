// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
import "hardhat/console.sol";

interface IContract {
  function attempt() external;
}

contract Contract {

  IContract public iContract;
  
  constructor(address _contractAddress) {
      iContract = IContract(_contractAddress);
  }

  function attemptCall() external {
    iContract.attempt();
  }
}
