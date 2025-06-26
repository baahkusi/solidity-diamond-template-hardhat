// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import {
  functionSigsSelectors,
  functionSelectors,
  FacetCutAction,
  INIT_SIG,
} from "../../selector";
import AppDiamondModule from "../AppDiamond";

const NewFacetsModule = buildModule("NewFacetsModule", (m) => {
  const { App, cutProxy } = m.useModule(AppDiamondModule);

  const initNewFacetSelectors = functionSigsSelectors("NewFacetInit");
  const initNewFacet = m.contract("NewFacetInit");
  const facetsInit = {
    contract: initNewFacet,
    selector: initNewFacetSelectors[INIT_SIG],
  };

  const newFacetSelectors = functionSelectors("NewFacet");
  const newFacet = m.contract("NewFacet");
  const newFacetCut = [
    newFacet,
    FacetCutAction.Add,
    Object.values(newFacetSelectors),
  ];

  m.call(
    cutProxy,
    "diamondCut",
    [[newFacetCut], facetsInit.contract, facetsInit.selector],
    { id: "AppDiamondCut" }
  );

  const newFacetProxy = m.contractAt("NewFacet", App, {
    id: "NewFacetProxy",
  });

  return {
    newFacetProxy,
  };
});

export default NewFacetsModule;
