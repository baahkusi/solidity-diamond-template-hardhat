// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "../interfaces/INewFacet.sol";
import "../diamond/interfaces/AppRoles.sol";
import "../libraries/LibNewFacet.sol";

contract NewFacet is INewFacet, AppRoles {
    function claimAddress(address _address) external virtual override {
        LibNewFacet._claimAddress(msg.sender, _address);
    }

    function releaseAddress(address _address) external virtual override {
        LibNewFacet._releaseAddress(msg.sender, _address);
    }

    function checkAddress(address _address) external view virtual override returns(bool){
        return LibNewFacet._checkAddress(_address);
    }
}
