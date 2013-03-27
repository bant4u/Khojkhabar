/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function loginValidate(){
   
}
function regValidate(){
    
    var name = document.getElementById('regName').value;
    var address = document.getElementById('regAddr').value;
    var email = document.getElementById('regEmail').value;
   var reg = new RegExp("^[0-9a-zA-Z]+@[0-9a-zA-Z]+[\.]{1}[0-9a-zA-Z]+[\.]?[0-9a-zA-Z]+$"); 
    flag=true;
    if(name===""){
        
        document.getElementById('nameErrMsg').innerHTML="Please Enter Name";
        flag=false;
    }
    else{
        document.getElementById('nameErrMsg').innerHTML="";
    }
    if(address===""){
        document.getElementById('addrErrMsg').innerHTML="Please Enter Address";
        flag=false;
    }
    else{
        document.getElementById('addrErrMsg').innerHTML="";
    }
    if(email===""){
        document.getElementById('emailErrMsg').innerHTML="Please Enter Email";
        flag=false;
    }
    else if(!reg.test(email)){
        document.getElementById('emailErrMsg').innerHTML="Invalid Email Address";
        flag=false;
    }
    else{
        document.getElementById('emailErrMsg').innerHTML="";
    }
    return flag;
}
function regClear(){
        document.getElementById('nameErrMsg').innerHTML="";
          document.getElementById('addrErrMsg').innerHTML="";
           document.getElementById('emailErrMsg').innerHTML="";
}