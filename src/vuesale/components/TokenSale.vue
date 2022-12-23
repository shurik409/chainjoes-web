<template>
  <div>
    <Web3ModalComponent
      ref="web3modal"
      :theme="theme"
      :provider-options="providerOptions"
      cache-provider
    />

    <!-- Alert -->
    <transition name="fade">
      <div
        class="z-50 fixed inset-x-0 top-0 m-auto flex items-center bg-black text-white text-md px-4 py-4 lg:w-6/6"
        role="alert"
        v-if="alertShow"
      >
        <p>{{ alertMsg }}</p>
      </div>
    </transition>
    <section id="sale-box">
      <div class="sale-box">
        <div class="sale-calc">
          <p class="sale-calc__headline">private sales is live</p>
          <p class="sale-calc__subheadline">
            Join chain Joes Dao and let’s kick the Web3 enemies asses’s
            together!
          </p>
          <div class="sale-calc__info-btns">
            <div class="sale-calec__btns-left">
              <div class="info-btns__refresh">refresh</div>
              <div class="info-btns__balance">balance: {{ this.balance }}</div>
            </div>
            <div class="info-btns__max">Max</div>
          </div>
          <div class="sale-calc__input">
            <input />
          </div>
          <div class="sale-calc__range">
            <input type="range" min="0" max="100" step="25" />
            <div class="sale-calc__range-text">
              <p>0%</p>
              <p>25%</p>
              <p>50%</p>
              <p>75%</p>
              <p>100%</p>
            </div>
          </div>
          <div class="sale-calc__btn-deposit">
            Deposit {{ this.sendAmount }}
          </div>
          <div class="sale-calc__btns">
            <div class="sale-calc__btn-wallet" @click="connect">
              Connect wallet
            </div>
            <div class="sale-calc__btn-chat">Chat</div>
          </div>
        </div>
        <div class="sale-info">
          <div class="sale-info-box sale-info__period">
            <p class="sale-info__period-text">Sale Period Ends</p>
            <div class="sale-info__period-time">15:40:35</div>
          </div>
          <div class="sale-info-box sale-info__price">
            <p class="sale-info__price-text">Price per 1000 tokens</p>
            <div class="sale-info__price-ammount">0.25 ETH</div>
          </div>
          <div class="sale-info-box sale-info__amount">
            <p class="sale-info__amount-text">CJ For Sale</p>
            <div class="sale-info__amount-count">2 000 000</div>
          </div>
          <div class="sale-info-box sale-info__own">
            <p class="sale-info__own-text">You own</p>
            <div class="sale-info__own-count">
              {{ this.totalSupply }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Web3 from "web3";
import PresaleJson from "../../contracts/Presale.json";
import TokenJson from "../../contracts/Token.json";
import ContractAddresses from "../../contracts/contract-address.json";

import { Web3ModalComponent } from "web3modal-vue3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { web3Modal } from "../config/mixins";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";

export default {
  name: "TokenSale",
  components: {
    Web3ModalComponent,
  },
  mixins: [web3Modal],
  computed: {
    web3() {
      return this.$store.state.web3;
    },
    chainId() {
      if (this.$store.state.web3.isInjected == false) {
        return 1;
      } else {
        return this.$store.state.myChainId;
      }
    },
    recvAmount: {
      get() {
        if (this.sendAmount == 0) return null;
        return (this.sendAmount * this.price).toFixed(0);
      },
      set(newVal) {
        this.sendAmount = (newVal / this.price).toFixed(0);
      },
    },
  },
  data() {
    return {
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
    };
  },

  created() {
    if (window.ethereum) {
      console.log("created---------", window.ethereum);
      this.web3Obj.eth.getAccounts().then((result) => {
        this.account = result[0];
        //this.$store.dispatch("checkMetamaskAddr", {metamask:result[0]});
      });
      window.ethereum.on("networkChanged", (networkId) => {
        this.networkChanged(networkId);
      });
      window.ethereum.on("accountsChanged", async (accounts) => {
        this.account = accounts[0];
        this.getBalance();
        this.calcPrice();
      });
    }
    this.web3Obj.eth.net.getId().then((result) => {
      this.networkChanged(result);
    });
    // WalletConnect
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.theme = "dark";
    }
  },
  mounted() {
    // WalletConnect
    this.$nextTick(async () => {
      const web3modal = this.$refs.web3modal;
      //this.$store.dispatch("setWeb3ModalAction", web3modal)
      this.$store.commit("setWeb3Modal", web3modal);
      console.log("cacheProvider=>>>>", web3modal.cacheProvider);
      if (web3modal.cacheProvider) {
        this.connect();
      }
    });
  },
  methods: {
    // WalletConnect
    connect() {
      this.$store.dispatch("connect");
      //this.subscribeMewBlockHeaders()
    },
    async switchNetwork(netid) {
      this.dropdownShow = false;
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: netid }],
      });
    },
    networkChanged(networkId) {
      this.dropdownShow = false;
      this.networkId = networkId;
      this.totalPool = "100000000"; // 100M
      this.minBUY = "0.01";

      if (networkId == 96) {
        // HardHat
        this.web3Obj = new Web3(
          Web3.givenProvider || "https://rpc.nextsmartchain.com"
        );
        this.contractAddr = ContractAddresses.Presale;
        this.tokenContractAddr = ContractAddresses.Token;
        this.curCoin = { sym: "ETH", icon: "../assets/img/icons/icon.png" };
      } else {
        // Fallback to MAINNET
        this.web3Obj = new Web3(
          Web3.givenProvider ||
            "wss://mainnet.infura.io/ws/v3/6c3b2a6b260041f2804c140af1714a46"
        );
        this.contractAddr = ContractAddresses.Presale; // Presale address
        this.tokenContractAddr = ContractAddresses.Token; // Token address
        this.curCoin = { sym: "ETH", icon: "../assets/img/icons/icon.png" };
      }
      this.tokenContractObj = new this.web3Obj.eth.Contract(
        this.tokenAbi,
        this.tokenContractAddr
      );
      this.getBalance();
      this.contractObj = new this.web3Obj.eth.Contract(
        this.abi,
        this.contractAddr
      );
      this.calcPrice();
      this.getSupply();
      //this.getPrice();
    },

    async getBalance() {
      await this.web3Obj.eth.getBalance(this.account).then((result) => {
        this.balance = Web3.utils.fromWei(result, "ether");
      });
      this.tokenContractObj.methods
        .balanceOf(this.account)
        .call()
        .then((result) => {
          this.nextBalance = result;
        });
    },

    async getSupply() {
      await this.tokenContractObj.methods
        .totalSupply()
        .call()
        .then((result) => {
          this.totalSupply = (result / 1e18).toFixed(0);
        });
    },

    async getPrice() {
      console.log("----- INIT");
      const response = await fetch(
        "https://api.pancakeswap.info/api/v2/tokens/0x5d10780da28e5b225a0c6a1bed230a04cf96ece3"
      );
      const result = await response.json();
      this.priceUsd = result.data.price;
    },

    showAlert: function (msg) {
      this.alertShow = true;
      this.alertMsg = msg;
      setTimeout(() => {
        this.alertMsg = "";
        this.alertShow = false;
      }, 3000);
    },
    calcPrice: async function () {
      await this.contractObj.methods
        .price()
        .call()
        .then((res) => {
          this.price = 1 / (res / 1e18);
        });
      await this.contractObj.methods
        .paused()
        .call()
        .then((res) => {
          this.is_paused = res;
        });
      await this.contractObj.methods
        .ends()
        .call()
        .then((res) => {
          if (res == 0) this.is_tokensale = false;
          else this.is_tokensale = true;
        });
      await this.contractObj.methods
        .claimable(this.account)
        .call()
        .then((res) => {
          this.claimableAmount = res / 1e18;
        });
      await this.contractObj.methods
        .weiRaised()
        .call()
        .then((res) => {
          this.soldAmount = (res * this.price) / 1e18;
          this.soldPercent = 100 / (this.totalPool / this.soldAmount);
        });
    },
    claimToken: async function () {
      if (this.claimableAmount == 0) {
        this.showAlert(
          "You don't have any tokens to claim, you need to BUY first."
        );
        return;
      }
      // Check if PRESALE has been ended
      await this.contractObj.methods
        .ends()
        .call()
        .then(async (res) => {
          if (Math.round(new Date().getTime() / 1000) < res) {
            this.showAlert(
              "Presale has not been ended. Tokens can be claimed after the tokensale is finished."
            );
          } else {
            await this.contractObj.methods
              .claim()
              .send({
                from: this.account,
              })
              .then((res) => {
                console.log(res);
                document.location.reload();
              });
          }
        });
    },
    buyToken: async function () {
      if (this.sendAmount < this.minBUY) {
        return;
      }
      if (this.sendAmount > this.balance) {
        this.showAlert("Insufficient funds");
        return;
      }
      await this.contractObj.methods
        .buy()
        .send({
          from: this.account,
          gas: 300000,
          value: Web3.utils.toWei(this.sendAmount, "ether"),
        })
        .then((res) => {
          console.log(res);
          document.location.reload();
        });
    },
    copyAddress: function () {
      var copyText = document.getElementById("address");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      document.getSelection().removeAllRanges();
      this.copiedTooltip = true;
      setTimeout(() => {
        this.copiedTooltip = false;
      }, 1000);
    },

    // Fallback Function
    connectMetaMask: async function (param) {
      if (param == 1) {
        await window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((result) => {
            console.log("result=" + result);
            document.location.reload();
          });
      } else {
        console.log("here", this.$store.state.web3.coinbase);
        let params = [
          {
            from: this.$store.state.web3.coinbase,
            to: ContractAddresses.Token,
          },
        ];
        await window.ethereum
          .request({
            method: "eth_sendTransaction",
            params,
          })
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
console.log(123123123);
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button[disabled="disabled"] {
  cursor: not-allowed;
  opacity: 0.8;
}
.sale-box {
  display: flex;
  align-items: center;
}
.sale-calc {
  padding: 60px 40px;
  background-color: #080808;
  color: #fff;
  border-radius: 8px;
}
.sale-calc__headline {
  font-size: 40px;
  line-height: 36px;
  text-align: center;
}
.sale-calc__subheadline {
  font-size: 14px;
  line-height: 22.4px;
  text-align: center;
  max-width: 310px;
  margin: auto;
  margin-top: 18px;
}
.sale-calc__info-btns {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}
.sale-calec__btns-left {
  display: flex;
}
.sale-calc__input input {
  width: 100%;
  height: 62px;
  min-width: 390px;
  background: none;
  border: 1px solid #242424;
  border-radius: 4px;
  margin-top: 16px;
}
.sale-calc__range input {
  width: 100%;
  margin-top: 16px;
  height: 8px;
  border-radius: 8px;
  background: #242424;
  -webkit-appearance: none;
  outline: none;
}
.sale-calc__range input::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  background: #fff;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
  border: 6px solid #616161;
  border-radius: 20px;
}
.sale-calc__range-text {
  display: flex;
  justify-content: space-between;
}
.sale-calc__range-text p {
  text-align: center;
  width: 40px;
}
.sale-calc__btn-deposit {
  width: 100%;
  height: 44px;
  background: linear-gradient(204.42deg, #00ffb7 -11.28%, #005b42 105.96%);
  border-radius: 2px;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
}
.sale-calc__btns {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}
.sale-calc__btn-wallet {
  width: 390px;
  height: 44px;
  background: linear-gradient(204.42deg, #00ffb7 -11.28%, #005b42 105.96%);
  border-radius: 2px;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sale-info {
  background: rgba(8, 8, 8, 0.9);
  border-radius: 0px 8px 8px 0px;
  color: #fff;
}
.sale-info-box {
  padding: 24px 0px;
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid #242424;
}
</style>
