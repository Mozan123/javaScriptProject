var year          = document.getElementById('year');
var month         = document.getElementById('month');
var day           = document.getElementById('day');
var submitButton  = document.getElementById('submit');
   submitButton.addEventListener("click", function(evt){

      var message = document.getElementById('message');

      var parseDay   = (parseInt(day.value)-1);
      var parseMonth = parseInt(month.value);
      var parseYear  = parseInt(year.value);

      var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      var weekDays = ["Sunday","Monday","Tuseday","Wednesday","Thursday","Friday","Saturday"];

      var dateIs = new Date(parseYear,parseMonth,parseDay);

      var weekdayIs = weekDays[ dateIs.getDay()];
      var monthIs = months[parseMonth];

      if (weekdayIs === undefined || monthIs === undefined){
        message.innerText = "" ;
        setTimeout(function(){
        message.innerText = "please enter a valid date";
},500)

}
  Moan
    message.innerText =  weekdayIs  +", " + monthIs  +" " + parseDay+", "+ parseYear ;

}
})
