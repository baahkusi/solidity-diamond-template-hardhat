// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;
import "../libraries/LibData.sol";
contract FacetsInit {
    function init() external {
        Facet1Store storage f1 = Facet1Storage.load();
        Facet2Store storage f2 = Facet2Storage.load();
        f1.numbersCount = 0;
        f2.stringsCount = 0;
    }
}
