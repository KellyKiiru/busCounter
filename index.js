let counter = document.getElementById('counter')

let count = 0

function increment() {
    count = count + 1
    counter.innerText = count
}

function decrement() {
    count = count - 1
    counter.innerText = count
    if (count == 0 || count < 0) {
        counter.innerText = 0
    }

}

function save() {
    console.log(count)
}