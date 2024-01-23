let body = document.querySelector(`body`)
let backToTop = document.querySelector(`.backToTop`);

const scrollprogress = (event) => {
    
    
    let bodyHeight = body.clientHeight - window.innerHeight;
    let scrollTop = Math.round(window.scrollY);
    let percentage = Math.round((100 / bodyHeight) * scrollTop);

    backToTop.style.backgroundImage = `conic-gradient(dodgerblue 0% ${percentage}%, white 0% ${percentage}%)`;


}

window .addEventListener(`scroll`, scrollprogress);


backToTop.addEventListener(`click`, () =>{
    scroll({
        top: 0,
        behavior:`smooth`
    })
})


// *CUNTER

let counters = document.querySelectorAll(`.counter`)

counters.forEach(counter =>{
    let ending = counter.dataset.ending;
    let count = 0;
    let duration =10
    let counting = setInterval(()=>{
        count++;
        counter.innerHTML = count

if(count >= ending){
    clearInterval(counting);
}

    }, duration)
})