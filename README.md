# Summary

- This is a template repository for using solidity diamond pattern (<https://eips.ethereum.org/EIPS/eip-2535>, <https://github.com/mudgen/awesome-diamonds>) and good old hardhat for framework. Access control library from <https://github.com/solidstate-network/solidstate-solidity>.
 with hardhat, ignition and bun for runtime.

- Hardhat Config is used to store private keys and other sensitive variables.

- Hardhat Ignition is used for deployments.

## Quick Start

- `bun install` to  install dependencies
- `bun run deploys` to see a list of deployment ids
- `bun run deploys:id <id>` to see all contract addresses for that id
- Example `bun run deploys:id chain-84532` will list contract addresses deployed to the base testnet.

### Deploy

- `bun run test` to run the test suit.
- `bun run deploy:all <network>` to deploy to a particular network. You can check the files in the `config` folder for the configured networks.
- Example `bun run deploys:all baseSepolia` will deploy to the base testnet.

## Top Level Folder Structure

```arduino
diamond-template/
├── client/          → TypeScript client for contract interaction
├── configs/         → Config values & constants
├── contracts/       → Core contracts & facets
├── data/            → Supporting data
├── ignition/        → Deployment setup
├── scripts/         → Hardhat automation scripts
├── test/            → Unit + integration tests
├── README.md        → Setup + usage guide
├── hardhat.config.ts → Hardhat config
├── package.json     → Project metadata
├── tsconfig.json    → TypeScript config
```

### Contract Folder Structure

```arduino
contracts/
├── diamond/          → Code for diamond directly from here https://github.com/mudgen/diamond-2-hardhat
├── globals/         → Global values & constants
├── inits/       → Initialization contracts for facets
├── interfaces/            → Interface definitions
├── libraries/        → Libraries containing bulk of logic
├── modules/         → Facet contracts
├── App.sol    → Inherites Diamond with you application name
```

Note that diamond folder is copied directly from the reference implementation https://github.com/mudgen/diamond-2-hardhat. only additions there are `diamond/upgradeinitializers/AccessControlInit.sol`,  `diamond/interfaces/AppRoles.sol` and `diamond/facets/AccessControlFacet.sol` for access control.