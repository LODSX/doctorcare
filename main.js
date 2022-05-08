window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    }else{
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 400) {
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + (innerHeight / 2)

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetLine
    
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
} 

ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .cards,
    #about,
    #about header,
    #about .content
`);