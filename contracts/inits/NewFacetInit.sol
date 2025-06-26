// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;
import "../libraries/LibData.sol";
contract NewFacetInit {
    function init() external {
        NewFacetStore storage nf = NewFacetStorage.load();
        nf.addressesCount = 0;
    }
}
