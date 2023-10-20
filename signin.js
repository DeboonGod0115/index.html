function clicksubmit(){
    // let biodata=JSON.parse(localStorage.getItem("biodata")) || []; 
 const Name=document.getElementById("derf").value
 console.log(Name)  

  const email=document.getElementById("mail").value
  console.log(email)

const password=document.getElementById("word").value
console.log(password)

const comfirm=document.getElementById("comfirm").value
if (password!==comfirm){ 
  console.log("check")
  document.getElementById("errormsg").innerHTML="password not match"
    return
} 
if(password.length<8){
    console.log("passwordlength")
    document.getElementById("errormsg").innerHTML="password less than 8 character"
    return
}

const occupation=document.getElementById("occ").value
console.log(occupation)

const status=document.getElementById("status").value
console.log(status)

const gender=document.getElementsByName("gender")
 let radiovalue
 for (let i =0; i < gender,length; i++) {
    if (gender[i].check){
         radiovalue=gender[i].value
    }
}
 console.log(radiovalue)
}




function comfirmfunction(){
    const password=document.getElementById("word").value
    const comfirm=document.getElementById("comfirm").value
if(password===comfirm){
    document.getElementById("errormsg").innerHTML ="password match"
}
else(
    document.getElementById("errormsg").innerHTML ="password not match"
)
}

function validateEmail(){
    const mail = document.getElementById("mail").value
    if (mail.includes("@")){
        document.getElementById("resultmsg").innerHTML = "Email is valid";
    }
    else{

        document.getElementById("resultmsg").innerHTML = "Email is invalid";
    }
}