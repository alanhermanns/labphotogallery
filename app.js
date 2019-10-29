import images from './data.js';
import { htmlToDom } from './utils/htmlToDom.js';

const makeSelectAndOptions = () => {
    const htmlSelect = /*html*/`
    <div id = 'form'>
        <label>Filter By Horns<label>
            <select>
                <option id = '1-horn'>1</option>
                <option id = '2-horns'>2</option>
                <option id = '3-horns'>3</option>
                <option id = 'more-than-3-horns'>>3</option>
            </select>
    </div>
    `;
    return htmlSelect;
};

const renderImage = (image) => {
    const html = /*html*/`
        <li>
            <div class = 'image-container'>
                <h2>${image.title}</h2>
                <div class = 'image'>
                    <img src = ${image.url}>
                </div>
                <p>${image.description}</p>
            </div>
        </li>`;
    
    return html;
};

images.forEach(image => {
    let html = renderImage(image);
    let dommedHtml = htmlToDom(html);
    let largeList = document.querySelector('ul');
    largeList.appendChild(dommedHtml);
});

let selectForm = makeSelectAndOptions();
let dommedForm = htmlToDom(selectForm);
let header = document.querySelector('h1');
header.appendChild(dommedForm);


