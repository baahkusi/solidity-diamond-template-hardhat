// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;
import "./IFacet1.sol";
import "./IFacet2.sol";
import "./INewFacet.sol";
abstract contract IApp is IFacet1, IFacet2, INewFacet {}
