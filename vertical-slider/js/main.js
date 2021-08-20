const container = document.querySelector('.container')

const rightSlide = document.querySelector('.right-slide')

const leftSlide = document.querySelector('.left-slide')

const up = document.querySelector('.up')

const slidesLength = rightSlide.querySelectorAll('div').length

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`

up.addEventListener('click', ()=> changeSlide('up'))

down.addEventListener('click', ()=> changeSlide('down'))

let activeSlideIndex = 0

const height = container.clientHeight

function changeSlide (a) {
    console.log(height)
if (a === 'up') {
    activeSlideIndex++
    if(activeSlideIndex === slidesLength){
     activeSlideIndex = 0   
    }
}
if (a === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
        activeSlideIndex = slidesLength - 1
    }
}
rightSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
leftSlide.style.transform = `translateY(${activeSlideIndex * height}px)`
}

function scroll(event) {
    event.preventDefault();
    if (event.deltaY < 0) {
        activeSlideIndex++
      if(activeSlideIndex === slidesLength){
        activeSlideIndex = 0   
      }
    } else if (event.deltaY > 0)
       activeSlideIndex--
      if (activeSlideIndex < 0) {
          activeSlideIndex = slidesLength - 1
    }
rightSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
leftSlide.style.transform = `translateY(${activeSlideIndex * height}px)`
}

document.onwheel = scroll

