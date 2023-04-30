import Image from 'next/image'
import { IToken } from 'types/cryptoBalance'

const CryptoBalance = ({ img, name, symbol, balance }: IToken) => {
  return (
    <div className="flex justify-between items-center max-w-lg py-2 px-3 gap-3">
      <div className="flex items-center">
        <Image src={img} alt="" width={'30'} height={'30'} />

        <span className="ml-3">{name}</span>
      </div>
      <div className="flex gap-1">
        <span className=" text-center ">{balance}</span>

        <span className=" w-12 text-left">{symbol}</span>
      </div>
    </div>
  )
}

export default CryptoBalance
