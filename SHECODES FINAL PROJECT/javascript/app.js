function apply(){
        
    let name=prompt("what is your name?");
    if(name.length){
    alert("thank you "+ name +" we'll be in touch,meanwhile have alot of icecream!");
}
else
{
    alert('no name ,no french vanilla for you!')
}
}
let applyButton=document.querySelector("button");
applyButton.addEventListener("click",apply);