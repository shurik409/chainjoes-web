import React, { useState, useEffect, useRef } from "react";
import Web3 from "web3";
import PresaleJson from "../../contracts/Presale.json";
import TokenJson from "../../contracts/Token.json";
import ContractAddresses from "../../contracts/contract-address.json";

import { Web3ModalComponent } from "web3modal-vue3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { web3Modal } from "../config/mixins";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";

const SaleFromVue = () => {
  const [data, setData] = useState({
    web3Obj: new Web3(
      Web3.givenProvider ||
        "wss://mainnet.infura.io/ws/v3/6c3b2a6b260041f2804c140af1714a46"
    ),
    contractObj: {},
    tokenContractObj: {},
    price: 0,
    sendAmount: "",
    ethereum: window.ethereum,
    copiedTooltip: false,
    contractAddr: "",
    tokenContractAddr: "",
    abi: PresaleJson.abi,
    tokenAbi: TokenJson.abi,
    tokenName: "ChainJoes",
    tokenSymbol: "CJ",
    alertShow: false,
    alertMsg: "",
    networkId: "1",
    account: "0x2579a0B2DF68B7a1FD07f033AE3553473A19c1B9", // fallback presale address
    is_tokensale: true,
    is_paused: false,
    nextBalance: 0,
    nextBurned: 0,
    inCirculation: 0,
    claimableAmount: 0,
    curCoin: { sym: "ETH", icon: "../assets/img/icons/icon.png" },
    dropdownShow: false,
    soldPercent: 0,
    soldAmount: 0,
    totalPool: 0,
    priceUsd: 0,
    minBUY: 0.01,
    theme: "light",
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: "_",
        },
      },
      coinbasewallet: {
        package: CoinbaseWalletSDK,
        options: {
          infuraId: "_",
        },
      },
    },
    number: 0,
    balance: 0,
  });
  return <></>;
};

export default SaleFromVue;
