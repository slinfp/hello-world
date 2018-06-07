let r1=new RegExp('a','g');
let r2=/a/g;
let s="abc-dd,4,7,abd";
let r3=/[-|,|\d]/g;
let s1=s.replace(r3,'*');
console.log(s1);
let as = s.split(r3);
console.log(as);

//console.log(r3,test(s));
r1=/[\d]/;
while((rs=r3.exec(s))!=null){
	console.log(rs[0]+"\t"+rs.index+"\t"+rs);
}