//reverseString('hello');

function reverseString(a){

    /*var y= a.split('');
     var y=y.reverse();
    var h=y.join('');
    
    return h;
    */
    
    return  a.split('').reverse().join('');
    
    //console.log(t);
    
    
    
    }
    function isPalindrome(str)
    {
      const reverse=reverseString(str);
      if(str===reverse)return true;
      return false;
      
    
    }
    function convertDatetoStr(date){
      var dateStr={day:'',month:'',year:''};
    //for day
    if(date.day<10){
      dateStr.day='0'+date.day;
    }
    else dateStr.day=date.day.toString();
    //for month
    if(date.month<10){
      dateStr.month='0'+date.month;
    }
    else dateStr.month=date.month.toString();
    
    
    dateStr.year=date.year.toString();
    return dateStr;
    
    }
    
    //var date={
    //day:11,month:2,year:2020
    //}
    //console.log(convertDatetoStr(date));
    function getAllDatesFormat(date){
    var dateStr=convertDatetoStr(date);
    
    var DDMMYYYY=dateStr.day+dateStr.month+dateStr.year;
    var MMDDYYYY=dateStr.month+dateStr.day+dateStr.year;
    var YYYYMMDD= dateStr.year+dateStr.month+dateStr.day;
    var DDMMYY=dateStr.day+dateStr.month+dateStr.year.slice(-2);
     var MMDDYY=dateStr.month+dateStr.day+dateStr.year.slice(-2);
    var YYMMDD=dateStr.year.slice(-2)+dateStr.month+dateStr.day;
    
    return [DDMMYYYY,MMDDYYYY,YYYYMMDD ,DDMMYY,MMDDYY,YYMMDD];
    }
    //const h=getAllDatesFormat(date);
    //console.log(h);
    //console.log(getAllDatesFormat(date));
    function checkPalindromeForAllDateFormats(date){
      var listOfPalindromes = getAllDatesFormat(date);
    
      var flag = false;
    
      for(var i=0; i < listOfPalindromes.length; i++){
        if(isPalindrome(listOfPalindromes[i])){
          flag = true;
          break;
        }
      }
      
      return flag;
    }
    //console.log(checkPalindromeForAllDateFormats(date));
    function isleap(year){
    if(year%400===0)return true;
    if(year%100===0)return false;
    if(year%4===0) return true;
    return false;
    
    }
    function getNextDate(date){
    var day=date.day+1;
    var month=date.month;
    var year=date.year;
    var DaysMonth=[31,28,31,30,31,30,31,31,30,31,30,31];
    
    if(month==2){
      if(isleap(month)){
        if(day>29){day=1;month++;
        }
    
      }
      else{
        if(day>28){day=1;month++;}
      }
    
    }
    
    else {
    if(day>DaysMonth[month-1]){day=1;month++;}
    
    
    }
    
    if(month>12){month=1;year++;}
    return{
      day:day,month:month,year:year
    };
    }
    
    function getNextPalindromeDate(date){
    
      var ctr=0;
      var nextdate=getNextDate(date);
      while(1){
    ctr++;
    var ispalindrome=checkPalindromeForAllDateFormats(nextdate);
    if(ispalindrome){
      break;
    }
    nextdate=getNextDate(nextdate);
      }
    
    return [ctr,nextdate];
    }
    
    //console.log(getNextDate(date));
    //console.log(getNextPalindromeDate(date));
    
    const input=document.querySelector('#ip');
    const submitBtn=document.querySelector('#btn');
    const display=document.querySelector('#output');
    
    function handler(){
      
    var dateStr=input.value;
    if(dateStr!=''){
      var listofDate=dateStr.split('-');
     // console.log(listofDate);
     var date={
       day:Number(listofDate[2]),
       month:Number(listofDate[1]),
       year:Number(listofDate[0])
     };
    }
    const ispalindrome=checkPalindromeForAllDateFormats(date);
    
    if(ispalindrome){
      display.innerText='Yay! your birthday is a palindrome!!'
    }
    else{
      var [ct,nextDate]=getNextPalindromeDate(date);
      display.innerText=`The next Palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year} 
      you missed it by ${ct} days ..`;
    }
    
    
    }
    
    submitBtn.addEventListener('click',handler)
    
    
    
    
    