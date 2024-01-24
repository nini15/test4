var elementi=document.getElementsByClassName("container")
elementi[0].style.width="200px";
elementi[0].style.height="200px";
elementi[0].style.backgroundColor="red";

elementi[1].style.width="200px";
elementi[1].style.height="200px";
elementi[1].style.backgroundColor="blue";

elementi[2].style.width="200px";
elementi[2].style.height="200px";
elementi[2].style.backgroundColor="purple";

elementi[3].style.width="200px";
elementi[3].style.height="200px";
elementi[3].style.backgroundColor="yellow";

elementi[4].style.width="200px";
elementi[4].style.height="200px";
elementi[4].style.backgroundColor="pink";












for(i=0; i<elementi.length; i++){
    elementi[i].innerHTML= i+1;
}