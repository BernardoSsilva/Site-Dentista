

// abre e fecha o menu ao clicar no icone
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for( const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

//quando clicar em um item do menu fechar o menu
const links = document.querySelectorAll('nav ul li a')
for (const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

// sombra ao rolar pagina para baixo
const backToTopButton = document.querySelector('.back-to-top')
const header = document.querySelector("#header")
const navHeader = header.offsetHeight

function headerScroll(){
    if(this.window.scrollY >= navHeader){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
}

function BackToTop (){
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}


// carrossel de testemunhos
const swiper = new Swiper('.swiper',{
    slidesPerView: 1,
    pagination:{
        el: '.swiper-pagination'
    },
    mousewhell: true,
    keyboard: true,
    breakpoints:{
        767:{
            slidesPerView:2,
            setWrapperSize:7
        }
    }

});

//scroll reveal: animação de scroll

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 750,
    reset: true
})

scrollReveal.reveal(`#home .text, #home .image,
                    #about .image, #about .text, 
                    #services header, #services .card,
                    #testemonials header, #testemonials .testimonials,
                    #contacts .text, #contacts .links,
                    footer .logo-alt, footer .social
                    `,
                    {interval:250}
                    )

// ativar menu conforme seção visivel na pagina
const sections = document.querySelectorAll('main section[id]')
function ActivateMenuSection(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8)*4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const id = section.getAttribute('id')
        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document
                .querySelector('nav ul li a[href*=' + id + ']')
                .classList.add('active')
        }else{
            document            
                .querySelector('nav ul li a[href*=' + id + ']')
                .classList.remove('active')
        }
    }
}

//when scrol
window.addEventListener('scroll', function(){
    headerScroll()
    BackToTop()
    ActivateMenuSection()
})
                     

