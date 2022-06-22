
// fetches the kanye quote from kanye rest api
const getKanyeQuote = async () => {

    const kanyeQuote = await axios.get('https://api.kanye.rest');
    return (kanyeQuote.data.quote)
}
//

// appending Old quotes to the body

let counter = 0;

const pastQuotesSection = document.querySelector('.pastQuotesSection');
const appendOldQuotes = () => {
    counter += 1;

    if (counter <= 5) {
        const old = document.createElement('div');
        old.innerHTML = `"${mainQuote.innerHTML}"`;
        pastQuotesSection.appendChild(old);
    } else if (counter > 5) {

        const firstChild = pastQuotesSection.getElementsByTagName('div')[0];
        pastQuotesSection.removeChild(firstChild);
        const old = document.createElement('div');
        old.innerHTML = `"${mainQuote.innerHTML}"`;
        pastQuotesSection.appendChild(old);
    }




}
//

//function to change the main quote to the generated one on button click

const replaceQuote = async () => {
    const newQuote = await getKanyeQuote();
    appendOldQuotes();
    mainQuote.innerHTML = `"${newQuote}"`;


}


//



//selecting button/important paragraphs for proceeding onclick events
const button = document.querySelector('button');
const mainQuote = document.querySelector('.mainQuote');
button.addEventListener('click', () => {
    replaceQuote();
})



