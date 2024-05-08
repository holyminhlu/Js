function phepCong(){
	a=document.frmbt3.nba.value;
	b=document.frmbt3.nbb.value;
	c=eval(a)+eval(b);
	document.frmbt3.kq.value=c;
}
function phepTru(){
	a=document.frmbt3.nba.value;
	b=document.frmbt3.nbb.value;
	c=eval(a)-eval(b);
	document.frmbt3.kq.value=c;
}
function phepNhan(){
	a=document.frmbt3.nba.value;
	b=document.frmbt3.nbb.value;
	c=eval(a)*eval(b);
	document.frmbt3.kq.value=c;
}
function phepChia(){
	a=document.frmbt3.nba.value;
	b=document.frmbt3.nbb.value;
	c=eval(a)/eval(b);
	document.frmbt3.kq.value=c;
}