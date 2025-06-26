// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@solidstate/contracts/access/access_control/AccessControlInternal.sol";
abstract contract AppRoles is AccessControlInternal {
    bytes32 internal constant CUSTOM_ROLE = keccak256("CUSTOM_ROLE");

    modifier onlyAdmin() {
        _checkRole(AccessControlStorage.DEFAULT_ADMIN_ROLE);
        _;
    }

    modifier onlyCustomRole() {
        _checkRole(CUSTOM_ROLE);
        _;
    }
}
