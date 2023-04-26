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

export declare namespace IBMV {
  export type VerifierStatusStruct = {
    height: PromiseOrValue<BigNumberish>;
    extra: PromiseOrValue<BytesLike>;
  };

  export type VerifierStatusStructOutput = [BigNumber, string] & {
    height: BigNumber;
    extra: string;
  };
}

export interface IBMVInterface extends utils.Interface {
  functions: {
    "getStatus()": FunctionFragment;
    "handleRelayMessage(string,string,uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getStatus" | "handleRelayMessage"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "getStatus", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "handleRelayMessage",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "getStatus", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "handleRelayMessage",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IBMV extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBMVInterface;

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
    getStatus(
      overrides?: CallOverrides
    ): Promise<[IBMV.VerifierStatusStructOutput]>;

    handleRelayMessage(
      _bmc: PromiseOrValue<string>,
      _prev: PromiseOrValue<string>,
      _seq: PromiseOrValue<BigNumberish>,
      _msg: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getStatus(
    overrides?: CallOverrides
  ): Promise<IBMV.VerifierStatusStructOutput>;

  handleRelayMessage(
    _bmc: PromiseOrValue<string>,
    _prev: PromiseOrValue<string>,
    _seq: PromiseOrValue<BigNumberish>,
    _msg: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getStatus(
      overrides?: CallOverrides
    ): Promise<IBMV.VerifierStatusStructOutput>;

    handleRelayMessage(
      _bmc: PromiseOrValue<string>,
      _prev: PromiseOrValue<string>,
      _seq: PromiseOrValue<BigNumberish>,
      _msg: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    getStatus(overrides?: CallOverrides): Promise<BigNumber>;

    handleRelayMessage(
      _bmc: PromiseOrValue<string>,
      _prev: PromiseOrValue<string>,
      _seq: PromiseOrValue<BigNumberish>,
      _msg: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getStatus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    handleRelayMessage(
      _bmc: PromiseOrValue<string>,
      _prev: PromiseOrValue<string>,
      _seq: PromiseOrValue<BigNumberish>,
      _msg: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
