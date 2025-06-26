// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

abstract contract INewFacet {
    struct Address {
        address addr;
        address owner;
    }
    event AddressClaimed(address addr, address owner);
    event AddressReleased(address addr, address by);

    error AddressExists();
    error AddressDoesNotExists();

    function claimAddress(address _address) external virtual;
    function releaseAddress(address _address) external virtual;
    function checkAddress(address _address) external virtual returns (bool);
}
