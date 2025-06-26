// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import {
  functionSigsSelectors,
  functionSelectors,
  FacetCutAction,
  INIT_SIG,
} from "../../selector";

const IgniteTestModule = buildModule("IgniteTestModule", (m) => {
  const owner = m.getAccount(0);
  const dc = m.contract("DiamondCutFacet");
  const App = m.contract("App", [owner, dc]);

  const diS = functionSigsSelectors("DiamondInit");
  const di = m.contract("DiamondInit");
  const diInit = { contract: di, selector: diS[INIT_SIG] };

  const oS = functionSelectors("OwnershipFacet");
  const o = m.contract("OwnershipFacet");
  const oC = [o, FacetCutAction.Add, Object.values(oS)];

  const dlS = functionSelectors("DiamondLoupeFacet");
  const dl = m.contract("DiamondLoupeFacet");
  const dlC = [dl, FacetCutAction.Add, Object.values(dlS)];

  const cutProxy = m.contractAt("DiamondCutFacet", App, {
    id: "AppDiamondCutFacet",
  });

  m.call(cutProxy, "diamondCut", [[oC, dlC], diInit.contract, diInit.selector]);

  const aciS = functionSigsSelectors("AccessControlInit");
  const aci = m.contract("AccessControlInit");
  const aciInit = { contract: aci, selector: aciS[INIT_SIG] };

  const acS = functionSelectors("AccessControlFacet");
  const ac = m.contract("AccessControlFacet");
  const acC = [ac, FacetCutAction.Add, Object.values(acS)];

  m.call(cutProxy, "diamondCut", [[acC], aciInit.contract, aciInit.selector], {
    id: "AccessControlDiamondCut",
  });

  const acProxy = m.contractAt("AccessControlFacet", App, {
    id: "AppAccessControl",
  });

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
    { id: "FacetDiamondCut" }
  );

  const facet1Proxy = m.contractAt("Facet1", App, {
    id: "Facet1Proxy",
  });

  const facet2Proxy = m.contractAt("Facet2", App, {
    id: "Facet2Proxy",
  });

  const initNewFacetSelectors = functionSigsSelectors("NewFacetInit");
  const initNewFacet = m.contract("NewFacetInit");
  const facetsInit2 = {
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
    [[newFacetCut], facetsInit2.contract, facetsInit2.selector],
    { id: "NewFacetDiamondCut" }
  );

  const newFacetProxy = m.contractAt("NewFacet", App, {
    id: "NewFacetProxy",
  });

  return { App, cutProxy, acProxy, facet1Proxy, facet2Proxy, newFacetProxy };
});

export default IgniteTestModule;
