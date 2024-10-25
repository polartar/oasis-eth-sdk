import { useState } from 'react'
import { getBalances } from 'utils/web3'
import { isAddress } from 'ethers/lib/utils'
import { BigNumber } from 'ethers'
import axios from 'axios'
import { Tokens } from 'const'
import { toast } from 'react-toastify'

interface CryptoFormProps {
  setAddress: (v: string) => void
  updateBalances: (v: BigNumber[] | string[]) => void
}

const CryptoForm = ({ setAddress, updateBalances }: CryptoFormProps) => {
  const [address, setInputAddress] = useState('')
  const [error, setError] = useState<string | null>()
  const [isLoading, setIsLoading] = useState(false)
  const [balances, setBalances] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onChangeInput = async (value: string) => {
    if (isSubmitted) {
      setIsSubmitted(false)
    }
    setError(null)

    setInputAddress(value)

    if (!isAddress(value)) {
      setError('Please provide a valid Ethereum Address')
    } else {
      setIsLoading(true)
      try {
        const balances = await getBalances(value)
        const isAllZero = balances.every((balance) => balance.isZero())

        if (isAllZero) {
          setError('At least one balance needs to be greater than zero')

          updateBalances(['--', '--', '--'])
        } else {
          setAddress(value)

          updateBalances(balances)
        }
      } catch (err) {
        toast.error('Something went wrong')
      } finally {
        setIsLoading(false)
      }
    }
  }

  const onSubmit = () => {
    if (isLoading) return

    setIsLoading(true)

    axios
      .post('/api/balances', {
        address: address,
        balances: Tokens.map((token, index) => ({
          token: token.symbol,
          balance: balances[index],
        })),
      })
      .then(() => {
        toast.success('Successfully submitted')
        setIsSubmitted(true)
      })
      .catch(() => {
        toast.error('Something went wrong')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className="flex flex-col w-full max-w-lg bg-[#f1f1f1] p-5 rounded-md	">
      <div className="font-bold mb-2 text-lg">Save account balance</div>

      <div>
        Provide an Ethereum address to find out DAI, USDC and MKR balances. Submit them to save a
        snapshot for future reference.
        <br></br> At least one balance must be greater than zero.
      </div>

      <div className="mt-3">
        <label htmlFor="address" className="font-bold">
          Address
        </label>

        <input
          type="string"
          name="string"
          placeholder="0xe14a...F48A"
          id="string"
          className="w-full py-3 px-3 border"
          value={address}
          onChange={(e) => onChangeInput(e.target.value)}
        ></input>

        <p className=" text-sm text-red-600 h-3">{error}</p>
      </div>

      <div className="mt-12 ">
        <button
          className={`w-full rounded bg-[#648fdd] text-white py-3 font-bold ${
            (error || !address) && 'text-gray-300 bg-[#a7b1c2] cursor-default'
          }`}
          disabled={!!error || !address}
          onClick={() => onSubmit()}
        >
          {isLoading ? (
            <div className="loading-spinner"></div>
          ) : isSubmitted ? (
            'Submitted!'
          ) : (
            'Submit'
          )}
        </button>
      </div>
    </div>
  )
}

export default CryptoForm
