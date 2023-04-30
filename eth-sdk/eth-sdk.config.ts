import type { EthSdkConfig } from '@dethcrypto/eth-sdk'

const config: EthSdkConfig = {
  contracts: {
    mainnet: {
      dai: '0x6b175474e89094c44da98b954eedeac495271d0f',
      usdc: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      dao: {
        mkr: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      },
    },
  },
}

export default config
