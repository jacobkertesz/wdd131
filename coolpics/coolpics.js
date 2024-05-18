const button = document.getElementById('toggle');
const menu = document.getElementById('menu');
const gallery = document.getElementsByClassName('gallery');

function toggleMenu() 
{
    menu.classList.toggle('hidden');
}

function resizeHandle()
{
    if (window.innerWidth > 1000)
    {
        menu.classList.remove('hidden');
    }
    else 
    {
        menu.classList.add('hidden');
    }
}

function viewerTemplate(path, alt)
{
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${path}" alt="${alt}">
        </div>`;
}

function closeViewer()
{
    const viewer = document.querySelector('.viewer');
    if (viewer)
    {
        viewer.remove();
    }
}

function viewHandler(event) 
{
    const image = event.target;
    const oldSrc = image.getAttribute('src');
    console.log(oldSrc);
    

    let srcParts = oldSrc.split("-");

    let newSrc = srcParts[0] + "-full.jpeg";

    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newSrc, "full-image"));

    const exit = document.querySelector('.close-viewer');
    if (exit) 
    {
        exit.addEventListener('click', closeViewer);
    }    
}

resizeHandle();
button.addEventListener('click', toggleMenu);
window.addEventListener('resize', resizeHandle);

for (let i = 0; i < gallery.length; i++)
{
    gallery[i].addEventListener('click', viewHandler);
}