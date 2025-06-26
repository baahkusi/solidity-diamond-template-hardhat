// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

abstract contract IFacet1 {
    struct Integer {
        uint256 number;
        address owner;
    }
    event IntegerClaimed(uint256 number, address owner);

    event IntegerReleased(uint256 number, address by);

    error IntegerExists();
    error IntegerDoesNotExists();

    function claimInteger(uint256 _int) external virtual;
    function releaseInteger(uint256 _int) external virtual;
    function checkInteger(uint256 _int) external view virtual returns (bool);
}
