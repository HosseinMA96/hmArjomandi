let current = 0
let selected = '#2b3258'
let unselected = '#5d6ec7'
let hover = '#445194'


let changeTab = () => {
    Array.from(document.querySelectorAll("#scene-body section")).forEach((el, idx) => {
        if (idx === current) {
            el.style.display = 'block'
        } else {
            el.style.display = 'none'
        }
    })
}

changeTab()
document.querySelectorAll("#scene-tabbar .list-item")[0].style.backgroundColor = selected

Array.from(document.querySelectorAll("#scene-tabbar .list-item")).forEach((el, idx) => {
    el.addEventListener('click', () => {
        Array.from(document.querySelectorAll("#scene-tabbar .list-item")).forEach((e, idx) => {
            if (e === el) {
                e.style.backgroundColor = selected
            } else {
                e.style.backgroundColor = unselected
            }
        })
        current = idx
        changeTab()
    })
    el.addEventListener('mouseover', () => {
        if (current !== idx)
            el.style.backgroundColor = hover
    })
    el.addEventListener('mouseout', () => {
        if (current !== idx)
            el.style.backgroundColor = unselected
    })
})

let xhttp = new XMLHttpRequest();
xhttp.open("POST", "https://serene-basin-11201.herokuapp.com/", true);
xhttp.send();
