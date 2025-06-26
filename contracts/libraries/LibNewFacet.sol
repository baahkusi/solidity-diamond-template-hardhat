// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "../globals/Errors.sol";
import "../libraries/LibData.sol";
import "../interfaces/INewFacet.sol";

library LibNewFacet {
    function _claimAddress(address _caller, address _address) internal {
        NewFacetStore storage nf = NewFacetStorage.load();
        if (nf.addresses[_address].owner != address(0)) {
            revert IFacet2.StringExists();
        }
        nf.addresses[_address] = INewFacet.Address({
            addr: _address,
            owner: _caller
        });
        emit INewFacet.AddressClaimed(_address, _caller);
    }
    function _releaseAddress(address _caller, address _address) internal {
        NewFacetStore storage nf = NewFacetStorage.load();
        if (nf.addresses[_address].owner == address(0)) {
            revert IFacet2.StringDoestNotExists();
        }
        if (nf.addresses[_address].owner != _caller) {
            revert InvalidOwner();
        }
        delete nf.addresses[_address];
        emit INewFacet.AddressReleased(_address, _caller);
    }
    function _checkAddress(address _address) internal view returns (bool) {
        NewFacetStore storage nf = NewFacetStorage.load();
        return nf.addresses[_address].owner != address(0);
    }
}
