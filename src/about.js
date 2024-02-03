export default function aboutLoad(){
    let content=document.querySelector('#content');

    let banner=document.createElement('div');
    let img=document.createElement('img');
    let container=document.createElement('div');
    let para=document.createElement('p');

    banner.classList.add('banner');
    container.classList.add('container');

    img.src='https://images.pexels.com/photos/17685567/pexels-photo-17685567/free-photo-of-a-group-of-people-riding-surfboards-in-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load';
    para.textContent='lorem ipsum';

    banner.appendChild(img);

    container.appendChild(para);
    
    content.appendChild(banner);
    content.appendChild(container);

}