// import '../styles/globals.css'

import '@/styles/globals.css'
import Layout from '../component/Layout/GlobalLayout.jsx'
import Navbar from '../component/Navbar'
import { Raleway, IBM_Plex_Sans, Dancing_Script, Work_Sans } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StoreProvider } from '@/component/context/store';
import { Montserrat, Roboto_Slab } from '@next/font/google'



const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont"
})

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <StoreProvider>

        <div className={`${montserrat.variable}  font-mono `}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer />
        </div>

      </StoreProvider>
    </SessionProvider>

  )
}

export default MyApp
