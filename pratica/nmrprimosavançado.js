let a1 = [1, 2, 3, 4, 5 , 6, 7, 8, 9,10]

let primo = e =>{
    for(let i = 2;  i <= e;i++){
        if (e % i== 0) return false;
        return true;
    }
}

document.body.innerHTML = Array.from({length:100}, (e,i) => i ).filter((e) => primo(e)).join()