import homeLoad from "./home";
import aboutLoad from './about';
import menuLoad from "./menu";
import empty from "./empty";

import './style.css';

let homeBtn=document.querySelector('button:nth-child(1)');

let menuBtn=document.querySelector('button:nth-child(2)');
let aboutBtn=document.querySelector('button:nth-child(3)');
homeLoad();
homeBtn.addEventListener('click',function(){empty(); homeLoad();});
menuBtn.addEventListener('click',function(){empty(); menuLoad();});
aboutBtn.addEventListener('click',function(){empty(); aboutLoad();});