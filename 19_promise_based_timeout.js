function timeOut(ms) {
    return new Promise(resolve => setTimeout(() => { resolve(ms) }, ms))
}

timeOut(3000).then((value) => { console.log(`Function resolved after ${value} miliseconds`) })