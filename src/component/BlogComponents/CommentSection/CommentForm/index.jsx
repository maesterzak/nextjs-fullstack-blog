import ButtonOne from '@/component/Reuseable/Buttons/ButtonOne'
import ButtonTwo from '@/component/Reuseable/Buttons/ButtonTwo'
import React from 'react'

function CommentForm() {
    return (
        <form className='bg-thirdBackground p-10  md:p-10 flex flex-col gap-5'>
            <h2>Leave a Comment</h2>
            <span>Your Email address will not be published, Required fields are marked *</span>
            <textarea className=' h-60' placeholder='Type here'>

            </textarea>
            <div className='flex flex-col md:flex-row gap-5 justify-between'>
                <input className=' w-full ' placeholder='Name' />
                <input className=' w-full ' placeholder='Email' />
                <input className=' w-full' placeholder='Website' />
            </div>
            <div>
                <ButtonTwo text={"Post Comment"} classList='hover:bg-primaryColor p-2 hover:text-buttonText text-md font-bold' />
            </div>

        </form>
    )
}

export default CommentForm