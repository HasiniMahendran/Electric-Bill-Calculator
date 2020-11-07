function Calculation() 
{
	let P = document.getElementById("Unit").value;

	if(P>0 && P<180)
	{
		if(P<=30)
		{
		
			document.getElementById("result").innerHTML = Number(P)*7.85+"Rs";
		}
		else if(P<=60)
		{
			document.getElementById("result").innerHTML = 235.50+((Number(P)-30)*7.85)+"Rs";
		}
		else if(P<=90)
		{
			document.getElementById("result").innerHTML = 471.00+(Number(P)-60)*10.00+"Rs";
		}
		else if(P<=120)
		{
			document.getElementById("result").innerHTML = 771.00+(Number(P)-90)*27.75+"Rs";
		}
		else
		{
			document.getElementById("result").innerHTML = 1603.50+(Number(P)-120)*32.00+480.00+"Rs";
		}
	}
	else
	{
		document.getElementById("result").innerHTML = "Enter above 0 and below 180";
	}
	

}