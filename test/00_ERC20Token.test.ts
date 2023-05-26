import { expect } from "chai";
import dotenv from "dotenv";
dotenv.config();
import { setupWallets } from "./utils/setupWallet";
import { sleep } from "./utils/sleep";
import { getBalance } from "./utils/getBalance";
import { Contract, providers, ethers } from "ethers";
import { abi, bytecode } from "../artifacts/src/ERC20Token.sol/TestTokenERC20.json";

const zkEVM_RPC: any = process.env.ZKEVM_RPC_URL;

describe("ERC20 Token tests on zkEVM", async () => {
    let erc20TokenContract: any;
    const zkEVM_provider = new providers.JsonRpcProvider(zkEVM_RPC);
    const derivedNode = await setupWallets();
    const ownerSigner = new ethers.Wallet(derivedNode[0].privateKey, zkEVM_provider);

    before(async () => {
        const erc20TokenFactory = new ethers.ContractFactory(abi, bytecode, ownerSigner);
        console.log("Checking if wallet address has balance....");
        const balance: any = await getBalance(derivedNode[0].address, zkEVM_provider);
        console.log(`Balance in the address ${derivedNode[0].address} is ${balance} ETH`);
        if (balance == 0) {
            console.log("Your balance in wallet address is zero, exiting the testing");
            process.exit(0);
        }
        if (balance < 0.1) {
            console.log("balance is currently running low, kindly add more ETH");
        }
        console.log("\nDeploying ERC20 Token smart contract on zkEVM chain....");
        const erc20Token = await erc20TokenFactory.deploy();
        await sleep(20000);
        erc20TokenContract = new Contract(erc20Token.address, abi, zkEVM_provider);
        console.log("\nERC20 Token contract deployed at: ", erc20Token.address);
        console.log(`Contract Details: https://explorer.public.zkevm-test.net/address/${erc20Token.address}`);
    });

    it("has correct token name", async () => {
        expect(await erc20TokenContract.name()).eq("ERC20 Test Token");
    });

    it("has correct token symbol", async () => {
        expect(await erc20TokenContract.symbol()).eq("TT20");
    });

    it("mints on deployment", async () => {
        expect(await erc20TokenContract.balanceOf(derivedNode[0].address)).eq(
            ethers.utils.parseEther("1000000000")
        );
    });

    it("can mint tokens", async () => {
        await erc20TokenContract.mintERC20(derivedNode[1].address, ethers.utils.parseEther("10"));
        expect(await erc20TokenContract.balanceOf(derivedNode[1].address)).eq(ethers.utils.parseEther("10"));
    });

    it("transfers to other address", async () => {
        await erc20TokenContract.transfer(derivedNode[2].address, ethers.utils.parseEther("1"));
        expect(await erc20TokenContract.balanceOf(derivedNode[2].address)).eq(ethers.utils.parseEther("1"));
    });

    it("doesn't allow to transfer if insufficient balance", async () => {
        const aliceSigner = new ethers.Wallet(derivedNode[2].privateKey, zkEVM_provider);
        await expect(
            erc20TokenContract
                .connect(aliceSigner)
                .transfer(derivedNode[3].address, ethers.utils.parseEther("1000"))
        ).to.be.reverted;
    });

    it("doesn't allow transferring to 0 address", async () => {
        await expect(erc20TokenContract.transfer(ethers.constants.AddressZero, 100)).to.be.reverted;
    });

    it("sets correct allowance", async () => {
        await erc20TokenContract.approve(derivedNode[2].address, ethers.utils.parseEther("1"));
        expect(await erc20TokenContract.allowance(derivedNode[0].address, derivedNode[2].address)).eq(
            ethers.utils.parseEther("1")
        );
    });

    it("allows to transferFrom", async () => {
        const aliceSigner = new ethers.Wallet(derivedNode[2].privateKey, zkEVM_provider);
        await erc20TokenContract.approve(derivedNode[2].address, ethers.utils.parseEther("1"));
        await erc20TokenContract
            .connect(aliceSigner)
            .transferFrom(derivedNode[0].address, derivedNode[3].address, ethers.utils.parseEther("1"));
        expect(await erc20TokenContract.balanceOf(derivedNode[3].address)).eq(ethers.utils.parseEther("1"));
    });

    it("doesn't allow to transferFrom if insufficient allowance", async () => {
        const aliceSigner = new ethers.Wallet(derivedNode[2].privateKey, zkEVM_provider);
        await erc20TokenContract.approve(derivedNode[2].address, ethers.utils.parseEther("1"));
        await expect(
            erc20TokenContract
                .connect(aliceSigner)
                .transferFrom(
                    derivedNode[0].address,
                    derivedNode[3].address,
                    ethers.utils.parseEther("10000")
                )
        ).to.be.reverted;
    });
});
