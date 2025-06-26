import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers, ignition } from "hardhat";
import IgniteTestModule from "../ignition/modules/test/IgniteTest";

export async function deployDiamond() {
  const [owner, kofi, ama] = await ethers.getSigners();
  const { cutProxy, acProxy, facet1Proxy, facet2Proxy, newFacetProxy } =
    await ignition.deploy(IgniteTestModule, {
      displayUi: false,
    });

  return {
    owner,
    kofi,
    ama,
    cutProxy,
    acProxy,
    facet1Proxy,
    facet2Proxy,
    newFacetProxy,
  };
}

describe("AppDiamond", function () {
  it("Should Deploy", async function () {
    await loadFixture(deployDiamond);
  });
});
