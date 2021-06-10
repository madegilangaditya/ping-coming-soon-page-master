document.querySelector('.notify-form').addEventListener('submit', validateForm);

function validateForm(e){
    const email = document.querySelector('.email');
    const errMessage = document.querySelector('.email-control');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
 
    e.preventDefault();

    if(email.value === ''){
        errMessage.classList.add('error-active');
        email.classList.add('error');
        errMessage.textContent= 'Whoops! It looks like you forgot to add your email';
    } else if(!re.test(email.value)){
        errMessage.classList.add('error-active');
        email.classList.add('error');
        email.value = "email@example/com";
        errMessage.textContent = 'Please provide a email address';
    }else{
        errMessage.classList.remove('error-active');
        email.classList.remove('error');
    }
    
}
