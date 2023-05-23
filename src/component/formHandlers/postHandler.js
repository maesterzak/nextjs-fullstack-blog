


const postData = async (url, form_values) => {
    const res = await fetch(url, {
        method: "POST",

        headers: {
            Accept: "application/json",
            "content-type": "application/json",
        },
        body: JSON.stringify(form_values),
    });
    //it returns status of 201 if it was successfull and 400 if not successfull

    let response = await res.json()

    if (res.status === 201) {
        return { status: 'success', code: res.status, data: response.data }

    }
    else if (res.status === 200) {
        return { status: 'success', code: res.status }
    }
    else return { status: 'false', code: res.status }
};
export default postData; 
