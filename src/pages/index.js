import Featured from '@/component/Feautured'
import PostCard from '@/component/postCard'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Hero from '../component/Hero'
import Navbar from '../component/Navbar'
import styles from '../styles/Home.module.css'
import { loadArticles } from 'lib/server/loadArticles'
import { useState } from 'react'
import MainLayout from './main_layout'


export const getStaticProps = async () => {
  let res = await loadArticles()

  let data

  if (res.success) {
    data = res.data
  }
  else {
    return undefined
  }


  return {
    props: { articles: data }
  }
}

export default function Home({ articles }) {
  console.log("kll", articles)
  const [articlesList, setArticlesList] = useState(articles)

  const post = [1, 2]
  const posts = [1, 2, 4, 4, 4, 4, 4, 4, 4, 4]
  let data = {
    title: 'Home Page',
    description: 'Amaizing site'
  }
  return (
    <MainLayout meta={data} >
      <div className='w-[100%] md:w-[70%]' >


        <main className='flex flex-col justify-center'>
          {/* <Hero /> */}
          <br />

          <div className='px-3 md:px-14'>
            {/* <div className=' mb-4 w-full '>
          
          {post.map(()=>{
        return(

          <Featured />
        )
      })}

        </div> */}
            {/* <h1 className='header text-center font-bold text-4xl mt-0 md:mt-10 mb-10'>Recent posts</h1> */}
            <div className=' gap-3 flex flex-wrap justify-between'>

              {articlesList.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <PostCard data={item} />
                  </React.Fragment>
                )
              })}





            </div>
            <div className='flex justify-center gap-3 md:mt-4 mb-4'>
              <a href="#" className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium  bg-[#f08e80] border border-gray-300 rounded-lg text-white hover:text-[#505050]">
                <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                Previous
              </a>
              <a href="#" className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium  bg-[#f08e80] border border-gray-300 rounded-lg text-white hover:text-[#505050]">
                Next
                <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>

          </div>




        </main>


      </div>

    </MainLayout>

  )
}
