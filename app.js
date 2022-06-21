const getKanyeQuote = async () => {

    const kanyeQuote = await axios.get('https://api.kanye.rest');
    return (kanyeQuote.data.quote);

}

const button = document.querySelector('button');



