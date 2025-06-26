// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "../interfaces/IFacet1.sol";
import "../diamond/interfaces/AppRoles.sol";
import "../libraries/LibFacet1.sol";

contract Facet1 is IFacet1, AppRoles {
    function claimInteger(uint256 _int) external virtual override {
        LibFacet1._claimInteger(msg.sender, _int);
    }

    function releaseInteger(uint256 _int) external virtual override {
        LibFacet1._releaseInteger(msg.sender, _int);
    }

    function checkInteger(uint256 _int) external view virtual override returns(bool) {
        return LibFacet1._checkInteger(_int);
    }
}
