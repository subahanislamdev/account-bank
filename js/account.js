// user email part
document.getElementById('btn-submit').addEventListener('click',function(){
    var useremail = document.getElementById('email-field')
    var email = useremail.value
    useremail.value =''
// user password part
    var userpassword = document.getElementById('password-field')
    var password = userpassword.value 
    userpassword.value =''
    // comparism of mail and password
    if(email == 'subahan@gmail.com' && password == 'subahan'){
      window.location.href = 'bank.html';
    }
    else{
        alert('You have type rong email or password')
    }
})