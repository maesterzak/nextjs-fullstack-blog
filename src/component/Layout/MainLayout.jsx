
import Head from "next/head"

import { SWRConfig } from "swr"
import axios from "axios"



export default function MainLayout({ children, param, meta }) {





    return (
        <SWRConfig value={{ fetcher: (url) => axios(url).then(r => r.data) }}>
            <Head>
                <title>{meta?.title}</title>
                <meta name="description" content={meta?.description} />
                <link rel="icon" href="/favicon.ico" />

            </Head>
            <div className="w-full flex flex-wrap   justify-center gap-4">

                {children}


            </div>
        </SWRConfig>
    )


}