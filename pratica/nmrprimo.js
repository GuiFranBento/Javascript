let primo = numero =>{
    for(let i = 2; i * i <= numero;i++){
        if ((numero % i) == 0) return false;
        return true;
    }

}



for(let i = 1; i <= 100 ; i++){
    if(primo(i)) {
        document.body.innerHTML += i + ",";
    }
}

document.body.innerHTML = Array.from( {length:100}, (e,i) => i+1).filter (e => primo(e));