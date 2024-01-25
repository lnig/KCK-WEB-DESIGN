const inputs = document.querySelectorAll(".form__input")

function addFocus(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remFocus(){
    let parent = this.parentNode.parentNode
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

inputs.forEach(input=>{
    input.addEventListener("focus", addFocus)
    input.addEventListener("blur", remFocus)
})