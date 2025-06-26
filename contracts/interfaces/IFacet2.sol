// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

abstract contract IFacet2 {
    struct String {
        string str;
        address owner;
    }
    event StringClaimed(string str, address owner);

    event StringReleased(string str, address by);

    error StringExists();
    error StringDoestNotExists();

    function claimString(string calldata _str) external virtual;
    function releaseString(string calldata _str) external virtual;
    function checkString(string calldata _str) external view virtual returns (bool);
}
