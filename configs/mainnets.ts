import "dotenv/config";
import { vars } from "hardhat/config";
const DEPLOY_KEY_MAIN = vars.get("DEPLOY_KEY_MAIN");
export const mainNetworks: any = {
  base: {
    url: "https://mainnet.base.org",
    accounts: [DEPLOY_KEY_MAIN],
  },
  arbitrum: {
    url: "https://arb1.arbitrum.io/rpc",
    accounts: [DEPLOY_KEY_MAIN],
  },
  celo: {
    url: "https://forno.celo.org",
    accounts: [DEPLOY_KEY_MAIN],
  },
  bsc: {
    url: "https://bsc-dataseed.binance.org",
    accounts: [DEPLOY_KEY_MAIN],
  },
  lisk: {
    url: "https://rpc.api.lisk.com",
    chainId: 1135,
    accounts: [DEPLOY_KEY_MAIN],
  },
};

export const mainChains: any[] = [
  {
    network: "arbitrum",
    chainId: 42161,
    urls: {
      apiURL: "https://arbitrum.blockscout.com/api",
      browserURL: "https://arbitrum.blockscout.com",
    },
  },
  {
    network: "base",
    chainId: 8453,
    urls: {
      apiURL: "https://base.blockscout.com/api",
      browserURL: "https://base.blockscout.com",
    },
  },
  {
    network: "celo",
    chainId: 42220,
    urls: {
      apiURL:
        "https://celo.blockscout.com/api?apikey=ad32f574-5fa0-4b67-8a54-79be0f54010c",
      browserURL: "https://celo.blockscout.com",
    },
  },
  {
    network: "bsc",
    chainId: 56,
    urls: {
      apiURL: "https://api.bscscan.com/api",
      browserURL: "https://bscscan.com",
    },
  },
  {
    network: "lisk",
    chainId: 1135,
    urls: {
      apiURL: "https://blockscout.lisk.com/api",
      browserURL: "https://blockscout.lisk.com",
    },
  },
];

export const mainKeys = {
  base: "anything",
  arbitrum: "anything",
  celo: "anything",
  bsc: "anything",
  lisk: "lisk",
};
