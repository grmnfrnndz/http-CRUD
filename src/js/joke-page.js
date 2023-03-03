import '../css/components.css';
import {getJoke} from "./http-provider";


const body = document.querySelector('body');
let btnOtherJoke, olList;


const makeJokeHtml = () => {

    const html = `
        <h1 class="mt-5">Jokes</h1>
        <hr>
        <button class="btn btn-primary">Other Joke</button>
    
        <ol class="mt-2 list-group">
        </ol>
    `;

    const divJoke = document.createElement('div');
    divJoke.innerHTML = html;
    body.append(divJoke);
}

const events = () => {
    olList = document.querySelector('ol');
    btnOtherJoke = document.querySelector('button');

    btnOtherJoke.addEventListener('click', async() => {
        btnOtherJoke.disabled = true;
        drawJoke(await getJoke());
        btnOtherJoke.disabled = false;
    });


}

const drawJoke = (joke) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${joke.id}</b>: ${joke.value}`;
    olItem.classList.add('list-group-item');
    olList.append(olItem);
}



export const init = () => {
    makeJokeHtml();
    events();
}
