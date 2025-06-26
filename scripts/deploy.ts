import { ignition } from "hardhat";
import AppDiamond from "../ignition/modules/AppDiamond";
import Facets from "../ignition/modules/Facets";

async function main() {
  await ignition.deploy(AppDiamond, { displayUi: true });
  await ignition.deploy(Facets, { displayUi: true });
  console.log(`Deployments Successfull ...`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
