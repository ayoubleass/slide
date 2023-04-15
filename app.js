
const cards = document.querySelector('#cards');
let rightArrow = document.querySelector('.fa-arrow-left');
let leftArrow  = document.querySelector('.fa-arrow-right');




function addElement(posts){
    for(let post of posts){
        let container = document.createElement('div');
        container.setAttribute('class','card-item');
        container.innerHTML = `
            <h2></h2>
            <p></p>
        `;
        container.querySelector('h2').innerText = post.title;
        container.querySelector('p').innerText = post.body;
        cards.append(container); 
    } 
    slide();
}




//fetch

async function fetchPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

    const response = await fetch(url,{
        method : 'GET',
        headers :{
            "Accept" : 'application/json',
        }
    });

    if(response.ok){
        return addElement(await response.json());
        
    }

    throw new Error('serveur is not responding');
    
}


fetchPosts();



async function slide (){
    
    
    let cardItems = await document.querySelectorAll('.card-item');
    let i = 0;
    leftArrow.addEventListener('click', ()=>{
    
       if(i === cardItems.length ){
          i = 0;
        }else{
        let reference  =  ((i - 1) === -1) ? 0 : (i - 1)  ;
        cardItems[reference].style.background = 'transparent';
        cardItems[i].style.background = 'red'
        i++;
       }
      
    })

    rightArrow.addEventListener('click', ()=>{
        console.log('click');
    })

} 










