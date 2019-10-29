import { htmlToDom } from '../utils/htmlToDom.js';
const test = QUnit.test;

QUnit.module('html to DOM');

test('converts html to DOM', (assert) => {
    // Arrange
    const html = /*html*/`
        <h1>test</h1>
    `;

    // Act
    const dom = htmlToDom(html);

    // Assert
    assert.equal(dom.tagName, 'H1');
    assert.equal(dom.textContent, 'test');
});