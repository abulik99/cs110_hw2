const tpel=function (char,times)
{
	if(times===0)
		return '';
	else
	{
		return char+tpel(char,times-1);
	}
}
const tox=function(space,astx)
{
	if(space>=0)
		{
			console.log(tpel(' ',space)+tpel('*',astx));
			tox(space-1,astx+2);
		}
		return;
}
const triangleStars=function(n)
{
	tox(n-1,1);
}
triangleStars(5);