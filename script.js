const numbers = document.querySelectorAll('.number')
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let activeNumber = 1;

next.addEventListener('click', () => {
    activeNumber++

    if (activeNumber > numbers.length) {
        activeNumber = numbers.length
    }

    loading()
})