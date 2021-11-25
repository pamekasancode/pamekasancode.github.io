const navbar = document.querySelector('.navbar')
const navbar_m = document.querySelector('.navbar_mobile')
const toggle_nav = document.getElementById('toggle-nav')
const navbar_m_nav = document.querySelector('.navbar_mobile_nav')
const links = document.querySelectorAll('.link')
const sections = document.querySelectorAll('section')
const preloader = document.querySelector('.preloader')

document.body.style.overflowY = 'hidden'
setTimeout(Preloader, 2300)

function Preloader() {
    preloader.style.opacity = 1
    preloader.style.transition = ".7s ease";
    preloader.style.opacity = 0
    setTimeout(function() {
        preloader.style.display = 'none'
        document.body.style.overflowY = 'auto'
    }, 300)
}

document.addEventListener('scroll', stickyNavbar)

function stickyNavbar() {
    navbar.classList.toggle('active', scrollY > 50)
    navbar_m.classList.toggle('active', scrollY > 50)
}

toggle_nav.addEventListener('click', handleNav)

function handleNav() {
    navbar_m_nav.classList.toggle('active')
    if(navbar_m_nav.classList.contains('active')) {
        toggle_nav.setAttribute('class', 'fa fa-times')
    } else {
        toggle_nav.setAttribute('class', 'fa fa-bars')
    }
}

links.forEach(link => {
    link.addEventListener('click', smoothScroll)
})

function smoothScroll(e) {
    e.preventDefault()
    let id = this.getAttribute("href")
    const offsetTop = document.querySelector(id).offsetTop
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });

    navbar_m_nav.classList.remove('active')
    toggle_nav.setAttribute('class', 'fa fa-bars')
}

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY
        let offset = section.offsetTop - 120
        let height = section.offsetHeight
    
        let idElement = section.getAttribute("id")
        if(top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove("active")
                document.querySelectorAll('a[href*='+ idElement +']').forEach(l => {
                    l.classList.add("active")
                })
            })
        }
    })
}

function Join() {
    window.location.href = 'https://chat.whatsapp.com/FFKraYJzzSq3gdjn7QPVtu'
}