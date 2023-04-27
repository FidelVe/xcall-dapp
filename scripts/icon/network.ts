import IconService from "icon-sdk-js";
import Wallet from "icon-sdk-js/build/Wallet";

const { IconWallet, HttpProvider } = IconService;

const PARAMS = {
  rpcNodeUrl: "http://localhost:9080/api/v3",
  keystore: "",
  password: "gochain",
  nid: 3,
};

export class IconNetwork {
  iconService: IconService;
  nid: number;
  wallet: Wallet;
  private static instance: IconNetwork;

  constructor(_iconService: IconService, _nid: number, _wallet: Wallet) {
    this.iconService = _iconService;
    this.nid = _nid;
    this.wallet = _wallet;
  }

  public static getDefault() {
    if (!this.instance) {
      const httpProvider = new HttpProvider(PARAMS.rpcNodeUrl);
      const iconService = new IconService(httpProvider);
      const keystore = PARAMS.keystore;
      const wallet = IconWallet.loadKeystore(keystore, PARAMS.password, false);
      this.instance = new this(iconService, PARAMS.nid, wallet);
    }
    return this.instance;
  }

  async getTotalSupply() {
    return this.iconService.getTotalSupply().execute();
  }

  async getLastBlock() {
    return this.iconService.getLastBlock().execute();
  }

  async getBTPNetworkInfo(nid: string) {
    return this.iconService.getBTPNetworkInfo(nid).execute();
  }

  async getBTPHeader(nid: string, height: string) {
    return this.iconService.getBTPHeader(nid, height).execute();
  }
}
