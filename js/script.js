/* alert('Site in contruction, sorry for the inconvenience'); */
document.querySelector('.btn-1').addEventListener('click', function () {
    console.log('diste click');
    document.querySelector('.mas-1').classList.toggle('show');
})

document.querySelector('.btn-2').addEventListener('click', function () {
    console.log('diste click');
    document.querySelector('.mas-2').classList.toggle('show');
})

document.querySelector('.btn-3').addEventListener('click', function () {
    console.log('diste click');
    document.querySelector('.mas-3').classList.toggle('show');
})

document.querySelector('.btn-4').addEventListener('click', function () {
    console.log('diste click');
    document.querySelector('.mas-4').classList.toggle('show');
})

document.querySelector('.btn-5').addEventListener('click', function () {
    console.log('diste click');
    document.querySelector('.mas-5').classList.toggle('show');
})

document.querySelector('.btn-6').addEventListener('click', function () {
    console.log('diste click');
    document.querySelector('.mas-6').classList.toggle('show');
})


document.querySelector('.hamb').addEventListener('click', function () {
    document.querySelector('.butons').classList.toggle('active');
    document.querySelector('.hamb').classList.toggle('oculto');
})

document.querySelector('.hamb-x').addEventListener('click', function () {
    document.querySelector('.active').classList.toggle('remove');
    document.querySelector('.remove').classList.remove('active');
    document.querySelector('.oculto').classList.remove('oculto');
})

/* const span = document.querySelectorAll('.hamb .span-menu');
document.querySelector('.hamb').addEventListener('click', function() {
    span.forEach((child) => {
        child.classList.toggle('active');
    })
}) */
/* const menu = window.getComputedStyle(document.querySelector('.hamb > span', '::before')); */

const head = document.getElementById('head');
const text = document.getElementById('text-head');
const btn = document.querySelector('.net');

window.onscroll = function () {
    if (window.pageYOffset > 5) {
        head.style.backgroundColor = '#033d53fd';
        text.style.color = '#fff';
        btn.style.color = '#fff';

        const btnHead = document.querySelectorAll('.butons .link-rel');
        document.querySelector('.butons');
        btnHead.forEach((el) => {
            el.style.color = '#fff';
        })

        const menu = document.querySelectorAll('.hamb .span-menu');
        document.querySelector('.hamb');
            menu.forEach((child) => {
                child.style.backgroundColor = '#fff';
        })

    } else {
        head.style.backgroundColor = 'transparent';
        text.style.color = 'black';

        const btnHead = document.querySelectorAll('.butons .link-rel');
        document.querySelector('.butons');
        btnHead.forEach((el) => {
            el.style.color = 'initial';
        })
        
        const menu = document.querySelectorAll('.hamb .span-menu');
        document.querySelector('.hamb')
            menu.forEach((child) => {
                child.style.backgroundColor = '#000';
            })
            btn.style.color = '#fff';
    }
}