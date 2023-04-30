import { AppProps } from 'next/dist/shared/lib/router/router'
import '../styles/globals.css'
import Header from 'components/layout/Header'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen	">
      <Header />
      <Component {...pageProps} />
      <ToastContainer />
    </div>
  )
}

export default MyApp
