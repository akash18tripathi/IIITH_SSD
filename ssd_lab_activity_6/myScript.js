function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) { 
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");
    ev.getElementById(ev.target.id).innerHTML = data;
}

function matchPassword() {  
    var pwd = document.getElementById("pwd").value;  
    var cpwd = document.getElementById("cpwd").value;  
    if(pwd != cpwd)  
    {  
        document.getElementById("msg").innerHTML= "Passwords did not match";
    } else {  
        document.getElementById("msg").innerHTML= "Password matching properly";
    }  
}  
var tog=0;
function f(event){
    if(tog==0){
        if (event.ctrlKey && event.which ==77) {
            document.body.style.backgroundColor="black";
            document.body.style.color="green";
            tog=1;
        }
    }else{
        if (event.ctrlKey && event.which ==77) {
            document.body.style.backgroundColor="white";
            document.body.style.color="black";
            tog=0;
        }
    }
    
    
}

function show_alert() {
    var m = document.getElementById("manname").value;
    var gemail = document.getElementById("gemail").value;
    var uname = document.getElementById("uname").value;
    var lead = document.getElementById("member").value;
    var s = "Name : "+m +"\n"+"Email : "+gemail +"\n"+"Username : "+uname +"\n"+"Team Lead : "+lead +"\n";
    alert(s);
}

