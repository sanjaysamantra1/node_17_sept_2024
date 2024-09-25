function fourth() {
    console.trace()
}

function third() {
    fourth()
}

function second() {
    third()
}

function first() {
    second()
}

first();