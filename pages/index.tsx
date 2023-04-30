import CryptoBalances from 'components/home/CryptoBalances'
import CryptoForm from 'components/home/CryptoForm'
import { Tokens } from 'const'
import { BigNumber } from 'ethers'
import { formatEther, parseEther } from 'ethers/lib/utils'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { IToken } from 'types/cryptoBalance'

const Home: NextPage = () => {
  const [address, setAddress] = useState('')
  const [tokens, setTokens] = useState<IToken[]>(Tokens)

  useEffect(() => {
    if (address) {
    }
  }, [address])

  const updateBalances = (balances: BigNumber[] | string[]) => {
    const newTokens = tokens.map((token, index) => ({
      ...token,
      balance: balances[index] !== '--' ? formatEther(balances[index].toString()) : '--',
    }))
    setTokens(newTokens)
  }
  return (
    <div className="content">
      <div className="flex gap-4 py-4 px-12 ">
        <CryptoBalances tokenList={tokens} />
        <CryptoForm setAddress={setAddress} updateBalances={updateBalances} />
      </div>
    </div>
  )
}

export default Home
