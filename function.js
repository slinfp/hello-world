//JS没有重载的概念
function sum(a,b){
	return a+b;
}//sum是函数对象指针，函数名为sum
let sum1=new Function("a","b","return a+b");//函数声明的真实含义,此种写法函数名为anonymous,sum1指向此函数
//console.log(sum.toString());
//console.log(sum1.toString());
var sum2=function(a,b){
	return a+b;
}
//console.log(sum2.toString());


function multi(n){
	return 2*n;
}
function sum(a,b,fn){
	if(typeof fn!='function') throw new Error("Must be function");
	return fn(a)+fn(b);
}
let m=sum(1,2,multi);
let m1=sum(1,2,n=>2*n)
//console.log(m);
//console.log(m1);
//外部函数默认在global下，当绑定在对象上时this为对象本身
//函数可以当class用
function Person(name,age){
	this.name=name;
	this.age=age;
	this.sayName=()=>console.log(this.name);
}
var obj1=new Person("john",100);//有new时，this为该创建对象
//console.log(obj1.name);
//obj1.sayName();
//console.log(obj1.sayName.length);//函数的length为参数个数

function fnx1(){
	sum=0;
	//console.log(arguments.length);
	for(let i=0;i<arguments.length;i++){
		sum+=arguments[i];
	}
	//console.log("sum is "+sum);
}//arguments像数组但不是数组，是对象,以0,1,2，...为属性名，值为参数
//fnx1(1,2,3,4);


function factorial(n){
	if(n==1) return 1;
	else return n*arguments.callee(n-1);//arguments.callee为掉用该函数的函数
}
let mm2=factorial(5);
//console.log(mm2);


let obj2={name:'tom',sayName:sayName};
function sayName(age){
	//console.log(this.name+"\t"+age);
}
obj2.sayName();


let obj3={name:'alice'};
sayName.call(obj3,100);//此种调用方法第一个参数就是this，第二个才是真正的参数
sayName.apply(obj3,[50]);//此种调用方法与call一样，只是后面参数为数组
//练习,Array.from可以把arguments转为数组
function mySort(){
	return [].sort.apply(arguments);
}
//console.log(mySort(1,3,5,4));

let sayName1=sayName.bind(obj3);//bind绑定this对象为obj3
sayName1(20);



//函数原型
(function(){
	function Animal(){
		this.sex="female";
	}
	function Person(){
		this.age=100;
	}
	function Mouse(){
		this.feet=4;
	}
	Person.prototype=new Animal;
	Mouse.prototype=new Animal;
/*	console.log(Person.prototype);
	console.log(Mouse.prototype);
	console.log(Person.prototype==Mouse.prototype);
	var p1=new Person;
	var p2=new Person;
	var p3=new Mouse;

	console.log(p2 instanceof Object);//判断是不是
	console.log(p2.__proto__==Person.prototype);//proto指向函数原型
	console.log(p2.__proto__==p1.__proto__);
	p2.sex="male";//读时在原型上找，写会挂到自己身上
	console.log(p2.sex);
	console.log(p3.sex);*/
})();