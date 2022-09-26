function bigger(){
    document.getElementById("freeform").style.fontSize = "25px";
  }
  
  function moo(){
    const message = document.getElementById("freeform");
    var str = message.value;
    message.value =  str + " Moo";
    document.getElementById("freeform").style.textTransform = "uppercase";
  
  }
  
  function fancy(){
    document.getElementById("freeform").style.fontWeight = "bold";
    document.getElementById("freeform").style.color = "blue";
    document.getElementById("freeform").style.textDecoration = "underline"
  }
  
  function boring(){
    document.getElementById("freeform").style.fontWeight = "normal";
    document.getElementById("freeform").style.color = "black";
    document.getElementById("freeform").style.textDecoration = "none"
  }
  
  function checkValue(value){
    var fancy;
    var boring;
  
    if(value === "fancy"){
      return fancy;
    } else if (value === "boring") {
      return boring;
    }
  }
  