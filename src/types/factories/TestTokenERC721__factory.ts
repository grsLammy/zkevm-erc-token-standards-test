/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestTokenERC721,
  TestTokenERC721Interface,
} from "../TestTokenERC721";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_enabled",
        type: "bool",
      },
    ],
    name: "AdminAccessSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_admins",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
    ],
    name: "getHolderTokenIds",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "isAdmin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "string[]",
        name: "_hashes",
        type: "string[]",
      },
    ],
    name: "issueBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "string",
        name: "hash",
        type: "string",
      },
    ],
    name: "issueToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060408051808201825260118152702a32b9ba1022a9219b9918902a37b5b2b760791b602080830191825283518085019094526005845264545437323160d81b9084015281519192916200006891600091620000f7565b5080516200007e906001906020840190620000f7565b5050506200009b62000095620000a160201b60201c565b620000a5565b620001da565b3390565b600b80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b82805462000105906200019d565b90600052602060002090601f01602090048101928262000129576000855562000174565b82601f106200014457805160ff191683800117855562000174565b8280016001018555821562000174579182015b828111156200017457825182559160200191906001019062000157565b506200018292915062000186565b5090565b5b8082111562000182576000815560010162000187565b600181811c90821680620001b257607f821691505b60208210811415620001d457634e487b7160e01b600052602260045260246000fd5b50919050565b6121a680620001ea6000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80634f6ccce7116100f957806395d89b4111610097578063c87b56dd11610071578063c87b56dd146103ac578063e985e9c5146103bf578063f2fde38b146103fb578063f7ea22e01461040e57600080fd5b806395d89b411461037e578063a22cb46514610386578063b88d4fde1461039957600080fd5b806370a08231116100d357806370a0823114610332578063715018a6146103455780637da7fc801461034d5780638da5cb5b1461036d57600080fd5b80634f6ccce7146102f95780635669c94f1461030c5780636352211e1461031f57600080fd5b806318160ddd116101665780632f745c59116101405780632f745c59146102ad57806342842e0e146102c057806342966c68146102d35780634b0bddd2146102e657600080fd5b806318160ddd1461026657806323b872dd1461026e57806324d7806c1461028157600080fd5b806301ffc9a7146101ae57806306fdde03146101d6578063081812fc146101eb578063095ea7b3146102165780630d5e20531461022b57806317d70f7c1461024e575b600080fd5b6101c16101bc366004611dbf565b610421565b60405190151581526020015b60405180910390f35b6101de610432565b6040516101cd9190611eee565b6101fe6101f9366004611df9565b6104c4565b6040516001600160a01b0390911681526020016101cd565b610229610224366004611d95565b6104eb565b005b6101c1610239366004611b2c565b600c6020526000908152604090205460ff1681565b600d546102589081565b6040519081526020016101cd565b600954610258565b61022961027c366004611b7a565b610606565b6101c161028f366004611b2c565b6001600160a01b03166000908152600c602052604090205460ff1690565b6102586102bb366004611d95565b610638565b6102296102ce366004611b7a565b6106ce565b6102296102e1366004611df9565b6106e9565b6102296102f4366004611d0b565b61071a565b610258610307366004611df9565b610785565b61025861031a366004611d47565b610818565b6101fe61032d366004611df9565b610892565b610258610340366004611b2c565b6108f2565b610229610978565b61036061035b366004611b2c565b61098c565b6040516101cd9190611eaa565b600b546001600160a01b03166101fe565b6101de610a2e565b610229610394366004611d0b565b610a3d565b6102296103a7366004611bb6565b610a4c565b6101de6103ba366004611df9565b610a84565b6101c16103cd366004611b47565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b610229610409366004611b2c565b610a8f565b61036061041c366004611c32565b610b05565b600061042c82610c01565b92915050565b60606000805461044190612082565b80601f016020809104026020016040519081016040528092919081815260200182805461046d90612082565b80156104ba5780601f1061048f576101008083540402835291602001916104ba565b820191906000526020600020905b81548152906001019060200180831161049d57829003601f168201915b5050505050905090565b60006104cf82610c26565b506000908152600460205260409020546001600160a01b031690565b60006104f682610892565b9050806001600160a01b0316836001600160a01b031614156105695760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b0382161480610585575061058581336103cd565b6105f75760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610560565b6106018383610c85565b505050565b610611335b82610cf3565b61062d5760405162461bcd60e51b815260040161056090611f94565b610601838383610d72565b6000610643836108f2565b82106106a55760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610560565b506001600160a01b03919091166000908152600760209081526040808320938352929052205490565b61060183838360405180602001604052806000815250610a4c565b6106f23361060b565b61070e5760405162461bcd60e51b815260040161056090611f94565b61071781610f19565b50565b610722610f22565b6001600160a01b0382166000818152600c6020908152604091829020805460ff19168515159081179091558251938452908301527fe529461c8529abc0e0fe7c5ee361f74fe22e0b7574df1fc0b7558a282091fb78910160405180910390a15050565b600061079060095490565b82106107f35760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610560565b600982815481106108065761080661212e565b90600052602060002001549050919050565b336000908152600c602052604081205460ff16806108405750600b546001600160a01b031633145b61085c5760405162461bcd60e51b815260040161056090611f53565b61086a600d80546001019055565b6000610875600d5490565b90506108818482610f7c565b61088b81846110ca565b9392505050565b6000818152600260205260408120546001600160a01b03168061042c5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610560565b60006001600160a01b03821661095c5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610560565b506001600160a01b031660009081526003602052604090205490565b610980610f22565b61098a6000611164565b565b60606000610999836108f2565b905060008167ffffffffffffffff8111156109b6576109b6612144565b6040519080825280602002602001820160405280156109df578160200160208202803683370190505b50905060005b82811015610a26576109f78582610638565b828281518110610a0957610a0961212e565b602090810291909101015280610a1e816120bd565b9150506109e5565b509392505050565b60606001805461044190612082565b610a483383836111b6565b5050565b610a563383610cf3565b610a725760405162461bcd60e51b815260040161056090611f94565b610a7e84848484611285565b50505050565b606061042c826112b8565b610a97610f22565b6001600160a01b038116610afc5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610560565b61071781611164565b336000908152600c602052604090205460609060ff1680610b305750600b546001600160a01b031633145b610b4c5760405162461bcd60e51b815260040161056090611f53565b815160008167ffffffffffffffff811115610b6957610b69612144565b604051908082528060200260200182016040528015610b92578160200160208202803683370190505b50905060005b82811015610bf8576000610bc587878481518110610bb857610bb861212e565b6020026020010151610818565b905080838381518110610bda57610bda61212e565b60209081029190910101525080610bf0816120bd565b915050610b98565b50949350505050565b60006001600160e01b0319821663780e9d6360e01b148061042c575061042c826113c1565b6000818152600260205260409020546001600160a01b03166107175760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610560565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610cba82610892565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610cff83610892565b9050806001600160a01b0316846001600160a01b03161480610d4657506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610d6a5750836001600160a01b0316610d5f846104c4565b6001600160a01b0316145b949350505050565b826001600160a01b0316610d8582610892565b6001600160a01b031614610de95760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610560565b6001600160a01b038216610e4b5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610560565b610e56838383611411565b610e61600082610c85565b6001600160a01b0383166000908152600360205260408120805460019290610e8a90849061203f565b90915550506001600160a01b0382166000908152600360205260408120805460019290610eb8908490612013565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6107178161141c565b600b546001600160a01b0316331461098a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610560565b6001600160a01b038216610fd25760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610560565b6000818152600260205260409020546001600160a01b0316156110375760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610560565b61104360008383611411565b6001600160a01b038216600090815260036020526040812080546001929061106c908490612013565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000828152600260205260409020546001600160a01b03166111455760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b6064820152608401610560565b60008281526006602090815260409091208251610601928401906119c9565b600b80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b031614156112185760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610560565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611290848484610d72565b61129c8484848461145c565b610a7e5760405162461bcd60e51b815260040161056090611f01565b60606112c382610c26565b600082815260066020526040812080546112dc90612082565b80601f016020809104026020016040519081016040528092919081815260200182805461130890612082565b80156113555780601f1061132a57610100808354040283529160200191611355565b820191906000526020600020905b81548152906001019060200180831161133857829003601f168201915b50505050509050600061137360408051602081019091526000815290565b9050805160001415611386575092915050565b8151156113b85780826040516020016113a0929190611e3e565b60405160208183030381529060405292505050919050565b610d6a84611569565b60006001600160e01b031982166380ac58cd60e01b14806113f257506001600160e01b03198216635b5e139f60e01b145b8061042c57506301ffc9a760e01b6001600160e01b031983161461042c565b6106018383836115dc565b61142581611694565b6000818152600660205260409020805461143e90612082565b15905061071757600081815260066020526040812061071791611a4d565b60006001600160a01b0384163b1561155e57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906114a0903390899088908890600401611e6d565b602060405180830381600087803b1580156114ba57600080fd5b505af19250505080156114ea575060408051601f3d908101601f191682019092526114e791810190611ddc565b60015b611544573d808015611518576040519150601f19603f3d011682016040523d82523d6000602084013e61151d565b606091505b50805161153c5760405162461bcd60e51b815260040161056090611f01565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610d6a565b506001949350505050565b606061157482610c26565b600061158b60408051602081019091526000815290565b905060008151116115ab576040518060200160405280600081525061088b565b806115b58461173b565b6040516020016115c6929190611e3e565b6040516020818303038152906040529392505050565b6001600160a01b0383166116375761163281600980546000838152600a60205260408120829055600182018355919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af0155565b61165a565b816001600160a01b0316836001600160a01b03161461165a5761165a8382611839565b6001600160a01b03821661167157610601816118d6565b826001600160a01b0316826001600160a01b031614610601576106018282611985565b600061169f82610892565b90506116ad81600084611411565b6116b8600083610c85565b6001600160a01b03811660009081526003602052604081208054600192906116e190849061203f565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60608161175f5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156117895780611773816120bd565b91506117829050600a8361202b565b9150611763565b60008167ffffffffffffffff8111156117a4576117a4612144565b6040519080825280601f01601f1916602001820160405280156117ce576020820181803683370190505b5090505b8415610d6a576117e360018361203f565b91506117f0600a866120d8565b6117fb906030612013565b60f81b8183815181106118105761181061212e565b60200101906001600160f81b031916908160001a905350611832600a8661202b565b94506117d2565b60006001611846846108f2565b611850919061203f565b6000838152600860205260409020549091508082146118a3576001600160a01b03841660009081526007602090815260408083208584528252808320548484528184208190558352600890915290208190555b5060009182526008602090815260408084208490556001600160a01b039094168352600781528383209183525290812055565b6009546000906118e89060019061203f565b6000838152600a6020526040812054600980549394509092849081106119105761191061212e565b9060005260206000200154905080600983815481106119315761193161212e565b6000918252602080832090910192909255828152600a9091526040808220849055858252812055600980548061196957611969612118565b6001900381819060005260206000200160009055905550505050565b6000611990836108f2565b6001600160a01b039093166000908152600760209081526040808320868452825280832085905593825260089052919091209190915550565b8280546119d590612082565b90600052602060002090601f0160209004810192826119f75760008555611a3d565b82601f10611a1057805160ff1916838001178555611a3d565b82800160010185558215611a3d579182015b82811115611a3d578251825591602001919060010190611a22565b50611a49929150611a83565b5090565b508054611a5990612082565b6000825580601f10611a69575050565b601f01602090049060005260206000209081019061071791905b5b80821115611a495760008155600101611a84565b600067ffffffffffffffff831115611ab257611ab2612144565b611ac5601f8401601f1916602001611fe2565b9050828152838383011115611ad957600080fd5b828260208301376000602084830101529392505050565b80356001600160a01b0381168114611b0757600080fd5b919050565b600082601f830112611b1d57600080fd5b61088b83833560208501611a98565b600060208284031215611b3e57600080fd5b61088b82611af0565b60008060408385031215611b5a57600080fd5b611b6383611af0565b9150611b7160208401611af0565b90509250929050565b600080600060608486031215611b8f57600080fd5b611b9884611af0565b9250611ba660208501611af0565b9150604084013590509250925092565b60008060008060808587031215611bcc57600080fd5b611bd585611af0565b9350611be360208601611af0565b925060408501359150606085013567ffffffffffffffff811115611c0657600080fd5b8501601f81018713611c1757600080fd5b611c2687823560208401611a98565b91505092959194509250565b60008060408385031215611c4557600080fd5b611c4e83611af0565b915060208084013567ffffffffffffffff80821115611c6c57600080fd5b818601915086601f830112611c8057600080fd5b813581811115611c9257611c92612144565b8060051b611ca1858201611fe2565b8281528581019085870183870188018c1015611cbc57600080fd5b60009350835b85811015611cf957813587811115611cd8578586fd5b611ce68e8b838c0101611b0c565b8552509288019290880190600101611cc2565b50989b909a5098505050505050505050565b60008060408385031215611d1e57600080fd5b611d2783611af0565b915060208301358015158114611d3c57600080fd5b809150509250929050565b60008060408385031215611d5a57600080fd5b611d6383611af0565b9150602083013567ffffffffffffffff811115611d7f57600080fd5b611d8b85828601611b0c565b9150509250929050565b60008060408385031215611da857600080fd5b611db183611af0565b946020939093013593505050565b600060208284031215611dd157600080fd5b813561088b8161215a565b600060208284031215611dee57600080fd5b815161088b8161215a565b600060208284031215611e0b57600080fd5b5035919050565b60008151808452611e2a816020860160208601612056565b601f01601f19169290920160200192915050565b60008351611e50818460208801612056565b835190830190611e64818360208801612056565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611ea090830184611e12565b9695505050505050565b6020808252825182820181905260009190848201906040850190845b81811015611ee257835183529284019291840191600101611ec6565b50909695505050505050565b60208152600061088b6020830184611e12565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526021908201527f43616c6c657220646f6573206e6f7420686176652041646d696e2041636365736040820152607360f81b606082015260800190565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b604051601f8201601f1916810167ffffffffffffffff8111828210171561200b5761200b612144565b604052919050565b60008219821115612026576120266120ec565b500190565b60008261203a5761203a612102565b500490565b600082821015612051576120516120ec565b500390565b60005b83811015612071578181015183820152602001612059565b83811115610a7e5750506000910152565b600181811c9082168061209657607f821691505b602082108114156120b757634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156120d1576120d16120ec565b5060010190565b6000826120e7576120e7612102565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461071757600080fdfea2646970667358221220f011d91d153385e4f9e6a7012d46c336d43c65d99ff484dc6ed7d57bc7ea6dad64736f6c63430008070033";

export class TestTokenERC721__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestTokenERC721> {
    return super.deploy(overrides || {}) as Promise<TestTokenERC721>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestTokenERC721 {
    return super.attach(address) as TestTokenERC721;
  }
  connect(signer: Signer): TestTokenERC721__factory {
    return super.connect(signer) as TestTokenERC721__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTokenERC721Interface {
    return new utils.Interface(_abi) as TestTokenERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestTokenERC721 {
    return new Contract(address, _abi, signerOrProvider) as TestTokenERC721;
  }
}