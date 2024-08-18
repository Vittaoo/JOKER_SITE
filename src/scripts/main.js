const openButtons = document.querySelectorAll(".open-modal")

openButtons.forEach(button =>{
    button.addEventListener("click", (e)=>{
        e.preventDefault()
        const modalId = button.getAttribute('data-modal')
        const modal = document.getElementById(modalId)
        modal.showModal()
        

        const getDiv = document.querySelectorAll(".get-div")
        
        getDiv.forEach(div => {

            div.classList.toggle('teste-none')
        })
    
        
    })
})

const closeButtons = document.querySelectorAll(".close-modal")

closeButtons.forEach(button => {
    button.addEventListener("click", ()=>{
    
        const modalId = button.getAttribute('data-modal')
        const modal = document.getElementById(modalId)
        
        modal.close()
    

        const getDiv = document.querySelectorAll(".get-div")
        
        getDiv.forEach(div => {

            div.classList.remove('teste-none')
        })
        
        


    })
})


const getHamburguer = document.querySelector("#hamburguer-navbar")
const getCloseButton = document.querySelector("#close") 
const getHero = document.querySelector(".container__hero")


getHamburguer.addEventListener('click', () => {
    const getNavBar = document.querySelector(".navbar-mobile")
    getNavBar.classList.add('navbar-mobile-active')
    
    getCloseButton.style.display = 'flex';

    const getHamburguer = document.querySelector("#hamburguer-navbar")
    getHamburguer.style.display = 'none';

    
    getHero.style.display = 'none'


})

getCloseButton.addEventListener('click', () => {
    const getNavBar = document.querySelector(".navbar-mobile")
    getNavBar.classList.remove('navbar-mobile-active')
    getCloseButton.style.display = 'none';

    const getHamburguer = document.querySelector("#hamburguer-navbar")
    getHamburguer.style.display = 'flex';
    getHero.style.display = 'flex'
    

})

