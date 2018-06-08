//封装父类，自定义原型对象属性
(function(){
	var person={};
	//writable默认不可写，configurable默认不可删除，enumerable默认不可遍历
	Object.defineProperty(person,"name",{writable:true,configurable:true,enumerable:true,value:"john"});
	person.name="tom";
	//console.log(person.name);

	Object.defineProperty(Object.prototype,"toString",{configurable:false});//保护toString方法
})();


//定义可读写属性
(function(){
	var person={
		_name:'john',
		get name(){return this._name.toUpperCase();},
		set name(name){this._name=name;}
	};
	person.name="darren";
	//console.log(person.name);
})();


//查看对象的特性定义
(function(){
var s=Object.getOwnPropertyDescriptor(Object.prototype,"toString");
//console.log(s);
})();

//Object.assign({},obj);//复制可遍历属性
//
//
//
//class
(function(){
	function personfactory(name,age){
		var person={name:name,age:age};
		return person;
	}
	var p1=personfactory("tom",20);
	console.log(p1);
})();


(function(){
	function Person(name,age){
		this.name=name;
		this.age=age;
		if(typeof Person.prototype.sayName!='function'){
			Person.prototype.sayName=function(){
				console.log(this.name);
			}
		}
	}
	var p1= new Person("tom",20);
	//console.log(p1);
	//p1.sayName();
})();


//原型+构造=伪经典继承
(function(){
	console.log("=".repeat(30));
	function Sup(name,age){
		this.name=name;
		this.age=age;
		if(typeof Sup.prototype.sayName!='function'){
			Sup.prototype.sayName=function(){
				console.log(this.name);
			}
		}
	}
	function Sub(name,age,sex){
		Sup.call(this,name,age);
		this.sex=sex;
	}
	Sub.prototype=new Sup("john");//function的声明是object了一个对象，然后生成一个function工厂，其prototype指向该对象
	p1=new Sub("Darren",30,"male");
	p2=new Sub("Tom",20,"female");
	p1.sayName();
	p2.sayName();
	console.log(p1.__proto__.__proto__);
})();