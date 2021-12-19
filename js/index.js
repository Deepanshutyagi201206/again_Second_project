var show_elements = document.getElementsByClassName("show");
var nex = document.getElementsByClassName("next");
var prev = document.getElementsByClassName("prev");
var index = -1;
function next(){
    index++;
    if(index>show_elements.length-1){
        index=0;
    }
    for(var loop=0; loop<=show_elements.length-1; loop++){
        if(index==loop){
            show_elements[index].style.display = "block";
            nex[index].style.display = "block";
            prev[index].style.display = "block";
        }
        else{

            show_elements[loop].style.display = "none";
            nex[loop].style.display = "none";
            prev[loop].style.display = "none";
        }
    }
    console.log(index);
}
function previous(){
    index--;
    if(index<0){
        index=show_elements.length-1;
    }
    for(var loop=0; loop<=show_elements.length-1; loop++){
        if(index==loop){
            show_elements[index].style.display = "block";
            nex[index].style.display = "block";
            prev[index].style.display = "block";
        }
        else{
            show_elements[loop].style.display = "none";
            prev[loop].style.display = "none";
            nex[loop].style.display = "none";
        }
    }
    console.log(index);
}