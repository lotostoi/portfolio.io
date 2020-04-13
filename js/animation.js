class addAnimation {
    constructor() {
        this.className = 'animate';
        this.el = document.querySelectorAll(`.${this.className}`);
        this.arrParentOffsetTop = [];
        this.arrElAnim = []
    }
    _addAnim(el, anim) {
        let cont = this
        el.classList.add(anim)
    }
    _removeAnim(el, anim) {
        let cont = this
        el.classList.remove(anim)
    }
    init() {
        this.el.forEach(e => {
            let obj = {}
            obj.el = e
            obj.ifTurndOnAnim = e.offsetTop - // main.clientHeight
                this.arrElAnim.push(obj)
        })
        let cont = this
        window.addEventListener('scroll', () => {
            cont.arrElAnim.forEach(e => {
                //  console.log(e[3].ifTurndOnAnim + "el")
                // console.log(window.pageYOffset + "scroll")
                if (e.ifTurndOnAnim < window.pageYOffset) {
                    console.log('on')
                    e.el.classList.add('animated')
                }
            })
        })
        window.onload = () => {
            cont.arrElAnim.forEach(e => {
                console.log(e.el)
                if (e.el.offsetTop < main.clientHeight) {
                    e.el.classList.add('animated')
                }
            })
        }
    }
}

let anim = new addAnimation()
anim.init();