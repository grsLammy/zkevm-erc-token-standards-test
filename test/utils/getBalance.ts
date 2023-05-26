import { ethers } from "ethers";

const getBalance = async (address, provider) => {
    const balance = await provider.getBalance(address);
    const balanceInEth = ethers.utils.formatEther(balance);
    return balanceInEth;
};
export { getBalance };
