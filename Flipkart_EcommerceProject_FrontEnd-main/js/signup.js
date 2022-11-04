function validate(){

    var username=document.getElementById('username').value
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value
    var cpassword=document.getElementById('cpassword').value
    
    checkUsername(username)
    checkEmail(email)
    checkPassword(password)
    checkPasswordMatch(password,cpassword)
    if(username!=""&&email!=""&&(checkPassword(password)==true)&&checkPasswordMatch(password,cpassword)==true){
        loginUser(username,email,password,cpassword)
        console.log("Login Credentials Generated")
        setTimeout(()=>{
            window.location.href="./login.html"
        },1000)
    }
    else{
        console.log("Failed to create Login Credentials")
    }
    
}

function checkUsername(username){
    if(username.length>8){
        document.getElementById('username').classList.add("border","border-success")
        document.getElementById('username').classList.replace("border-danger","border-success")
        document.getElementById('username_error').innerText=""
    }
    else{
        document.getElementById('username').classList.add("border","border-danger") 
        document.getElementById('username_error').innerText=`Username must be of 8 characters`
    }
}
function checkEmail(email){
    if(email.length>8 && email.includes("@gmail.com")){
        document.getElementById('email').classList.add("border","border-success")
        document.getElementById('email').classList.replace("border-danger","border-success")
        document.getElementById('email_error').innerText="";
    }
    else{
        document.getElementById('email').classList.add("border","border-danger") 
        document.getElementById('email_error').innerText=`Email must contain @gmail.com`
    }
}
function checkPassword(password){
    if(password.length>8 && password.includes("@")){
        document.getElementById('password').classList.add("border","border-success")
        document.getElementById('password').classList.replace("border-danger","border-success")
        document.getElementById('password_error').innerText="";
        return true
    }
    else{
        document.getElementById('password').classList.add("border","border-danger") 
        document.getElementById('password_error').innerText=`Password must contain @`
        return false
    }
}

function checkPasswordMatch(password,cpassword){
    if(password===cpassword && password!="" &&  document.getElementById('password_error').innerText==""){
        document.getElementById('cpassword').classList.add("border","border-success")
        document.getElementById('cpassword').classList.replace("border-danger","border-success")
        document.getElementById('cpassword_error').innerText="";
        return true;
    }
    else{
        document.getElementById('cpassword').classList.add("border","border-danger") 
        document.getElementById('cpassword_error').innerText=`Password Not Matched`
        return false
    }
}

function loginUser(username,email,password,cpassword){
    console.log(username,email,password,cpassword)    
        createNewUsersData(username,email,password,cpassword)  

}
//create user data
async function createNewUsersData(username,email,password,cpassword){
    let url="https://6350df063e9fa1244e4f2704.mockapi.io/userdata"
    let newUser=
    {
     "username":username,
     "email":email,
     "password":password,
     "cpassword":cpassword
    }          

    let data=await fetch(url,{
        method:"POST",
        headers:{'Content-Type': "application/json"},
        body:JSON.stringify(newUser)
    })
    let res=await data.json();
    console.log(res)
}
