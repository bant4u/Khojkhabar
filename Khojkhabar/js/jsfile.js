/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



function overlay()
{
    //var x = document.getElementById('signUp');
    //
    xyz = document.getElementById("signUp");
    xyz.style.display='block';
    var mainform=document.getElementById("wrapper");
    //alert(xyz.style.visibility);
    mainform.style.visibility = (xyz.style.visibility === "visible") ? "hidden" : "visible";
    mainform.style.zIndex=-1;
    mainform.style.background='#000000';
    mainform.style.opacity=0.1;
    //alert('x');
}


function loginValidate() {
    var uname = document.getElementById('logName').value;
    var uaddr = document.getElementById('logAddr').value;
    var s = "";
    if (uname === "" && uaddr === "") {
        s += "username and password empty";
        flag = false;
    }
    else if (uname === "") {
        s += "username empty";
        flag = false;
    }

    else if (uaddr === "") {
        s += "password empty";
    }
    else {
        document.getElementById('ErrMsg').innerHTML = "";
    }
    document.getElementById('ErrMsg').innerHTML = s;
    return flag;

}



function regValidate() {

    var name = document.getElementById('regName').value;
    
    var address = document.getElementById('regAddr').value;
    var email = document.getElementById('regEmail').value;
    var reg = new RegExp("^[0-9a-zA-Z]+@[0-9a-zA-Z]+[\.]{1}[0-9a-zA-Z]+[\.]?[0-9a-zA-Z]+$");

    flag = true;
    if (name === "") {

        document.getElementById('nameErMsg').innerHTML = "Please Enter Name";
        flag = false;
    }
    else {
        document.getElementById('nameErMsg').innerHTML = "";
    }
    if (address === "") {
        document.getElementById('addrErMsg').innerHTML = "Please Enter Address";
        flag = false;
    }
    else {
        document.getElementById('addrErMsg').innerHTML = "";
    }
    if (email === "") {
        document.getElementById('emailErMsg').innerHTML = "Please Enter Email";
        flag = false;
    }
    else if (!reg.test(email)) {
        document.getElementById('emailErMsg').innerHTML = "Invalid Email Address";
        flag = false;
    }
    else {
        document.getElementById('emailErMsg').innerHTML = "";
    }
    return flag;
}

function regClear() {
    document.getElementById('nameErrMsg').innerHTML = "";
    document.getElementById('addrErrMsg').innerHTML = "";
    document.getElementById('emailErrMsg').innerHTML = "";
}
function loadinitial() {
    document.getElementById('horoscope').selectedIndex = 0;
    document.getElementById('firstNews').style.display = 'none';
    document.getElementById('secondNews').style.display = 'none';
    document.getElementById('thirdNews').style.display = 'none';
    document.getElementById('fourthNews').style.display = 'none';
document.getElementById('signUp').style.display = 'none';
}


function dispFirst() {
   // var s = document.getElementById('first').innerHTML;
    var s = document.getElementById('firstNews').innerHTML;
//    document.getElementById('dispDiv').innerHTML = s;
    alert(s);
}
function dispSecond() {

    //var s = document.getElementById('second').innerHTML;
    var s = document.getElementById('secondNews').innerHTML;
    //document.getElementById('dispDiv').innerHTML = s;
    alert(s);
}
function dispThird() {
    //var s = document.getElementById('third').innerHTML;
    var s = document.getElementById('thirdNews').innerHTML;
    //document.getElementById('dispDiv').innerHTML = s;
    alert(s);
}

function dispFourth() {
    //var s = document.getElementById('first').innerHTML;
    var s = document.getElementById('fourthNews').innerHTML;
//    document.getElementById('dispDiv').innerHTML = s;
    alert(s);
}
function selHoroscope() {
    var e = document.getElementById('horoscope');
    var f = e.options[e.selectedIndex].value;
    var horo = document.getElementById('horo');
    switch (f) {
        case "ari": horo.innerHTML ="Get Together with friend";
               break;
            case "tau":horo.innerHTML ="Think Cautiously before making decision";
            break;
            case "gem":horo.innerHTML ="Excessive stress";
            break;
            case "can":horo.innerHTML ="Health requires some attention";
            break;
            case "leo":horo.innerHTML ="May hear unpleasent news";
            break;
            case "vir":horo.innerHTML ="Income during the day";
            break;
            case "lib":horo.innerHTML ="Party or other recreation";
            break;
            case "sco":horo.innerHTML ="Expenditure will rise";
            break;
            case "sag":horo.innerHTML ="Progess in your sector";
            break;
            case "cap":horo.innerHTML ="You are Lucky";
            break;
            case "aqu":horo.innerHTML ="You need to work hard";
            break;
            case "pis":horo.innerHTML ="Anxiety";
            break;
            
            default: alert("please select in range");
       
    }
}
