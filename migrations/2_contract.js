const DappToken = artifacts.require('DappToken');
const DaiToken = artifacts.require('DaiToken');
const TokenFarm = artifacts.require('TokenFarm');

module.exports = async function(deployer,networks,accounts) {
  await deployer.deploy(DaiToken);
  const daiToken=await DaiToken.deployed();
  await deployer.deploy(DappToken);
  const dappToken=await DappToken.deployed();
  await deployer.deploy(TokenFarm,DaiToken.address,DappToken.address);
  const TokenFarm=await TokenFarm.deployed();
  await DappToken.transfer(TokenFarm.address,'1000000000000000000000000');
  await DaiToken.transfer(accounts[1],100000000000000000000);
  
};
