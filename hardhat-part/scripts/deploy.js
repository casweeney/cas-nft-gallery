const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { METADATA_URL } = require("../constants");

async function main() {
    const metadataUrl = METADATA_URL;

    const casArtworksContract = await ethers.getContractFactory("CasArtworks");

    const deployedCasArtworksContract = await casArtworksContract.deploy(
        metadataUrl
    );

    console.log(
        "Casweeney Artworks Contract Address:",
        deployedCasArtworksContract.address
    );
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})