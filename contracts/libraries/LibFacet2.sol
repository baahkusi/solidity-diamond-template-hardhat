// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "../globals/Errors.sol";
import "../libraries/LibData.sol";
import "../interfaces/IFacet2.sol";

library LibFacet2 {
    function _claimString(address _caller, string calldata _str) internal {
        Facet2Store storage f2 = Facet2Storage.load();
        if (f2.strings[_str].owner != address(0)) {
            revert IFacet2.StringExists();
        }
        f2.strings[_str] = IFacet2.String({str: _str, owner: _caller});
        emit IFacet2.StringClaimed(_str, _caller);
    }
    function _releaseString(address _caller, string calldata _str) internal {
        Facet2Store storage f2 = Facet2Storage.load();
        if (f2.strings[_str].owner == address(0)) {
            revert IFacet2.StringDoestNotExists();
        }
        if (f2.strings[_str].owner != _caller) {
            revert InvalidOwner();
        }
        delete f2.strings[_str];
        emit IFacet2.StringReleased(_str, _caller);
    }
    function _checkString(string calldata _str) internal view returns (bool) {
        Facet2Store storage f2 = Facet2Storage.load();
        return f2.strings[_str].owner != address(0);
    }
}
