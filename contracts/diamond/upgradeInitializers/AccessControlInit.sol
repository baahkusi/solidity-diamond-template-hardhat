// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@solidstate/contracts/access/access_control/AccessControlInternal.sol";
import "@solidstate/contracts/access/access_control/AccessControlStorage.sol";
import "../interfaces/AppRoles.sol";

contract AccessControlInit is AccessControlInternal, AppRoles {
    function init() external {
        _grantRole(AccessControlStorage.DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(CUSTOM_ROLE, msg.sender);
    }
}
