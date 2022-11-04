
function login(){
    var username=document.getElementById('username').value
    var password=document.getElementById('password').value
    console.log(username,password)

    if(username!="" && password!=""){
        let url="https://6350df063e9fa1244e4f2704.mockapi.io/userdata"
    // Read data=>GET 
    async function getUsersData(){
        try{
            let data=await fetch(url)
            let res=await data.json()
            console.log(res)
            console.table(res)

            var loginuser=res.filter((element)=>element.username==username && element.password==password).map((element)=>element.id)

            var loginuser=res.filter((element)=>element.username==username && element.password==password).map((element)=>element.id)

            var loginuser=res.filter((element)=>element.username==username && element.password==password).map((element)=>{
                window.location.href = "./index.html"
            })

            console.log(loginuser)

        }
        catch(err){
            console.log(err)
        }
    }
    getUsersData()
    }

    


}