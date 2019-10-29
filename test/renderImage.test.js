import { renderImage } from '../renderImage.js';
import images from '../data.js';
const test = QUnit.test;

QUnit.module('render image');

test('renders html area', (assert) => {
    // Arrange
    const html = /*html*/`
        <li>
            <div class = 'image-container'>
                <h2>${images[0].title}</h2>
                <div class = 'image'>
                    <img src = ${images[0].url}>
                </div>
                <p class = 'description'>${images[0].description}</p>
            </div>
        </li>`;

    // Act
    const dom = renderImage(images[0]);

    // Assert
    //assert.equal(dom.tagName, 'H1');
    assert.equal(dom, html);
});
