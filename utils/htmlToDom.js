export const htmlToDom = (htmlText) => {
    const template = document.createElement('template');
    template.innerHTML = htmlText;
    const content = template.content;
    if (content.children > 1) {
        throw new Error ('no more than one child, genene');
    }
    const firstElementChild = content.firstElementChild;
    return firstElementChild;
};