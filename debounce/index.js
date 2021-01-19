
window.onload = () => {
    const wirteInDom = document.getElementById('writein')
    const logDom = document.getElementById('log')
    // wirteInDom.addEventListener('input', (e) => {
    //     log(logDom, wirteInDom)
    // })
    wirteInDom.addEventListener('input', (e) => {
        debounce(log, 1000)(logDom, wirteInDom)
    })
}

function log(logDom, writeInDom) {
    logDom.innerText = writeInDom.value
}

/**
 * 防抖函数
 * @param fn
 * @param delay
 */
function debounce(fn, delay) {
    let timer = null
    return function() {
        const args = arguments // 为什么这里的args是logDom、writeInDom而非log、500？因为执行到这个定时函数后，传递进来的就是logDom和writeInDom
        const context = this
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }
}
