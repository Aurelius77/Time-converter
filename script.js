

function secondsConverter(valNum){
   document.getElementById('minutes').value = valNum/60
   document.getElementById('hours').value = document.getElementById('minutes').value/60
   document.getElementById('days').value = document.getElementById('hours').value/24
   document.getElementById('weeks').value = document.getElementById('days').value/7
   document.getElementById('years').value = document.getElementById('days').value/365

}



function minutesConverter(valNum){
    document.getElementById('seconds').value = valNum*60
    document.getElementById('hours').value = valNum/60
    document.getElementById('days').value = document.getElementById('hours').value/24
    document.getElementById('weeks').value = document.getElementById('days').value/7
    document.getElementById('years').value = document.getElementById('days').value / 365
}



function hoursConverter(valNum){
    document.getElementById('minutes').value = valNum*60
    document.getElementById('seconds').value = document.getElementById('minutes').value * 60
    document.getElementById('days').value = valNum/24
    document.getElementById('weeks').value = document.getElementById('days').value/7
    document.getElementById('years').value = document.getElementById('days').value /365

}


function daysConverter(valNum){
    document.getElementById('hours').value = valNum * 24
    document.getElementById('minutes').value = document.getElementById('hours').value * 60
    document.getElementById('seconds').value = document.getElementById('minutes').value * 60
    document.getElementById('weeks').value = valNum/7
    document.getElementById('years').value = valNum/365

}


function weeksConverter(valNum){
    document.getElementById('days').value = valNum*7
    document.getElementById('hours').value = document.getElementById('days').value * 24
    document.getElementById('minutes').value = document.getElementById('hours').value *60
    document.getElementById('seconds').value = document.getElementById('minutes').value * 60
    document.getElementById('years').value = document.getElementById('days').value /365

}




function yearsConverter(valNum){
   document.getElementById('days').value  = valNum* 365
   document.getElementById('weeks').value = document.getElementById('days').value /7
   document.getElementById('hours').value = document.getElementById('days').value *24
   document.getElementById('minutes').value = document.getElementById('hours').value *60
   document.getElementById('seconds').value = document.getElementById('minutes').value * 60
   
}



