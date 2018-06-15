var Migrations = artifacts.require('./Migrations.sol');
var Web3 = require('web3');

var web3 = new Web3(
  new Web3.providers.HttpProvider('http://192.168.27.101:8545')
);

module.exports = function(deployer) {
  web3.eth.personal
    .unlockAccount('0xd4cefe4bc33681c9eaf5c0ecbca2f35c12a20561', '123', 15000)
    .then(() => {
      deployer.deploy(Migrations);
    });
};
