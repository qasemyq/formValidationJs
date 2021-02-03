
/* prevent page from submiting

// be inja rabti nadare vali in prevent mikone az submit 

form.addEventListener('submit', function(e){
        e.preventDefault()
})
*/



function validate(){
    let name = document.gg_form.fullname;
    /* console.log(document.gg_form.fullname.value); */
    let email = document.gg_form.email;
    let mobile = document.gg_form.mobile;
    let password = document.gg_form.password;
    let select = document.gg_form.select;
    let textarea = document.gg_form.textarea;


    if(name.value.length <= 0){
        alert('Name is required');
        name.focus();
        name.value = ''
        return false
    }
    if(email.value.length <= 0){
        alert('Email is required');
        email.focus();
        return false
    }
    if(mobile.value.length <= 0){
        alert('Mobile is required');
        mobile.focus();
        return false
    }
    if(select.value == 'Select an opation'){
        alert('Select education');
        select.focus();

        return false
    }
    if(textarea.value.length <= 0){
        alert('Message is required');
        textarea.focus();
        return false
    }
    if(password.value.length <= 0){
        alert('Password is required');
        password.focus();
        return false
    }
    return false
}








