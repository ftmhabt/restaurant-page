export default function menuLoad(){
    let content=document.querySelector('#content');

    let banner=document.createElement('div');
    let h1=document.createElement('h1');
    let container=document.createElement('div');
    let para=document.createElement('p');

    banner.classList.add('banner');
    container.classList.add('container');

    h1.textContent='welcome!';
    para.textContent='lorem ipsum';

    banner.appendChild(h1);

    container.appendChild(para);
    
    content.appendChild(banner);
    content.appendChild(container);

}