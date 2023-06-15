
/*
    Выполенние функции с содержкой time

*/

function delay(ms = 1000, fn) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fn()
            resolve(1111)
        },ms)
    })
}