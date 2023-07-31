let logoutbtn=document.getElementById('logout')
let user=document.getElementById('user')
var homeArr=[]
if(localStorage.getItem('data2')!=null){
    homeArr=JSON.parse(localStorage.getItem('data2'))
}
logoutbtn.addEventListener('click',logout)
function logout(){
    window.open('index.html','_top')  
}
user.innerHTML='Welcome : '+ homeArr[0].name