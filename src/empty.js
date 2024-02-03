export default function empty(){
    let content=document.querySelector('#content');

    while(content.firstChild){
        content.removeChild(content.firstChild);
    }

}