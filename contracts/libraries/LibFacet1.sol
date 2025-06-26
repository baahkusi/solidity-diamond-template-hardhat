// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "../globals/Errors.sol";
import "../libraries/LibData.sol";
import "../interfaces/IFacet1.sol";

library LibFacet1 {
    function _claimInteger(address _caller, uint256 _int) internal {
        Facet1Store storage f1 = Facet1Storage.load();
        if (f1.numbers[_int].owner != address(0)) {
            revert IFacet1.IntegerExists();
        }
        f1.numbers[_int] = IFacet1.Integer({number: _int, owner: _caller});
        emit IFacet1.IntegerClaimed(_int, _caller);
    }
    function _releaseInteger(address _caller, uint256 _int) internal {
        Facet1Store storage f1 = Facet1Storage.load();
        if (f1.numbers[_int].owner == address(0)) {
            revert IFacet1.IntegerDoesNotExists();
        }
        if (f1.numbers[_int].owner != _caller) {
            revert InvalidOwner();
        }
        delete f1.numbers[_int];
        emit IFacet1.IntegerReleased(_int, _caller);
    }
    function _checkInteger(uint256 _int) internal view returns (bool) {
        Facet1Store storage f1 = Facet1Storage.load();
        return f1.numbers[_int].owner != address(0);
    }
}
