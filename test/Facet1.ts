import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { deployDiamond } from "./DeployFixture";
import { expect } from "chai";

describe("Facet1", function () {
  it("Should Claim Integer", async function () {
    const { kofi, ama, facet1Proxy } = await loadFixture(deployDiamond);
    await expect((facet1Proxy.connect(kofi) as any).claimInteger(1))
      .to.emit(facet1Proxy, "IntegerClaimed")
      .withArgs(1, kofi.address);
    await expect(
      (facet1Proxy.connect(ama) as any).claimInteger(1)
    ).to.revertedWithCustomError(facet1Proxy, "IntegerExists");
  });
  it("Should Release Integer", async function () {
    const { ama, kofi, facet1Proxy } = await loadFixture(deployDiamond);
    await expect(
      (facet1Proxy.connect(ama) as any).releaseInteger(1)
    ).to.revertedWithCustomError(facet1Proxy, "IntegerDoesNotExists");
    await expect((facet1Proxy.connect(ama) as any).claimInteger(1))
      .to.emit(facet1Proxy, "IntegerClaimed")
      .withArgs(1, ama.address);
    await expect(
      (facet1Proxy.connect(kofi) as any).releaseInteger(1)
    ).to.revertedWithCustomError(facet1Proxy, "InvalidOwner");
    await expect((facet1Proxy.connect(ama) as any).releaseInteger(1))
      .to.emit(facet1Proxy, "IntegerReleased")
      .withArgs(1, ama.address);
  });
  it("Should Check Integer", async function () {
    const { facet1Proxy } = await loadFixture(deployDiamond);
    await facet1Proxy.claimInteger(99);
    expect(await facet1Proxy.checkInteger(99)).to.be.true;
  });
});
