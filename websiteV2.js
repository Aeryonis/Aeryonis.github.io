/*Tara Ward In Class Website V2 COMP205 104*/

function todaysDate()
{
    var rightNow2 =  new Date();
	 var theMonth = 0, todaysDate = "";  
	 theMonth = rightNow2.getMonth() + 1;
	 todaysDate = theMonth + ' / ' + rightNow2.getDate() 
                + ' / ' + rightNow2.getFullYear();
	 document.getElementById("date").innerHTML = todaysDate;
}

function functionScoll()
{
    window.scrollTo(0,0);
}

function changeTable()
{
    document.getElementsByTagName("table")[0].style.color = 'green';
    document.getElementsByTagName("table")[0].style.borderWidth = '0.3em';
    document.getElementsByTagName("table")[0].style.borderStyle = 'dotted';
    document.getElementsByTagName("table")[0].style.borderColor = 'yellow';
}

function revertTable()
{
    document.getElementsByTagName("table")[0].style.color = 'black';
    document.getElementsByTagName("table")[0].style.borderWidth = '80%';
    document.getElementsByTagName("table")[0].style.borderStyle = 'hidden';
    document.getElementsByTagName("table")[0].style.borderColor = 'rgba(78, 160, 226, 0.4)';
}