var array = []
var bool = true;
var top_record =100;
document.cookie= `top_record= ${top_record}`;
function choose(num){

    if(bool ==true)
    {
        var obj = document.getElementById(num);
        switch(num){
        case 1:
            var photo =document.getElementById('pic1');
            if(photo.src==""){
                photo.src = 'x.png' ;
                photo.style="width: 200px; height: 200px";
                array.push(photo);
                bool = false;
            }
            break;
        case 2:
            var photo =document.getElementById('pic2');
            if(photo.src==""){
                photo.src = 'x.png' ;
                photo.style="width: 200px; height: 200px";
                array.push(photo);
                bool = false;
            }
            break;
        case 3:
            var photo =document.getElementById('pic3');
            if(photo.src==""){
                photo.src = 'x.png' ;
                photo.style="width: 200px; height: 200px";
                array.push(photo);
                bool = false;
            }
            break;        
        case 4:
            var photo =document.getElementById('pic4');
            if(photo.src==""){
                photo.src = 'x.png' ;
                photo.style="width: 200px; height: 200px";
                array.push(photo);
                bool = false;
            }
            break;
        case 5:
            var photo =document.getElementById('pic5');
            if(photo.src==""){
                photo.src = 'x.png' ;
                photo.style="width: 200px; height: 200px";
                array.push(photo);
                bool = false;
            }
            break;
        case 6:
            var photo =document.getElementById('pic6');
            if(photo.src==""){
                photo.src = 'x.png' ;
                photo.style="width: 200px; height: 200px";
                array.push(photo);
                bool = false;
            }
            break;
        case 7:
            var photo =document.getElementById('pic7');
            if(photo.src==""){
                photo.src = 'x.png' ;
                photo.style="width: 200px; height: 200px";
                array.push(photo);
                bool = false;
            }
            break;
        case 8:
            var photo =document.getElementById('pic8');
            if(photo.src==""){
                photo.src = 'x.png' ;
                photo.style="width: 200px; height: 200px";
                array.push(photo);
                bool = false;
            }
            break;
        case 9:
            var photo =document.getElementById('pic9');
            if(photo.src==""){
                photo.src = 'x.png' ;
                photo.style="width: 200px; height: 200px";
                array.push(photo);
                bool = false;
            }
            break;
        }
        
    }
    else{

        var obj = document.getElementById(num);
        switch(num){
        case 1:
            var photo =document.getElementById('pic1');
            if(photo.src==""){
                photo.src = 'o.png' ;
                photo.style="width: 200px; height: 200px";
                array.push(photo);
                bool = true;
            }
            break;
        case 2:
            var photo =document.getElementById('pic2');
            if(photo.src==""){
                photo.src = 'o.png' ;
                photo.style="width: 200px; height: 200px";
                array.push(photo);
                bool = true;
            }
            break;
        case 3:
            var photo =document.getElementById('pic3');
            if(photo.src==""){
                photo.src = 'o.png' ;
                photo.style="width: 200px; height: 200px";
                array.push(photo);
                bool = true;
            }
            break;        
        case 4:
            var photo =document.getElementById('pic4');
            if(photo.src==""){
                photo.src = 'o.png' ;
                photo.style="width: 200px; height: 200px";
                array.push(photo);
                bool = true;
            }
            break;
        case 5:
            var photo =document.getElementById('pic5');
            if(photo.src==""){
                photo.src = 'o.png' ;
                photo.style="width: 200px; height: 200px";
                array.push(photo);
                bool = true;
            }
            break;
        case 6:
            var photo =document.getElementById('pic6');
            if(photo.src==""){
                photo.src = 'o.png' ;
                photo.style="width: 200px; height: 200px";
                array.push(photo);
                bool = true;
            }
            break;
        case 7:
            var photo =document.getElementById('pic7');
            if(photo.src==""){
                photo.src = 'o.png' ;
                photo.style="width: 200px; height: 200px";
                array.push(photo);
                bool = true;
            }
            break;
        case 8:
            var photo =document.getElementById('pic8');
            if(photo.src==""){
                photo.src = 'o.png' ;
                photo.style="width: 200px; height: 200px";
                array.push(photo);
                bool = true;
            }
            break;
        case 9:
            var photo =document.getElementById('pic9');
             if(photo.src==""){
                photo.src = 'o.png' ;
                photo.style="width: 200px; height: 200px";
                array.push(photo);
                bool = true;
            }
            break;
        }

    }
    if(xwin()==true){
        if(array.length<top_record){
            top_record = array.length;
        }
        console.log(top_record);
        window.location.href = "x_won.html";
    }  
    if(owin()==true){
        if(array.length<top_record){
            top_record = array.length;
        }
        window.location.href = "o_won.html";
    }
  
}
String.prototype.filename=function(extension){
    var s= this.replace(/\\/g, '/');
    s= s.substring(s.lastIndexOf('/')+ 1);
    return extension? s.replace(/[?#].+$/, ''): s.split('.')[0];
}
function xwin(){
    var photo1 =document.getElementById('pic1').src.filename();
    var photo2 =document.getElementById('pic2').src.filename();
    var photo3 =document.getElementById('pic3').src.filename();
    var photo4 =document.getElementById('pic4').src.filename();
    var photo5 =document.getElementById('pic5').src.filename();
    var photo6 =document.getElementById('pic6').src.filename();
    var photo7 =document.getElementById('pic7').src.filename();
    var photo8 =document.getElementById('pic8').src.filename();
    var photo9 =document.getElementById('pic9').src.filename();
    if(photo1 =="x"&&photo2=="x"&&photo3=="x"){
        return true;
    }
    if(photo4 =="x"&&photo5=="x"&&photo6=="x"){
        return true;
    }
    if(photo7 =="x"&&photo8=="x"&&photo9=="x"){
        return true;
    }
    if(photo1 =="x"&&photo4=="x"&&photo7=="x"){
        return true;
    }
    if(photo2 =="x"&&photo5=="x"&&photo8=="x"){
        return true;
    }
    if(photo3 =="x"&&photo6=="x"&&photo9=="x"){
        return true;
    }
    if(photo1 =="x"&&photo5=="x"&&photo9=="x"){
        return true;
    }
    if(photo3 =="x"&&photo5=="x"&&photo7=="x"){
        return true;
    }
    return false;
}

function owin(){
    var photo1 =document.getElementById('pic1').src.filename();
    var photo2 =document.getElementById('pic2').src.filename();
    var photo3 =document.getElementById('pic3').src.filename();
    var photo4 =document.getElementById('pic4').src.filename();
    var photo5 =document.getElementById('pic5').src.filename();
    var photo6 =document.getElementById('pic6').src.filename();
    var photo7 =document.getElementById('pic7').src.filename();
    var photo8 =document.getElementById('pic8').src.filename();
    var photo9 =document.getElementById('pic9').src.filename();
    if(photo1 =="o"&&photo2=="o"&&photo3=="o"){
        return true;
    }
    if(photo4 =="o"&&photo5=="o"&&photo6=="o"){
        return true;
    }
    if(photo7 =="o"&&photo8=="o"&&photo9=="o"){
        return true;
    }
    if(photo1 =="o"&&photo4=="o"&&photo7=="o"){
        return true;
    }
    if(photo2 =="o"&&photo5=="o"&&photo8=="o"){
        return true;
    }
    if(photo3 =="o"&&photo6=="o"&&photo9=="o"){
        return true;
    }
    if(photo1 =="o"&&photo5=="o"&&photo9=="o"){
        return true;
    }
    if(photo3 =="o"&&photo5=="o"&&photo7.src=="o"){
        return true;
    }
    return false;
}

function playagain(){
    window.location.href = "X-O.html"
    array = [];
}

function reverse(){
    if(array.length>0){
    var temp = array.pop();
    temp.removeAttribute('src');
    temp.style.width=null;
    temp.style.height = null;
    bool = !bool;
    }
}

function record(){
    var x =document.cookie;
    alert("הנושא בטיפול :)");
}