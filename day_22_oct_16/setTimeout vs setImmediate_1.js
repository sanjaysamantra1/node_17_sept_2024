setTimeout(console.log, 0, 'SetTImeout...')
setImmediate(console.log, 'setImmediate...')

// when setTimeout(0) and setImmediate() is used not inside i/o cycle, the order is non-determenestic