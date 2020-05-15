var stairs=document.querySelector('#up1')
stairs.style.cursor="pointer"
stairs.addEventListener('click',()=>{
    window.location.href="./second_floor.html"
})

var stairs=document.querySelector('#up2')
stairs.style.cursor="pointer"
stairs.addEventListener('click',()=>{
    window.location.href="./second_floor.html"
})

var stairs2=document.querySelector('#down1')
stairs2.style.cursor="pointer"
stairs2.addEventListener('click',()=>{
    window.location.href="./ground_floor.html"
})

var stairs2=document.querySelector('#down2')
stairs2.style.cursor="pointer"
stairs2.addEventListener('click',()=>{
    window.location.href="./ground_floor.html"
})

var today=new Date();
var date=today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = 'Time:'+' '+time+' '+'Date:'+' '+date

document.getElementById('dateandtime').innerHTML=dateTime
