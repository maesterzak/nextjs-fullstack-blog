// import '../styles/globals.css'

import '@/styles/globals.css'
import Layout from '../component/Layout'
import Navbar from '../component/Navbar'
import { Raleway, IBM_Plex_Sans, Dancing_Script, Roboto_Slab, Work_Sans } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StoreProvider } from '@/component/context/store';

const raleway = Raleway({ subsets: ['latin'] });
const ibmSans = IBM_Plex_Sans({
  weight: '700',
  subsets: ['latin'],
});
const dancingScript = Dancing_Script({ subsets: ['latin'] });
const robotoSlab = Roboto_Slab({ subsets: ['latin'] });
const workSans = Work_Sans({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <StoreProvider>
        <style jsx global>{`
        :root {
          --raleway-font: ${raleway.style.fontFamily};
          --ibmSans-font: ${ibmSans.style.fontFamily};
          --dancing-script: ${dancingScript.style.fontFamily};
          --roboto-slab: ${robotoSlab.style.fontFamily};
          --work=sans: ${workSans.style.fontFamily}
        }
      `}</style>

        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />

      </StoreProvider>
    </SessionProvider>

  )
}

export default MyApp
