import CryptoBalance from 'components/common/CryptoBalance'
import { IToken } from 'types/cryptoBalance'

const CryptoBalances = ({ tokenList }: { tokenList: IToken[] }) => {
  return (
    <div className="bg-[#f1f1f1] p-5 rounded-md		">
      <div className="mb-5 font-bold text-lg">Token Balances</div>
      <div className="flex flex-col gap-3">
        {tokenList.map((token) => (
          <CryptoBalance key={token.symbol} {...token} />
        ))}
      </div>
    </div>
  )
}

export default CryptoBalances
