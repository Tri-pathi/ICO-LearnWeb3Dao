const { network } = require("hardhat");
const { CryptoDevsContractAddress } = require("../constant");

module.exports=async({deployments,getNamedAccounts})=>{
const{deploy,log}=deployments;
const{deployer}=await getNamedAccounts();
const chainId=network.config.chainId;
console.log("chainId is ",chainId);

const args=[CryptoDevsContractAddress];
const cryptoDevTOken=await deploy("CryptoDevToken",{
    from:deployer,
    log:true,
    args:args,
    waitConfirmations:network.config.waitConfirmations||1
})
log(`CryptoDevToken Contract deployed at ${cryptoDevTOken.address}`);

};
//contract Address=0x061EAF25b0aEC90E4256B8c34677dd71343C1298;
