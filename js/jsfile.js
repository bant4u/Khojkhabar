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
function loadinitial(){
document.getElementById('horoscope').selectedIndex=0;


}
         
 function selHoroscope(){



            
         var e = document.getElementById('horoscope');
         var f = e.options[e.selectedIndex].value;
      var horo=document.getElementById('horo');
       switch(f){
           case "ari": horo.innerHTML ="your horoscope is aries";
               break;
            case "tau":horo.innerHTML ="your horoscope is taurus";
            break;
            case "gem":horo.innerHTML ="your horoscope is gemini";
            break;
            case "can":horo.innerHTML ="your horoscope is cancer";
            break;
            case "leo":horo.innerHTML ="your horoscope is leo";
            break;
            case "vir":horo.innerHTML ="your horoscope is virgo";
            break;
            case "lib":horo.innerHTML ="your horoscope is libra";
            break;
            case "sco":horo.innerHTML ="your horoscope is scorpio";
            break;
            case "sag":horo.innerHTML ="your horoscope is sagitarrius";
            break;
            case "cap":horo.innerHTML ="your horoscope is capricon";
            break;
            case "aqu":horo.innerHTML ="your horoscope is aquarius";
            break;
            case "pis":horo.innerHTML ="your horoscope is pisces";
            break;
            
            default: alert("please select in range");
       }
            }
