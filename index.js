let counter = document.getElementById('counter')

let count = 0

function increment() {
    count = count + 1
    counter.textContent = count
}

function decrement() {
    count = count - 1
    counter.textContent = count
    if (count == 0 || count < 0) {
        counter.textContent = 0
    }

}

let saveEl = document.getElementById('save-el')


function save() {
    let previousEntry = count + " - "
    saveEl.textContent += ' ' + previousEntry
    console.log(count)
    count = 0
    counter.textContent = 0
}