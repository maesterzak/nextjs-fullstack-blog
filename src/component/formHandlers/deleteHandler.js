


const deleteData = async (url) => {
    const res = await fetch(url, {
        method: "DELETE",

        headers: {
            Accept: "application/json",
            "content-type": "application/json",
        },

    });
    //it returns status of 200 if it was successfull and 400 if not successfull

    let response = await res.json()

    if (res.status === 200) {
        return { status: 'success', code: res.status, data: response.data }

    }
    else if (res.status === 200) {
        return { status: 'success', code: res.status }
    }
    else return { status: 'false', code: res.status }
};
export default deleteData; 
