
function loadAnimationStart(){
    const loader = document.querySelector(".lds-spinner")
    loader.style.display = "initial"
}

function loadAnimationEnd(){
    const loader = document.querySelector(".lds-spinner")
    loader.style.display = "none"
}

export {loadAnimationEnd, loadAnimationStart}