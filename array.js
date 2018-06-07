let as1=new Array();
let as2=new Array(3);
let as3=[1,2,3];
for(let i=0;i<as3;i++){

}//遍历
as3.forEach(function (item,index,ary) {

});//遍历
as3.push(1,3);
let pp=as3.pop();
as3.unshift(9);
as3.shift();
let as=[1,2,3,4,5,6,7,8];
as.splice(2,1);
as.splice(2,0,9,0);
as.splice(6,2,3,4);
as.splice(as.indexOf(9),1);
as.sort();
as.sort().reverse();
let temp=as.some(item=>item>6)//some会循环，在函数体返回true时，break返回True，否则返回false
temp=as.every(item=>item>0)//对每一个都循环
let as4=as3.map(item=>item%2?item*2:item)

as4.forEach((item,index,ary)=>{
    console.log(item);
})//遍历

console.log(temp);
//babel 转换语法版本