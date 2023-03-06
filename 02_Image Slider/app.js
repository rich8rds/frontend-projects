const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')

//Buttons
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

//Counter
let counter = 1
const size = carouselImages[0].clientWidth

carouselSlide.style.transform = `translate(${(-size * counter) }px )`

nextBtn.addEventListener('click', () => {
    const size = carouselImages[0].clientWidth
    if(counter >= carouselImages.length - 1) return 
    carouselSlide.style.transition = `transform 0.4s ease-in-out`
    counter++
    carouselSlide.style.transform = `translateX(${(-size * counter) }px )`
})

prevBtn.addEventListener('click', () => {
    const size = carouselImages[0].clientWidth
    if(counter <= 0) return 
      carouselSlide.style.transition = `transform 0.4s ease-in-out`
    counter--
    carouselSlide.style.transform = `translateX(${(-size * counter) }px )`
})

carouselSlide.addEventListener('focus', () => {
    console.log(`Window is in focus`)
    // for(;;){
        // setTimeout( () =>  {
            const size = carouselImages[0].clientWidth
            if(counter >= carouselImages.length - 1) return 
            carouselSlide.style.transition = `transform 0.4s ease-in-out`
            counter++
            carouselSlide.style.transform = `translateX(${(-size * counter) }px )`
        // }, 1000);
    // }
})



carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none'
        counter = carouselImages.length - 2
        carouselSlide.style.transform = `translateX(${(-size * counter) }px )`
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none'
        counter = carouselImages.length - counter
        carouselSlide.style.transform = `translateX(${(-size * counter) }px )`
    }
})
