'use strict'

document.addEventListener('DOMContentLoaded', () => {
    
    const swiper = new Swiper ('.mySwiper', {
        slidesPerView: 3,
        loop: true, 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });

    let scroll = new SmoothScroll('a[href*="#"]');

    let number = document.querySelector('.questions-answer__number');
    const answerContainer = document.querySelector('.questions-answer__content');
    const inputArea = document.querySelector('[data-area]')
    const footageCalculate = document.querySelector('.footage-calculate');
    const footageBtn = document.querySelector('.footage-calculate__btn');
    const accordionItem = document.querySelectorAll('.item-accordion')
    let progressRect = document.querySelector('.progress__rect');
    let progressMask = document.querySelector('.progress__mask');
    const modal = document.querySelector('.modal');
    const btnConsalting = document.querySelectorAll('[data-name="btn-consulting"]');
    const btnModalClose = document.querySelector('.modal__close');
    
    let arrAnswer = [];

    answerContainer.addEventListener('click', (event) => {

        if(event.target.closest('.cleaning-questions__next')) {
            
            const cleaningQuestions = answerContainer.querySelector('.cleaning-questions')
                    cleaningQuestions.style.display = 'none'

            const anyoneQuestions = answerContainer.querySelector('.anyone-questions')        
                    anyoneQuestions.style.display = 'block'
            
            progressRect.style.width = '66.666%';
            progressMask.style.width = '66.666%';
            number.innerText++;     
            
            
        }

        if(event.target.closest('.anyone-questions__button--back')) {
            const cleaningQuestions = answerContainer.querySelector('.cleaning-questions')
            cleaningQuestions.style.display = 'flex';

            const anyoneQuestions = answerContainer.querySelector('.anyone-questions')        
            anyoneQuestions.style.display = 'none'

            progressRect.style.width = '33.333%';
            progressMask.style.width = '33.333%';
            number.innerText--
        }

        if(event.target.closest('.anyone-questions__button--next')) {
            const areaQuestions = answerContainer.querySelector('.area-questions')
                  areaQuestions.style.display = 'block';

            const anyoneQuestions = answerContainer.querySelector('.anyone-questions')        
            anyoneQuestions.style.display = 'none' 
            
            progressRect.style.width = '100%';
            progressMask.style.width = '100%';
            number.innerText++
        }

        if(event.target.closest('.area-questions__button--back')) {
            const areaQuestions = answerContainer.querySelector('.area-questions')
                  areaQuestions.style.display = 'none';

            const anyoneQuestions = answerContainer.querySelector('.anyone-questions')        
                  anyoneQuestions.style.display = 'block' 


                  progressRect.style.width = '66.666%';
                  progressMask.style.width = '66.666%';
                  number.innerText--;
        }

        if(event.target.closest('.area-questions__button--next')) {
            const answerCalculate = document.querySelector('.answer-calculate')
                  answerCalculate.style.display = 'none'

                  const calculateFinish = document.querySelector('.calculate__finish');
                        calculateFinish.style.display = 'block'
        }


    }); 

    function getValueInputArea () { 
        let valueInput = document.querySelector('[data-new-area]')
        let areaNewValue = document.querySelector('[data-new-value]');
        let valIn = document.querySelector('.val-in');
            
            areaNewValue.textContent = valueInput.value;
            valIn.value = valueInput.value;

            if(valueInput.value == '') {
                return areaNewValue.innerText = 'Введите свой метраж';
            }
            arrAnswer.push(valIn.value)
            
    }

    inputArea.addEventListener('click', () => {
        footageCalculate.classList.add('footage-calculate__active');

        if(footageCalculate.classList.contains('footage-calculate__active')) {
            const answerCalculate = document.querySelector('.answer-calculate')
                answerCalculate.style.pointerEvents = 'none'
        }
    });

    footageBtn.addEventListener('click', () => {

        footageCalculate.classList.remove('footage-calculate__active');
        const answerCalculate = document.querySelector('.answer-calculate')
                answerCalculate.style.pointerEvents = 'auto'
        getValueInputArea();


    })


  accordionItem.forEach(function(item) {
    item.addEventListener('click', function() {
        
        this.querySelector('.item-accordion__arrow').classList.toggle('upper-arrow')
        this.querySelector('.item-accordion__description').classList.toggle('item-accordion__description--active');

    })
  })




  btnConsalting.forEach(function(item) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('body').classList.add('overlay');    
        modal.classList.add('modal__active');

        if(e.target.closest('[data-button-option]')) {
           const header = document.querySelector('.header')
           header.scrollIntoView({behavior: "smooth"})
           
        }
      
    })
  })

  btnModalClose.addEventListener('click', (e) => {

    modal.classList.remove('modal__active');
    document.querySelector('body').classList.remove('overlay');
      
  })

  document.querySelector('body').addEventListener('click', (event) => {
        if(event.target.classList.contains('overlay')) {
            modal.classList.remove('modal__active');
            event.target.classList.remove('overlay')
        }
  })

  



});

