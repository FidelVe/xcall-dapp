import fs from "fs";
const DEPLOYMENTS_PATH = `./deployments.json`;

export class Deployments {
  map: Map<string, any>;
  private static instance: Deployments;

  constructor() {
    this.map = new Map();
  }

  public get(target: string) {
    return this.map.get(target);
  }

  public set(target: string, data: any) {
    this.map.set(target, data);
  }

  public static getDefault() {
    if (!this.instance) {
      const data = fs.readFileSync(DEPLOYMENTS_PATH);
      const json = JSON.parse(data.toString());
      // console.log("deployments json");
      // console.log(json);
      this.instance = new this();
      this.instance.set("icon", json.icon);
      this.instance.set("hardhat", json.hardhat);
      this.instance.set("hardhat2", json.hardhat2);
      this.instance.set("bsc", json.bsc);
      this.instance.set("eth", json.eth);
    }
    return this.instance;
  }

  public save() {
    fs.writeFileSync(
      DEPLOYMENTS_PATH,
      JSON.stringify(Object.fromEntries(this.map)),
      "utf-8"
    );
  }
}
