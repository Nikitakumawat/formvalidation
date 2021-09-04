function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML="";
    }
}
function seterror(id,error){
    //set errors inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function validateForm(){
    var returnval = true;
    clearErrors();
    //perform validation and if validationfails ,set the value of returnval to false
    var name = document.forms['myForm']['fname'].value;
    if(name.length < 5 ){
        seterror("name","*Length of name is too short!");
        returnval = false;
    }
    if(name.length == 0 ){
        seterror("name","*Length of name cannot be 0!");
        returnval = false;
    }
    var email = document.forms['myForm']['femail'].value;
    if(email.length > 15 ){
        seterror("email","*Email length is too long!");
        returnval = false;
    }
    var phone = document.forms['myForm']['fphone'].value;
    if(phone.length != 10 ){
        seterror("phone","*Phone number should be 10 digit number!");
        returnval = false;
    }
    var password = document.forms['myForm']['pass'].value;
    if(password.length < 6 ){
        seterror("pass","*Password should be atleast 6 characters long!");
        returnval = false;
    }
    var cpassword = document.forms['myForm']['cpass'].value;
    if(cpassword != password){
        seterror("cpass","*Password and Confirm Password should match!");
        returnval = false;
    }
    return returnval;

}