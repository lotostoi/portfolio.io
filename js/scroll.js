let arrLinks = document.querySelectorAll('.scroll')

arrLinks.forEach(el => {
        el.addEventListener('click', (evt) => {
            evt.preventDefault();
            if (evt.target.hash && (evt.target.className == "scroll" || evt.target.className == "scroll anim_vert")) {
                console.log(evt.target.hash)
                document.querySelector(evt.target.hash).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        })
    }

)

let heightW = window.innerHeight + 1
let arrPages = document.querySelectorAll('.parent')

arrPages.forEach(e => {
    if (e.offsetHeight < heightW) {
        e.style.minHeight = heightW + 'px'
    }
})

let on = document.querySelector('.fa-bars')
let off = document.querySelector('.fa-times')

if (document.querySelector('.menu__ofOn')) {

    on.addEventListener('click', (e) => {
        on.style.opacity = '0'
        off.style.opacity = '1'
        on.style.visibility = 'hidden'
        off.style.visibility = 'visible'
        document.querySelector('.menu__ul').classList.add('menu__ul-active')
    })
    off.addEventListener('click', (e) => {
        on.style.opacity = '1'
        off.style.opacity = '0'
        off.style.visibility = 'hidden'
        on.style.visibility = 'visible'
        document.querySelector('.menu__ul').classList.remove('menu__ul-active')
    })


}