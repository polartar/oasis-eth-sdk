import { getMainnetSdk } from '@dethcrypto/eth-sdk-client' // yay, our SDK! It's tailored especially for our needs
import { ethers } from 'ethers'

const mainnetProvider = ethers.getDefaultProvider('mainnet')

const defaultSigner = ethers.Wallet.createRandom().connect(mainnetProvider)

export async function getBalances(address: string) {
  const sdk = getMainnetSdk(defaultSigner)

  return Promise.all([
    sdk.dai.balanceOf(address),
    sdk.usdc.balanceOf(address),
    sdk.dao.mkr.balanceOf(address),
  ])
}
