// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import {
  functionSigsSelectors,
  functionSelectors,
  FacetCutAction,
  INIT_SIG,
} from "../selector";
import AppDiamondModule from "./AppDiamond";

const FacetsModule = buildModule("FacetsModule", (m) => {
  const { App, cutProxy } = m.useModule(AppDiamondModule);

  const initFacetSelectors = functionSigsSelectors("FacetsInit");
  const initFacet = m.contract("FacetsInit");
  const facetsInit = {
    contract: initFacet,
    selector: initFacetSelectors[INIT_SIG],
  };

  const facet1Selectors = functionSelectors("Facet1");
  const facet1 = m.contract("Facet1");
  const facet1Cut = [
    facet1,
    FacetCutAction.Add,
    Object.values(facet1Selectors),
  ];

  const facet2Selectors = functionSelectors("Facet2");
  const facet2 = m.contract("Facet2");
  const facet2Cut = [
    facet2,
    FacetCutAction.Add,
    Object.values(facet2Selectors),
  ];

  m.call(
    cutProxy,
    "diamondCut",
    [[facet1Cut, facet2Cut], facetsInit.contract, facetsInit.selector],
    { id: "AppDiamondCut" }
  );

  const facet1Proxy = m.contractAt("Facet1", App, {
    id: "Facet1Proxy",
  });

  const facet2Proxy = m.contractAt("Facet2", App, {
    id: "Facet2Proxy",
  });

  return {
    facet1Proxy,
    facet2Proxy,
  };
});

export default FacetsModule;
