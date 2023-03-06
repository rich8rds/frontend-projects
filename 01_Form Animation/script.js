
const animatedForm = () => {
    const arrowsDown = document.querySelectorAll('.fa-arrow-down')

    arrowsDown.forEach(arrow => {
        arrow.addEventListener('click', ()=> {
            const input = arrow.previousElementSibling  //The textfield
            const parent = arrow.parentElement  // The div html element
            const nextForm = parent.nextElementSibling // The next div html element

            if(input.type === 'text' && validateUserInput(input)) {
                nextSlide(parent, nextForm)
            }
            else if(input.type === 'email' && validateEmail(input)) {
                nextSlide(parent, nextForm)
            }
            else if(input.type === 'password' && validateUserInput(input)) {
                nextSlide(parent, nextForm)
            }
            else {
                parent.style.animation = "toggle-shake 0.5s ease"
            }
              //Get rid of animation
              parent.addEventListener('animationend', ()=> {
                parent.style.animation = ''
            })
        })
    })
}

const nextSlide = (parent, nextForm) => {
    parent.classList.add('inactive')
    parent.classList.remove('active')
    nextForm.classList.add('active')
}

const validateUserInput = input => {
    if(input.value.length < 5) {
        error('#bd5757')
        return false
    }
    error('#57bd82')
    return true
}

const validateEmail = email => {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(validation.test(email.value)){
        error('#57bd82 ')
        return true
    }else  error('#bd5757')
}

const error = color => {
    document.body.style.backgroundColor = color
}
animatedForm()