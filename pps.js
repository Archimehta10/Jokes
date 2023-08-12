const jokes = document.querySelector('#jokes');
const button = document.querySelector('#ew');
const dadjoke = async () => {

    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    const newli = document.createElement('LI');
    newli.append(res.data.joke);
    jokes.append(newli);

};
button.addEventListener('click', dadjoke);
