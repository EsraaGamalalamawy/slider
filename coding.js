var box=document.getElementById("container")
var left=document.getElementById("left")
var right=document.getElementById("right")
var points=document.getElementsByClassName("point")
var arr=[...points]
var counter=0
points[counter].style.transform="scale(2)"
var fun=function(){
    box.style.transform=`translatex(${counter*(-100)}%)`
        arr.forEach((ele,index)=>{
            if(index==counter){
                ele.style.transform="scale(2)"
            }else{
                ele.style.transform="scale(1)"
            }
        })
}
left.onclick=function(){
    if(counter===0){
        counter=7
        fun()
        box.style.transitionDuration="0s"
    }
    else{
        box.style.transitionDuration="1s"
        counter--
        fun()
    }
}
right.onclick=function(){
    if(counter===7){
        counter=0
        fun()
        box.style.transitionDuration="0s"
    }
    else{
        box.style.transitionDuration="1s"
        counter++
        fun()
    }
}
var y=setInterval(()=>{
    counter++
    if(counter>=8){
        box.style.transitionDuration="0s"
        counter=0
    }else{
        box.style.transitionDuration="1s"
    }
    fun()
    box.onmouseenter=function(){
        clearInterval(y)
    }
},1000)
