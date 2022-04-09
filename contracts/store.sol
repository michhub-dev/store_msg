// SPDX-License-Identifier: UNLICENSED

// declare solidity version 

pragma solidity ^0.8.0;
import "hardhat/console.sol";

 

contract sayHi {

uint256 totalMsg;

event NewMessage(address indexed from, uint256 timestamp, string message );

struct SendMsg {
    address sender;  // address of the sender
    string message;  // the message the sender sent
    uint256  timestamp; // the timestamp when the sender sent the message

}
// declare a variable that let me store my struct 
SendMsg[] sendMsgs; 

constructor() {
    console.log("Hey you just called me!");
}

function sendmsg(string memory _message) public {
    totalMsg += 1;
    console.log("%s messages sent %s", msg.sender, _message);

// store the message data in the array 
    sendMsgs.push(SendMsg(msg.sender, _message, block.timestamp));

    emit NewMessage(msg.sender, block.timestamp, _message); 
}

// this function will return the struct array and all messages 
function getAllMessages() public view returns (SendMsg[] memory) {
   return sendMsgs; 
}

// to print the value
function getTotalMessage() public view returns (uint256) {
    console.log("there is %d total message", totalMsg);
    return totalMsg;
}

}