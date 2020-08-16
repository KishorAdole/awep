function inputValue(btn){
 let input=document.querySelector(".username").value;
 if(input.length<=0)
 {
     alert("Enter Username");
 }

let pw=document.querySelector(".password").value;
 if(pw.length<=0 && pw.length<=3)
 {
     alert("Password is weak");
 }

 let em=document.querySelector(".password").value;
 if(em.length<=0 && em.length>=10)
 {
     alert("Enter Valid email");
 }

}