const hourHand = document.querySelector('.hourHand')
const minuteHand = document.querySelector('.minuteHand')
const secondHand = document.querySelector('.secondHand')

const clockFace = document.querySelector('.face')
const clockHands = document.querySelectorAll('.hand')

const clockDisplay = () => {
    const date = new Date()
    const hour = date.getHours() % 12
    const minute = date.getMinutes()
    const second = date.getSeconds()

    let  hrDeg = hour * 30
    let minDeg = minute * 6
    let secDeg = second * 6

    hourHand.style.transform = (`rotate(${hrDeg}deg`)
    minuteHand.style.transform = (`rotate(${minDeg}deg`)
    secondHand.style.transform = (`rotate(${secDeg}deg`)
    
    setTimeout(clockDisplay, 1000)
}

const setSize = (value) => {
    clockFace.style.width = `${value}px`

    clockHands.forEach(hand => {
        hand.style.width = `${value}px`

    })
}

clockDisplay()
setSize(300)
