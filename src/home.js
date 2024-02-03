export default function homeLoad(){
    let content=document.querySelector('#content');

    let banner=document.createElement('div');
    let h1=document.createElement('h1');
    let img=document.createElement('img');
    let container=document.createElement('div');
    let para=document.createElement('p');

    banner.classList.add('banner');
    container.classList.add('container');

    h1.textContent='welcome!';
    img.src='https://images.pexels.com/photos/925684/pexels-photo-925684.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
    para.textContent='lorem ipsum';

    banner.appendChild(h1);
    banner.appendChild(img);

    container.appendChild(para);
    
    content.appendChild(banner);
    content.appendChild(container);

}