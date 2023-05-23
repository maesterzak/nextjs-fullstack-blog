


const getHandler = async (url) => {
    const res = await fetch(url);
    //it returns status of 200 if it was successfull and 400 if not successfull

    let response = await res.json()
    console.log("dfs", response)
    if (res.status === 200) {
        return { status: "success", data: response, code: res.status }

    } else {
        return { status: "fail", code: res.status }
    }
};
export default getHandler; 
