import Image from 'next/image'

const Header = () => {
  return (
    <div className="py-3 px-5 flex items-center bg-[#81a7ed]">
      <title>Oasis-Test</title>
      <Image src="/logo.png" width={'50'} height={'50'} alt="logo" />

      <div className="ml-5 flex flex-col text-[#e5f9f8]">
        <span className=" font-bold font-">Muhammad Abdullah</span>

        <span>Oazo Apps full stack candidate</span>

        <a
          href="https://github.com/polartar"
          className=" text-sm underline"
          target="_blank"
          rel="noreferrer"
        >
          @polartar
        </a>
      </div>
    </div>
  )
}

export default Header
