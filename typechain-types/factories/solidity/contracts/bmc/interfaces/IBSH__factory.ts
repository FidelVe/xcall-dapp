/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IBSH,
  IBSHInterface,
} from "../../../../../solidity/contracts/bmc/interfaces/IBSH";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_src",
        type: "string",
      },
      {
        internalType: "string",
        name: "_svc",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_sn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_code",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_msg",
        type: "string",
      },
    ],
    name: "handleBTPError",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_from",
        type: "string",
      },
      {
        internalType: "string",
        name: "_svc",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_sn",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_msg",
        type: "bytes",
      },
    ],
    name: "handleBTPMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBSH__factory {
  static readonly abi = _abi;
  static createInterface(): IBSHInterface {
    return new utils.Interface(_abi) as IBSHInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IBSH {
    return new Contract(address, _abi, signerOrProvider) as IBSH;
  }
}