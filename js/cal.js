
var btns=document.querySelectorAll("button");
var operators=["+","-","x","÷"];
var decimal=false;

for(var i=0;i<btns.length;i++){
	btns[i].onclick=function(e){
		var input=document.querySelector(".screen");
		var inputVal=input.innerHTML;
		var btnVal=this.innerHTML;
	
	/*若输入“AC",则清除显示内容*/
	if(btnVal=="AC") {
		input.innerHTML="";
		decimal=false;}
		
  /*若输入“CE",则去除字符串最后y一个字符*/  
  else if(btnVal=="CE"){
    input.innerHTML=inputVal.slice(0,-1);
  }	
  
  else if(btnVal=="%") {
    if(inputVal.indexOf("%")==-1&&inputVal!=="")
    input.innerHTML=inputVal+"%";
  }
  
	else if(btnVal=="=") {
		var equation=inputVal;
    var per=inputVal.indexOf("%");/*检查是否含有“%”号，若有则在输出结果后添加*/
		equation=equation.replace(/x/g,"*").replace(/÷/g,"/").replace(/%/g,"");
		if(equation) {
      if(per==-1) input.innerHTML=eval(equation);
      else input.innerHTML=eval(equation)+"%";
  }
		decimal=false;
	}
	
	else if(operators.indexOf(btnVal)>-1){
		var lastChar=inputVal[inputVal.length-1];
		if(inputVal==""&&btnVal=="-") input.innerHTML+=btnVal;
		if(inputVal!==""&&operators.indexOf(lastChar)>-1) input.innerHTML=inputVal.replace(/.$/,btnVal);
		if(operators.indexOf(lastChar)==-1) input.innerHTML+=btnVal;
		decimal=false;	
	}
	/*用decimal的值判断小数点是否存在，若存在，则不可以添加小数点。每次输入运算符后，decimal值为False.*/
	else if(btnVal=="."){
		if(!decimal){
		input.innerHTML+=btnVal;
		decimal=true;
		}
	}
	/*输入数字直接添加到字符串,注意输入“%”之后不能再输入数字*/
	else {
    if(inputVal[inputVal.length-1]!=="%")
    input.innerHTML+=btnVal;}
}
}
