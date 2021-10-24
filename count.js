var hour = document.getElementById('hour');
var minutes = document.getElementById('minutes');
var second = document.getElementById('second');
var start = document.getElementById('start');
var reset = document.getElementById('reset');

var timer = null;
 const starttime = ()=>{
   if(second.value != 0){
       second.value--;
   }
   else if(minutes.value !=0 && second.value == 0){
       second.value=59;
       minutes.value--;
   } 
   else if(hour.value !=0 && minutes.value == 0){
       minutes.value=60;
       hour.value--;
   }


}
start.addEventListener('click',()=>{
   
     var starts = ()=>{
         timer = setInterval(()=>{
            starttime();
        },1000);
    }
    starts();
    
})

reset.addEventListener('click',()=>{
   
    hour.value = 0;
    minutes.value= 0;
    second.value = 0;
    clearInterval(timer);

})