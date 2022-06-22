
// fetches the kanye quote from kanye rest api
const getKanyeQuote = async () => {

    const kanyeQuote = await axios.get('https://api.kanye.rest');
    return (kanyeQuote.data.quote)
}
//
getKanyeQuote();

//function to change the main quote to the generated one on button click

const replaceQuote = async () => {
    const newQuote = await getKanyeQuote();
    mainQuote.innerHTML = `"${newQuote}"`;

}


//


//selecting button/important paragraphs for proceeding onclick events
const button = document.querySelector('button');
const mainQuote = document.querySelector('.mainQuote');
button.addEventListener('click', () => {
    replaceQuote();
})



