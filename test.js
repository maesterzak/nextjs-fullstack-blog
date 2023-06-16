import React from 'react'

function commentForm() {
    function submitHandler(e) {
        e.preventDefault();
        var formData = new FormData(e.target);
        const form_values = Object.fromEntries(formData);
        console.log('form values', form_values)
    }
    return (
        <>
            <div className='container mx-auto'>
                <div>
                    <form onSubmit={submitHandler}>
                        <div class="mb-4">
                            <label for="name"
                                class="block text-gray-700 font-bold mb-2">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="mb-4">
                            <label
                                for="email"
                                class="block text-gray-700 font-bold mb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="mb-4">
                            <label
                                for="comment"
                                class="block text-gray-700 font-bold mb-2">Comment:</label>
                            <textarea
                                id="comment"
                                name="comment"
                                placeholder="Your Comment"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">

                            </textarea>
                        </div>
                        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default commentForm