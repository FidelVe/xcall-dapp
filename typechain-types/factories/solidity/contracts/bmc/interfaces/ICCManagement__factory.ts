/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICCManagement,
  ICCManagementInterface,
} from "../../../../../solidity/contracts/bmc/interfaces/ICCManagement";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_from",
        type: "string",
      },
      {
        internalType: "string",
        name: "_reachable",
        type: "string",
      },
    ],
    name: "addReachable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_to",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_response",
        type: "bool",
      },
    ],
    name: "getFee",
    outputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_dst",
        type: "string",
      },
    ],
    name: "getHop",
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
        internalType: "string",
        name: "_svc",
        type: "string",
      },
    ],
    name: "getService",
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
        internalType: "string",
        name: "_net",
        type: "string",
      },
    ],
    name: "getVerifier",
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
        internalType: "string",
        name: "_link",
        type: "string",
      },
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "isLinkRelay",
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
        internalType: "string",
        name: "_from",
        type: "string",
      },
      {
        internalType: "string",
        name: "_reachable",
        type: "string",
      },
    ],
    name: "removeReachable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_dst",
        type: "string",
      },
    ],
    name: "resolveNext",
    outputs: [
      {
        internalType: "string",
        name: "_next",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ICCManagement__factory {
  static readonly abi = _abi;
  static createInterface(): ICCManagementInterface {
    return new utils.Interface(_abi) as ICCManagementInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICCManagement {
    return new Contract(address, _abi, signerOrProvider) as ICCManagement;
  }
}
