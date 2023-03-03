import {uploadFiles} from "./http-provider";


const body = document.querySelector('body');
let inputFile, imgPhoto;


const createInputFileHTML = () => {

    const html = `
        <h1 class="mt-5">Subir Archivo</h1>
        <hr>
        <label>Select Photo On Desktop</label>
        <input id="file" type="file" accept="image/png,image/jpeg">
        <br>
        <img id="photo" class="img-thumbnail" src="">
    `;

    const divContainer = document.createElement('div');
    divContainer.innerHTML = html;
    body.append(divContainer);

    inputFile = document.querySelector('#file');
    imgPhoto = document.querySelector('#photo');

}


const events = async () => {

    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        console.log(file);
        uploadFiles(file).then(secure_url => imgPhoto.src = secure_url);
    });

}


export const init = () => {
    createInputFileHTML();
    events();
}