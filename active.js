var navbar = document.getElementsByClassName("navbar");
var button = document.getElementsByClassName("button");

for(var i=0;i<button.length;i++){
    button[i].addEventListener("click",function(){
        var curr = document.getElementsByClassName("active");
        curr[0].className = curr[0].className.replace(" active", "");
        this.className += " active";
    })
}