//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Simple {
    uint256 num;
    uint256 counter;
    event QueryTime(uint256);
    event GotNum(uint256 Number);
    function getNum() public   {
        num = 100;
        counter++;
        emit GotNum(num);
        emit QueryTime(counter);
    }

}