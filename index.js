const btn = document.querySelector('.app__btn');

const change = () => {
    min = Math.ceil(1);
    max = Math.floor(9);
    const rand = Math.floor(Math.random() * (max - min)) + min;
    console.log(rand);

    switch(rand) {
        case 1:     
            btn.classList.add("app__btn--show");
            btn.innerHTML = 'Tak!';
            break;
        case 2:
            btn.classList.add("app__btn--show");
            btn.innerHTML = 'Nie!';
            break;
        case 3: 
            btn.classList.add("app__btn--show");
            btn.innerHTML = 'Nie wiem...';
            break;
        case 4: 
            btn.classList.add("app__btn--show");
            btn.innerHTML = 'Bardzo możliwe...';
            break;
        case 5: 
            btn.classList.add("app__btn--show");
            btn.innerHTML = 'Nie licz na to...';
            break;
        case 6:
            btn.classList.add("app__btn--show");
            btn.innerHTML = 'Zadaj mi jakieś ciekawsze pytanie...';
            break;
        case 7: 
            btn.classList.add("app__btn--show");
            btn.innerHTML = 'Chciałbyś :)';
            break;
        case 8: 
btn.classList.add("app__btn--show");
            btn.innerHTML = 'Któż to wie...';
            break;
    }
}

const reset = () => {
    btn.innerHTML = "Twoja odpowiedź to...";
    btn.classList.remove("app__btn--show");
}

btn.addEventListener('click', change);
btn.addEventListener('mouseover', reset);

