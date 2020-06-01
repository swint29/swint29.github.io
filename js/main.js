function switchTab(){
    
    var tab1Color = document.getElementById("tab1").style.color;
    var tab2Color = document.getElementById("tab2").style.color;
    if(tab1Color=="rgb(170, 85, 85)"){

        document.getElementById("tab1").style.color = "black";
        document.getElementById("tab2").style.color = "rgb(170, 85, 85)";
    }    
    else{
        document.getElementById("tab1").style.color = "rgb(170, 85, 85)";
        document.getElementById("tab2").style.color = "black";
    }
};
