// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "../interfaces/IFacet1.sol";
import "../interfaces/IFacet2.sol";
import "../interfaces/INewFacet.sol";

struct Facet1Store {
    mapping(uint256 => IFacet1.Integer) numbers;
    uint256 numbersCount;
}

library Facet1Storage {
    bytes32 constant FACET1_STORAGE_POSITION = keccak256("app.data.facet1");

    function load() internal pure returns (Facet1Store storage s) {
        bytes32 position = FACET1_STORAGE_POSITION;
        assembly {
            s.slot := position
        }
    }
}

struct Facet2Store {
    mapping(string => IFacet2.String) strings;
    uint256 stringsCount;
}

library Facet2Storage {
    bytes32 constant FACET2_STORAGE_POSITION = keccak256("app.data.facet2");

    function load() internal pure returns (Facet2Store storage s) {
        bytes32 position = FACET2_STORAGE_POSITION;
        assembly {
            s.slot := position
        }
    }
}

struct NewFacetStore {
    mapping(address => INewFacet.Address) addresses;
    uint256 addressesCount;
}

library NewFacetStorage {
    bytes32 constant NEW_FACET_STORAGE_POSITION =
        keccak256("app.data.newfacet");

    function load() internal pure returns (NewFacetStore storage s) {
        bytes32 position = NEW_FACET_STORAGE_POSITION;
        assembly {
            s.slot := position
        }
    }
}
