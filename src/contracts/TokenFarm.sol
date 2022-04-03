//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.5.0;
import "defi_tutorial-starter-code/defi_tutorial-starter-code/src/contracts/DaiToken.sol";


contract TokenFarm
{
    string public name="TokenFarm";
    DaiToken public daiToken;
    DappToken public dappToken;
    constructor(DappToken _dappToken,DaiToken _daiToken) public
    {
        dappToken=_dappToken;
        daiToken=_daiToken;
    }


}

