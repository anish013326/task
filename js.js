var text =document.querySelector(".anish")
var text04 =document.querySelector(".anish04")


text.addEventListener("mouseover",function(){
    
    text.innerHTML="A heartfelt welcome to you";
    text.style.color = '#723D7B';

})
text.addEventListener("mouseleave",function(){
    text.innerHTML="ТЕРРИТОРИЯ КРАСИВЫХ ЛЮДЕЙ "
})

text04.addEventListener("mouseover",function(){
    
    
    text04.style.backgroundColor = '#3A3B3C';
    text04.style.padding= '7px 25px';
   text04.style.borderRadius= '20px';
   text04.style.color="white"
   text04.innerHTML="ANISH"

})



