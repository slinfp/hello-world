//副作用为内存泄漏
//变量不在栈区，优点是
function outter(){
	let m=100;
	function inner(){
		return m;
	}
	return inner;
}
let o=outter();
x=o();
//console.log(x);


//有状态对象，封装私有变量
function counter(){
	var m=0;
	return function(){
		return ++m;
	}
}
var c=counter();
var c1=counter();
//console.log(c());
//console.log(c());
//console.log(c1());


var as=[3,1,5,6,3];
as.sort((a,b)=>b-a);
//console.log(as);

//产生随机数组
let os=[];
for(let i=0;i<10;i++){
	os.push({name:"name"+Math.floor(10+Math.random()*90),
			age:Math.floor(Math.random()*100)});
}
//console.log(os);
//console.log('='.repeat(30));
function nameComparator(a,b){
	return a.name>b.name?1:(a.name==b.name?0:-1);
}
//os.sort(nameComparator);
//console.log(os);

//闭包产生通用排序方法
function comparatorFactory(properyName){
	return function(a,b){
			return a[properyName]>b[properyName]?1:(a[properyName]==b[properyName]?0:-1);
	}
}
//os.sort(comparatorFactory("age"))//函数比较a，b，返回1就交换a与b的位置
//console.log(os);


//一次性函数
(function(){

		//函数初始化
	function sum(){
		console.log("init...");
		return function(){
			console.log("work...");
		}
	}
	//var sum=sum();
	//sum();
	//sum();

	function fn1(){
		var fns=[];
		for(var i=0;i<10;i++){
			fns.push(function(n){
				return function(){
					return n;}
			}(i));
		}
		return fns;
	}
	let fns=fn1();
	for(let i=0;i<fns.length;i++){
		//console.log(fns[i]());
	}
})();
(function(){
	
})();
(function(){
})();