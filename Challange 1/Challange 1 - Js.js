 // variables
 var Signup = document.querySelector(".Sign");
 var SignIn = document.querySelector(".SignIn");

 var titlebefore = document.querySelector("#title-before");
 var capbefore = document.querySelector("#cap-before");

 var titleafter = document.querySelector("#title-after");
 var capafter = document.querySelector("#cap-after");

 var Sign_in = document.querySelector(".sign-in");
 var sign_up = document.querySelector(".sign-up");

 //  onclick function
 Signup.onclick = function () {

     titlebefore.classList.toggle('close');
     capbefore.classList.toggle('close');

     titleafter.classList.toggle('show');
     capafter.classList.toggle('show');


     Sign_in.classList.toggle('close');
     sign_up.classList.toggle('show');
     
     Signup.style.display = 'none';
     SignIn.style.display = 'block';

 }

 // onclick function
 SignIn.onclick = function () {

     titlebefore.classList.toggle('close');
     capbefore.classList.toggle('close');

     titleafter.classList.toggle('show');
     capafter.classList.toggle('show');


     Sign_in.classList.toggle('close');
     sign_up.classList.toggle('show');

     Signup.style.display = 'block';
     SignIn.style.display = 'none';

 }