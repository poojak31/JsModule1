
  function opration()
  {
   var no1=parseInt(document.getElementById('no1').value);
   var no2=parseInt(document.getElementById('no2').value);
   var oper=document.getElementById('operator').value;
  var result=0;
if(document.form1.no1.value == "" || document.form1.no1.value == null)
{
        alert("enter no1 to calculate");
}
else if(document.form1.no2.value == "" || document.form1.no2.value == null)
{
    alert("enter no2 to calculate");
}

if(oper=="add")
{
  res= no1 + no2;
     document.getElementById('result').innerHTML=res;
     console.log("The addition of two numbers = " + res);
     document.writeln("the addition of " + no1 + " and "  + no2 + " is " + res); 
}
if(oper=="subt")
{
  res= no1 - no2a ;
     document.getElementById('result').innerHTML=res;
     console.log("The subtraction of two numbers = " + res);
     document.writeln("the subtraction of " + no1 + " and "  + no2 + " is " + res); 
}
if(oper=="mult")
{
res= no1 * no2;
     document.getElementById('result').innerHTML=res;
     console.log("The multiplication of two numbers = " + res);
     document.writeln("the multiplication of " + no1 + " and "  + no2 + " is " + res); 
}
if(oper=="mod")
   {
     res=no1 % no2;
     document.getElementById('result').innerHTML=res;
     console.log("The modulus of two numbers = " + res);
     document.writeln("the modulus of " + no1 + " and "  + no2 + " is " + res); 
   }
if(oper=="div")
{
  if(no2=='0')
  {
       alert('It is invalid number,please enter valid number');
  }
  else
  {
   res= no1 / no2;
     document.getElementById('result').innerHTML=res;
     console.log("The division of two numbers = " + res);
     document.writeln("the division of " + no1 + " and "  + no2 + " is " + res); 
}
}
  
}


  

