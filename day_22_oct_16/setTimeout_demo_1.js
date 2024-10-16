console.time('loop')
for (let i = 1; i <= 90000; i++) {
    console.log('Hiiiii ', i)
}
console.timeEnd('loop')

setTimeout(console.log, 2000, 'I am SetTimeout');