const btns=document.querySelectorAll('.btn-modale');
const modaleEquipement=document.querySelector('.bloc-modale');
const fermutureModale=document.querySelector('.fermeture-modale');
const imgIndex=document.querySelector('.bloc-modale img');
// responsive design
if (window.matchMedia("(min-width: 850px)").matches){

    btns.forEach(btn =>{
        btn.addEventListener('click', (e)=>{
            imgIndex.src= `ressources/img${e.target.getAttribute('data-index')}-equip.jpg`;
            modaleEquipement.classList.add('active-modale');
    
        })
    })
    fermutureModale.addEventListener('click',() => {
        modaleEquipement.classList.remove('active-modale');
    
    })
    modaleEquipement.addEventListener('click',() => {
        modaleEquipement.classList.remove('active-modale');
    
    })

}

// anime nav bar
const nav = document.querySelector('nav');

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 30){
        nav.classList.add('anim-nav');
    } else{
        nav.classList.remove('anim-nav');
    }
})


