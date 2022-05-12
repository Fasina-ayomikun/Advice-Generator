const url = 'https://api.adviceslip.com/advice';

const idContainer = document.querySelector('.id')
const btn = document.querySelector('.display')
const advicontainer = document.querySelector('.advice')
const sectionContainer = document.querySelector('.section-container');


btn.addEventListener('click', ()=>{
    fetchAdvice()
    
})

const fetchAdvice = async()=>{
    try {
        advicontainer.innerHTML= `<p>Loading...</p>`
        const response = await fetch(url);
        const data = await response.json()
        const {id,advice} = data.slip;

        idContainer.textContent= `#${id}`;
        advicontainer.innerHTML = `<p class="advice">"${advice}"
        </p>`;
        
    } catch (error) {
        sectionContainer.innerHTML = `<p>Sorry, unable to fetch advice.Please, Try again later</p>`
    }
    
    
}
