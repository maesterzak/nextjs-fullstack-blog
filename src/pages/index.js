import Featured from '@/component/Feautured'
import PostCard from '@/component/postCard'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Hero from '../component/BlogComponents/Hero'
import Navbar from '../component/Navbar'
import styles from '../styles/Home.module.css'
import { loadArticles } from 'lib/server/loadArticles'
import { useState } from 'react'
import MainLayout from '../component/Layout/MainLayout.jsx'
import Link from 'next/link'
import { TruncateText } from '@/component/Reuseable/TruncateText'
import PostCardLoader from '@/component/BlogComponents/LoadingScreens/PostCardLoader/index.jsx'
import SectionOne from '@/component/BlogComponents/SectionOne'
import SectionTwo from '@/component/BlogComponents/SectionTwo'
import SectionThree from '@/component/BlogComponents/SectionThree'
import SectionFour from '@/component/BlogComponents/SectionFour'

export const getStaticProps = async () => {
  let res = await loadArticles()

  let data

  if (res.success) {
    data = res.data


  }



  return {
    props: { articles: data ?? null },
    revalidate: 10, // In seconds
  }
}

export default function Home({ articles }) {

  const [articlesList, setArticlesList] = useState(articles)

  // const post = [1, 2]
  // const posts = [1, 2, 4, 4, 4, 4, 4, 4, 4, 4]
  let data = {
    title: 'Home Page',
    description: 'Amaizing site'
  }
  return (
    <MainLayout meta={data} >
      <div className='h-max '>
        <Hero />
      </div>

      <div className='w-full border-primaryColor/40 pb-12 border-b-2'>
        <SectionOne />
      </div>
      <div className='w-full'>
        <SectionTwo />
      </div>
      <div className='w-full border-primaryColor/40 pb-12 border-b-2'>
        <SectionThree />
      </div>

      <div className='w-full border-primaryColor/40 pb-12 border-b-2'>
        <SectionFour />
      </div>
      <div className='w-full border-primaryColor/40 pb-12 border-b-2'>
        <SectionThree />
      </div>
      {/* <div className='w-[100%] md:w-[70%] ' >


        <main className='flex flex-col justify-center'>


          <div className='px-3 md:px-14 '>

            <div className=' gap-3 flex flex-wrap justify-between'>

              {articlesList?.length > 0 ?
                <>

                  {articlesList?.map((item, index) => {
                    return (
                      <React.Fragment key={index}>

                        <PostCard data={item} />
                      </React.Fragment>
                    )
                  })}
                </>

                :
                <>
                  <PostCardLoader />

                </>
              }





            </div>

            <div aria-label="Page navigation example" className={`flex justify-center`}>
              <ul class="list-style-none flex">
                <li>
                  <a
                    class="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400"
                  >Previous</a
                  >
                </li>
                <li>
                  <a
                    class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                    href="#!"
                  >1</a
                  >
                </li>
                <li aria-current="page">
                  <a
                    class="relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300"
                    href="#!"
                  >2
                    <span
                      class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
                    >(current)</span
                    >
                  </a>
                </li>
                <li>
                  <a
                    class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                    href="#!"
                  >3</a
                  >
                </li>
                <li>
                  <a
                    class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                    href="#!"
                  >Next</a
                  >
                </li>
              </ul>
            </div>

          </div>




        </main>


      </div> */}

    </MainLayout>

  )
}
