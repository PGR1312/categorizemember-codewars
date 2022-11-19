var arr=[[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];
var ot=[]
for(i=0;i<arr.length;i++)
{
    //console.log(arr[i]);
    if(arr[i][0]>57 && arr[i][1]>7)
        {
            //console.log('senior');
            ot.push('senior')
        }
    else
        {
            //console.log('open');
            ot.push('open')
        }
}
console.log(ot);
