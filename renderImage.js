export const renderImage = (image) => {
    const html = /*html*/`
        <li>
            <div class = 'image-container'>
                <h2>${image.title}</h2>
                <div class = 'image'>
                    <img src = ${image.url}>
                </div>
                <p class = 'description'>${image.description}</p>
            </div>
        </li>`;
    
    return html;
};