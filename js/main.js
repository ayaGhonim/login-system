let uemail=document.getElementById('uemail')
let uemail2=document.getElementById('uemail2')
let uname=document.getElementById('uname')
let upassword=document.getElementById('upassword')
let upassword2=document.getElementById('upassword2')
let btnLogin=document.getElementById('btnLogin')
let btnSignup=document.getElementById('btnSignup')
let linkSignin=document.getElementById('linkSignin')
let linkSignup=document.getElementById('linkSignup')
let signupForm=document.getElementById('signupForm')
let signinForm=document.getElementById('signinForm')
let message=document.getElementById('message')
let message1=document.getElementById('message1')
var arr=[]
var homeArr=[]

if(localStorage.getItem('data')!=null){
    arr=JSON.parse(localStorage.getItem('data'))
}
/////////////////////////////////////////////////////////links
linkSignup.addEventListener('click',function () {
    signupForm.classList.replace('d-none','d-flex')
   signinForm.classList.replace('d-flex','d-none')
})
linkSignin.addEventListener('click',function () {
    signinForm.classList.replace('d-none','d-flex')
   signupForm.classList.replace('d-flex','d-none')
})
/////////////////////////////////////////////////////validtion
function checkName(str1){
    var nameRegex=/^[a-zA-Z]{3,}/
   return nameRegex.test(str1)
}
function checkEmail(str2){
    var emailRegex=/^[a-zA-Z0-9_]{3,}@(gmail|yahoo).com$/
    return emailRegex.test(str2)
}
function checkPass(str3){
    var passRegex=/^[a-zA-Z0-9#@]{8,}/  
   return passRegex.test(str3)
}

///////////////////////////////////////////////////////login btn
btnLogin.addEventListener('click',getInfo)
function getInfo(){
    if(uemail==""||upassword==""){
        message1.innerText="All Input Is Required"}
        else{
            for(var i=0;i<arr.length;i++){
                if(uemail.value==arr[i].email&&upassword.value==arr[i].password){
                    homeArr.push(arr[i])
                    localStorage.setItem('data2',JSON.stringify(homeArr))
                    window.open('welcome.html','_top')
                }else{
                    message1.innerHTML="Email or password not exist"
                }
            }
        }
    }
/////////////////////////////////////////////////////////////signup btn
btnSignup.addEventListener('click',addInfo)
 function addInfo(){
    var userInfo ={
        name:uname.value ,
        email:uemail2.value ,
        password:upassword2.value
    }
    if(uname.value==""||uemail2.value==""||upassword2.value==""){
        message.innerText="All Input Is Required"}
     else if(checkName(uname.value)&&checkEmail(uemail2.value)&&checkPass(upassword2.value)){
            arr.push(userInfo)
            localStorage.setItem('data',JSON.stringify(arr))
            message.innerHTML="sucess"
        }
        else{
            message.innerHTML="Invalid"
        }
    }




