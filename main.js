var arr=[2,3,4,5,8,12,13,16];
var sum=0;
var avg;
document.write("The Given Number:"+arr);
document.write("<br>");
for(let i=0;i<arr.length;i++)
{
	sum=sum+arr[i];
	avg=sum/arr.length;
}
document.write("Sum of given number:"+sum);
document.write("<br>");
document.write("average of given number:"+avg);
