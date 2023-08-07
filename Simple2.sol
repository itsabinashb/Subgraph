//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Simple {
    event ReturnedCount(uint256 count);
    uint256 count;

    function getCalldata() public pure returns(bytes memory){
        return abi.encodeWithSignature("getNum()");
    }

    function getSingature() public  returns(bytes32){
        count++;
        emit ReturnedCount(count);
        return keccak256("getNum()");

    }
}