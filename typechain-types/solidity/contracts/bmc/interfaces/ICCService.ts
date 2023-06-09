/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export declare namespace Types {
  export type ResponseMessageStruct = {
    code: PromiseOrValue<BigNumberish>;
    message: PromiseOrValue<string>;
  };

  export type ResponseMessageStructOutput = [BigNumber, string] & {
    code: BigNumber;
    message: string;
  };

  export type FeeInfoStruct = {
    network: PromiseOrValue<string>;
    values: PromiseOrValue<BigNumberish>[];
  };

  export type FeeInfoStructOutput = [string, BigNumber[]] & {
    network: string;
    values: BigNumber[];
  };

  export type BTPMessageStruct = {
    src: PromiseOrValue<string>;
    dst: PromiseOrValue<string>;
    svc: PromiseOrValue<string>;
    sn: PromiseOrValue<BigNumberish>;
    message: PromiseOrValue<BytesLike>;
    nsn: PromiseOrValue<BigNumberish>;
    feeInfo: Types.FeeInfoStruct;
  };

  export type BTPMessageStructOutput = [
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    Types.FeeInfoStructOutput
  ] & {
    src: string;
    dst: string;
    svc: string;
    sn: BigNumber;
    message: string;
    nsn: BigNumber;
    feeInfo: Types.FeeInfoStructOutput;
  };

  export type ResponseStruct = {
    nsn: PromiseOrValue<BigNumberish>;
    feeInfo: Types.FeeInfoStruct;
  };

  export type ResponseStructOutput = [BigNumber, Types.FeeInfoStructOutput] & {
    nsn: BigNumber;
    feeInfo: Types.FeeInfoStructOutput;
  };
}

export interface ICCServiceInterface extends utils.Interface {
  functions: {
    "addRequest(int256,string,address,uint256)": FunctionFragment;
    "addReward(string,address,uint256)": FunctionFragment;
    "clearReward(string,address)": FunctionFragment;
    "decodeResponseMessage(bytes)": FunctionFragment;
    "getReward(string,address)": FunctionFragment;
    "handleDropFee(string,uint256[])": FunctionFragment;
    "handleErrorFee(string,int256,(string,uint256[]))": FunctionFragment;
    "handleFee(address,bytes)": FunctionFragment;
    "removeResponse(string,string,int256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addRequest"
      | "addReward"
      | "clearReward"
      | "decodeResponseMessage"
      | "getReward"
      | "handleDropFee"
      | "handleErrorFee"
      | "handleFee"
      | "removeResponse"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addRequest",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addReward",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "clearReward",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "decodeResponseMessage",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getReward",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "handleDropFee",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "handleErrorFee",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      Types.FeeInfoStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "handleFee",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeResponse",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "addRequest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "clearReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decodeResponseMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "handleDropFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleErrorFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "handleFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeResponse",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ICCService extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICCServiceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addRequest(
      _nsn: PromiseOrValue<BigNumberish>,
      _dst: PromiseOrValue<string>,
      _sender: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addReward(
      _network: PromiseOrValue<string>,
      _addr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    clearReward(
      _network: PromiseOrValue<string>,
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    decodeResponseMessage(
      _rlp: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[Types.ResponseMessageStructOutput]>;

    getReward(
      _network: PromiseOrValue<string>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _reward: BigNumber }>;

    handleDropFee(
      _network: PromiseOrValue<string>,
      _values: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    handleErrorFee(
      _src: PromiseOrValue<string>,
      _sn: PromiseOrValue<BigNumberish>,
      _feeInfo: Types.FeeInfoStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    handleFee(
      _addr: PromiseOrValue<string>,
      _msg: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeResponse(
      _to: PromiseOrValue<string>,
      _svc: PromiseOrValue<string>,
      _sn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addRequest(
    _nsn: PromiseOrValue<BigNumberish>,
    _dst: PromiseOrValue<string>,
    _sender: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addReward(
    _network: PromiseOrValue<string>,
    _addr: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  clearReward(
    _network: PromiseOrValue<string>,
    _addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  decodeResponseMessage(
    _rlp: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<Types.ResponseMessageStructOutput>;

  getReward(
    _network: PromiseOrValue<string>,
    _addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  handleDropFee(
    _network: PromiseOrValue<string>,
    _values: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  handleErrorFee(
    _src: PromiseOrValue<string>,
    _sn: PromiseOrValue<BigNumberish>,
    _feeInfo: Types.FeeInfoStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  handleFee(
    _addr: PromiseOrValue<string>,
    _msg: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeResponse(
    _to: PromiseOrValue<string>,
    _svc: PromiseOrValue<string>,
    _sn: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addRequest(
      _nsn: PromiseOrValue<BigNumberish>,
      _dst: PromiseOrValue<string>,
      _sender: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addReward(
      _network: PromiseOrValue<string>,
      _addr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    clearReward(
      _network: PromiseOrValue<string>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decodeResponseMessage(
      _rlp: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<Types.ResponseMessageStructOutput>;

    getReward(
      _network: PromiseOrValue<string>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handleDropFee(
      _network: PromiseOrValue<string>,
      _values: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<Types.FeeInfoStructOutput>;

    handleErrorFee(
      _src: PromiseOrValue<string>,
      _sn: PromiseOrValue<BigNumberish>,
      _feeInfo: Types.FeeInfoStruct,
      overrides?: CallOverrides
    ): Promise<Types.FeeInfoStructOutput>;

    handleFee(
      _addr: PromiseOrValue<string>,
      _msg: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<Types.BTPMessageStructOutput>;

    removeResponse(
      _to: PromiseOrValue<string>,
      _svc: PromiseOrValue<string>,
      _sn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Types.ResponseStructOutput>;
  };

  filters: {};

  estimateGas: {
    addRequest(
      _nsn: PromiseOrValue<BigNumberish>,
      _dst: PromiseOrValue<string>,
      _sender: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addReward(
      _network: PromiseOrValue<string>,
      _addr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    clearReward(
      _network: PromiseOrValue<string>,
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    decodeResponseMessage(
      _rlp: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReward(
      _network: PromiseOrValue<string>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handleDropFee(
      _network: PromiseOrValue<string>,
      _values: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    handleErrorFee(
      _src: PromiseOrValue<string>,
      _sn: PromiseOrValue<BigNumberish>,
      _feeInfo: Types.FeeInfoStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    handleFee(
      _addr: PromiseOrValue<string>,
      _msg: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeResponse(
      _to: PromiseOrValue<string>,
      _svc: PromiseOrValue<string>,
      _sn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addRequest(
      _nsn: PromiseOrValue<BigNumberish>,
      _dst: PromiseOrValue<string>,
      _sender: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addReward(
      _network: PromiseOrValue<string>,
      _addr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    clearReward(
      _network: PromiseOrValue<string>,
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    decodeResponseMessage(
      _rlp: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReward(
      _network: PromiseOrValue<string>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    handleDropFee(
      _network: PromiseOrValue<string>,
      _values: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    handleErrorFee(
      _src: PromiseOrValue<string>,
      _sn: PromiseOrValue<BigNumberish>,
      _feeInfo: Types.FeeInfoStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    handleFee(
      _addr: PromiseOrValue<string>,
      _msg: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeResponse(
      _to: PromiseOrValue<string>,
      _svc: PromiseOrValue<string>,
      _sn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
