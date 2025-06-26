// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "../interfaces/IFacet2.sol";
import "../diamond/interfaces/AppRoles.sol";
import "../libraries/LibFacet2.sol";

contract Facet2 is IFacet2, AppRoles {
    function claimString(string calldata _str) external virtual override {
        LibFacet2._claimString(msg.sender, _str);
    }

    function releaseString(string calldata _str) external virtual override {
        LibFacet2._releaseString(msg.sender, _str);
    }

    function checkString(
        string calldata _str
    ) external view virtual override returns (bool) {
        return LibFacet2._checkString(_str);
    }
}
