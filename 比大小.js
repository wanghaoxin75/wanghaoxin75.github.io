a = +prompt('请输入一个数字')
b = +prompt('请输入一个数字')
function getMax(a,b){

    if(a>b){
   return a
    }else{
        return b
    }

}
var er = getMax(a,b);
document.write(er+"大");
i=1;
while(i<=0){
    document.write(er);
    i++;
}
// var i=1;
// while(i<=100){
//      alert(er);
//       i++;
// }