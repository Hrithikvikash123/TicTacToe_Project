
/* let variable="x";
   let display=document.getElementById("game");

 function show(value){

    let result=document.getElementById("r"+value);

    console.log(result);
    if(result.innerText==""){
    result.innerText=variable;

    checkVariable();
    display.innerHTML="<center>"+ "Turn of "+ variable+"</center>";
    winner();

    }

}

 function checkVariable(){
    if(variable=="x"){
        variable="o";

    }else{
        variable="x";
    }
}

 function getbox(number){
    return document.getElementById("r"+number).innerHTML;

}

 function forMoving(a,b,c,d){
    if(getbox(a)==d && getbox(b)==d && getbox(c)==d ){
        return true;
    }else{
        return false;
    }
}

function winner(){
 if(forMoving(1,2,3,variable) || forMoving(4,5,6,variable)|| forMoving(7,8,9,variable) || forMoving(1,4,7,variable) || forMoving(2,5,8,variable)||forMoving(3,6,9,variable) ||forMoving(1,5,9,variable) || forMoving(7,5,3,variable)){
    
        display.innerHTML= "<center>"+variable + "<h2> wone The match !!! </h2> "+ "</center>"
         for(let i=1;i<=9;i++){
            document.getElementById("r"+i).innerHTML=" ";
        }
         throw "Game Over";

        }else{
          if(getbox(1)!=""&&getbox(2)!=""&& getbox(3)!=""&&  getbox(4)!=""&&getbox(5)!=""&&getbox(6)!=""&& getbox(7)!=""&&  getbox(8)!=""&& getbox(9)!=""){
                display.innerHTML="</center>"+"  Its a Tie"+ "</center> ";
                throw "Its a Tie";
     }
    }
        
}





    */
