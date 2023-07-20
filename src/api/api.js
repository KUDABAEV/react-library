

async function  getAnswer  (url) {
    const answer = await  fetch(url);
    const data = await  answer.json();

    console.log(data)

    return data;

}

export  {
    getAnswer
}