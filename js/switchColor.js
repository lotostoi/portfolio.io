class myClass {
    constructor(chengEll) {
        this.parentClass = ".parent";
        this.allArr = [];
        this.breakPoint = 1020;
    }
    switchColor(chengEll) {
        let chengEllClass = "." + chengEll
        window.addEventListener('scroll', () => {
            let el = document.querySelector(chengEllClass)
            this._getArrEll().forEach(e => {
                if (window.pageYOffset > e.topScroll - 500 && window.pageYOffset < e.downScroll - 500) {
                    el.classList.add(`footer-${e.idClass}`)
                } else {
                    if (document.querySelector(`.footer-${e.idClass}`)) {
                        el.classList.remove(`footer-${e.idClass}`)
                    }
                }
            })
        })
    }

    switchAnimation(classElems) {

        let arr = document.querySelectorAll(`.${classElems}`)
        let arrObj = []
        arr.forEach(e => {
            arrObj.push({
                el: e,
                width: e.offsetWidth,
                height: e.offsetHeight,
                y: e.offsetTop,
                x: e.offsetLeft,
            })
        })

        arrObj.forEach((e, i) => {
            if (i === 0) {
                e.anim = `transform:translate3d(${arrObj[arrObj.length-1].x-e.x}px , 0, 0); transition: transform 1s; `
                e.animOff = `transform:translate3d(0 , 0, 0); transition: transform 1s`
            } else if (i === arrObj.length - 1) {
                e.anim = `transform:translate3d(0, ${(arrObj.length-1) * (e.height)+22}px , 0); transition: transform 1s;`
                e.animOff = `transform:translate3d(0, 0 , 0); transition: transform 1s`
            } else {
                e.anim = `transform:translate3d(${arrObj[arrObj.length-1].x-e.x}px,  ${10 + arrObj.length * e.height - (arrObj.length-i) * e.height + 26 - e.y }px , 0); transition: transform 1s; `
                e.animOff = ` transform:translate3d(0, 0 , 0); transition: transform 1s`
            }
        })

        window.addEventListener('scroll', () => {
            if (main.clientHeight - 5 < window.pageYOffset && main.clientWidth > this.breakPoint) {
                arrObj.forEach(e => {
                    e.el.style = e.anim
                })

            } else {
                arrObj.forEach(e => {
                    e.el.style = e.animOff
                })
            }

        })


    }
    _getArrEll() {
        let arr = document.querySelectorAll(this.parentClass)
        arr.forEach(e => {
            let obj = {
                el: e,
                idClass: e.classList[0],
                topScroll: e.offsetTop,
                downScroll: e.offsetTop + e.offsetHeight
            }
            this.allArr.push(obj)
        })
        return this.allArr

    }
}




new myClass().switchColor('footer')
new myClass().switchAnimation('anim')