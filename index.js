let emailValid=document.getElementById("emailValid")
let emailInvalid=document.getElementById("emailInvalid")
let phoneValid=document.getElementById("phoneNumberValid")
let phoneInvalid=document.getElementById("phoneNumberInvalid")
let zipValid= document.getElementById("zipCodeValid")
let zipInvalid= document.getElementById("zipCodeInvalid")
let tNCValid= document.getElementById("tNCValid")
let tNCInvalid= document.getElementById("tNCInvalid")
let stateValid= document.getElementById("stateValid")
let stateInvalid= document.getElementById("stateInvalid")

let fieldNamesTouched = {
    firstName: false,
    lastName:false,
    phoneNumber:false,
    zip:false,
    email:false,
    state:false
}
function validate(){
let firstName=document.getElementById("firstName").value;
let lastName=document.getElementById("lastName").value;
let email=document.getElementById("email").value;
let phoneNumber=document.getElementById("phoneNumber").value;
let state=document.getElementById("state").value;
let zip=document.getElementById("zipCode").value;
let tNCCheckBox= document.getElementById("tNCCheckBox").checked;

if(fieldNamesTouched['firstName']){
if(firstName=== ''){
    document.getElementById("firstNameInvalid").style.display='block'
    document.getElementById("firstNameValid").style.display='none'   //remove previuos state so that error statement can display changed messege
} 
else{
    document.getElementById("firstNameValid").style.display='block'
    document.getElementById("firstNameInvalid").style.display='none'
}  
}
   // console.log(firstName, lastName, zip, state, email, phoneNum)
if(fieldNamesTouched['lastName']){
if(lastName === ''){
    document.getElementById("lastNameInvalid").style.display='block'
    document.getElementById("lastNameValid").style.display='none'   //remove previuos state so that error statement can display changed messege
} 
else{
    document.getElementById("lastNameValid").style.display='block'
    document.getElementById("lastNameInvalid").style.display='none'
}
}
if(fieldNamesTouched['email']){
if(email==='' || !email.includes('@') || email.startsWith('@') || !email.includes('.') || email.slice(email.lastIndexOf('.')).length < 3 ){   //for invalid email
   emailInvalid.style.display= 'block'
   emailValid.style.display= 'none'
}
else{
    emailValid.style.display= 'block'
    emailInvalid.style.display= 'none'
}
}
if(fieldNamesTouched['phoneNumber']){
if(phoneNumber === '' || phoneNumber.length !=10 || Number(phoneNumber[0])<6){
    phoneInvalid.style.display= 'block'
    phoneValid.style.display = 'none'
}
else{
    phoneValid.style.display= 'block'
    phoneInvalid.style.display= 'none'
}
}
if(fieldNamesTouched['zip']){
if(zip==='' || zip.length != 6){
zipInvalid.style.display= 'block'
zipValid.style.display= 'none'
}
else{
 zipValid.style.display= 'block'
 zipInvalid.style.display= 'none'
}
}
if(!tNCCheckBox){
    tNCInvalid.style.display = 'block'
}
else{
    tNCInvalid.style.display = 'none'
}
if(fieldNamesTouched['state']){
if(state===''){
    stateInvalid.style.display='block'
    stateValid.style.display='none'
}
else{
    stateValid.style.display='block'
    stateInvalid.style.display='none'
}
}
}

function setTouched(fieldName){
    fieldNamesTouched [fieldName]= true
    console.log(fieldNamesTouched)
    validate();
}