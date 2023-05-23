


const getData = async (url, form_values) => {
    try {
        const res = await fetch(url, {
            method: "GET",

            headers: {
                Accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify(form_values),
        });
        //it returns status of 200 if it was successfull and 400 if not successfull

        let response = await res.json()

        if (res.status === 200) {
            return { status: "success", data: response, code: res.status }

        } else {
            return { status: "fail", code: res.status }
        }
    }
    catch (err) {
        console.log("get d", err)
    }

};
export default getData; 
