//CH01_VID01_Let & const

var num =12 
console.log(num)
for(let i=0 ; i<10 ; i++)
{
    const Pi =3.14 ;
    console.log(i) ;
    console.log(Pi) ;
}

//CH01_VID02_Solving closure problem using let
// debugger ;
function outerfun()
{
    var arr =[];
    // for(var i = 0 ;i<3 ;i++)
    // {
    //     //iiFE pattern
    //     arr.push((function(j){
            
    //         return function()
    //         {
    //             console.log(j)
    //         }
    //     })(i))
    // }
    /* Solving closure problem using let*/
    for(let i=0 ; i<3 ; i++)
    {
        arr.push(function(){
                        console.log(i); })
    }
    return arr ;
}

var result =outerfun();
console.log(result)
result[0]()
result[1]()
result[2]()

//CH01_VID03_Rest parameter ...c is rest parameter
function sum(a,b,...c)
{
    var sum = 0;
    for(let i=0 ;i <c.length ; i++)
    {
        sum +=c[i] ;
    }
    sum = sum+a+b ;
    console.log(c) ;
    return sum ;
}

var result = sum(3,4,5,6,7,8);
console.log(result);
//CH01_VID04_Spread operator
var arr1=["apple" ,"mongo" ,"bnana"];
var arr2=["vegtable" ,"fruits",...arr1]
console.log(arr2) ;

function getFullName(firstName ,lastName)
{
    return firstName + " " +lastName ;
}

var fullNameArr=["Mina" ,"Maher"] ;
var FN =getFullName(...fullNameArr)
console.log(FN);

//CH01_VID05_SpreadOperator and Reference Value (obects )
var obj1 =
    {
        name : "mina maher" ,
        Id :123 ,
        salary :1234 
    }
var obj2 ={...obj1}
obj2.name ="pepo maher"
obj2.Id =120 ;
console.log(obj1); 
console.log(obj2); 
//same thing with array

// CH01_VID06_Array Destructuring part1
var arr3=[1, 2 ,3 ,4 , , ,5,6,"a"]

var [ 
    x, 
    y , , ,
    z =10 , ,
    w] =arr3 ;
console.log( x , y ,z ,w)

// CH01_VID07_Array Destructuring part2
var arr4=[1, 2 ,3 ,4,5,6,"a"]

var x,y,z,w ;
[
    x ,
    y ,
    z ,
    ...w
] = arr4

console.log(x ,y, z ,w) ;

//object 
var varObj ={};
[
    varObj.x ,
    varObj.y ,
    varObj.z ,
    ...varObj.w
] =arr4 ;
console.log(varObj);

//function iterable 
function arr() {
    return [11, 22 ,33 ,4,5,6,"a"]
    // return "abcdef"
}
var varObj ={};
[
    varObj.x =10 ,
    varObj.y =12,
    varObj.z ,
    ...varObj.w
] = arr() ;
// boolean true is not iterable (cannot read property Symbol(Symbol.iterator))
//  Array.isArray(arr() ) || [] ;
console.log(varObj);

//CH01_VID08_Object Destructuring part1
var obj ={
    name :"ES6" ,
    main :"javaScript" ,
    salary :1233 ,
    instructor :
        {
            instName :"Mina Maher" ,
            instId : 123 
        }
}

var {
    name :x ,
    main : y ,
    salary : z ,
    instructor : {
        instName : insx ,
        instId :insy ,
        instSalaMod =12333
    }
} =obj ;

console.log(x ,y,z ,insx ,insy ,instSalaMod) ;

// CH01_VID09_Object Destructuring part2
function retObj()
{
    var obj ={
        name :"ES6" ,
        main :"javaScript" ,
        salary :1233 ,
        instructor :
            {
                instName :"Mina Maher" ,
                instId : 123 
            } ,
        a :1 ,
        b :2,
        c: 3 
    }
    return obj ;
}

var {
    name :x ,
    main : y ,
    salary : z ,
    instructor : {
        instName : insx ,
        instId :insy ,
        instSalaMod =12333
    },
    ...remObj
} =retObj() ;

console.log(remObj);

//CH02_VID01_Arrow function
var sum =(x ,y) =>  {return x+y }
//call
console.log(sum(55, 6))

//or
var sum = x => { return x }
console.log(sum(55))

//CH02_VID02_Arrow function and lexical binding
var employee= {
    empName :"Mina Mar" ,
    empId : 123 ,
    displayInfo :
    function ()
    {
        var _that =this ;
        setTimeout(function()
    {
        console.log(_that.empName)
    } , 2000)
    }
}
console.log(employee.displayInfo())

//another solu this problem 
var employee= {
    empName :"Mina Maherr" ,
    empId : 123 ,
    displayInfo :
    function ()
    {
        setTimeout(()=>
    {
        console.log(this.empName)
    } , 2000)
    }
}
console.log(employee.displayInfo())

// CH02_VID03_"this" and arrow function
var userName1 = "Mina Maher Mosadef" ;

var newFun =()=>{
    return this.userName1
}

var newFun2 =function ()
{
    return this.userName1
}
var obj3 ={
    userName1 : "Ali" ,
    objFun : newFun ,
    objFun2 :newFun2
}

console.log(obj3.objFun());
console.log(obj3.objFun2());
// CH03_VID01_String API improvement
//literal creation 
var myyStr="   welcome to javascript world!! "
//constructor 
var newStr = new String("JavaScript String Object") ;

//trim method 
console.log(myyStr.trim()) ;
console.log(myyStr.trimLeft()) ;
console.log(myyStr.trimRight()) ;

//start with
console.log(newStr.startsWith("Ja"));
console.log(newStr.endsWith("ct"));
console.log(newStr.repeat(3));
console.log(newStr.includes("ing"));

console.log(String.fromCharCode(67));
console.log(String.fromCharCode(67 ,99));
console.log(String.fromCharCode(67,99,103));

//CH03_VID02_String template
var str1="Mina Maher"
var fullName = `Hi sir my name is ${str1}`;
console.log(fullName)

// CH03_VID03_String.raw
var strVal = String.raw `Hi mina \n \t ${str1}`
console.log(strVal);
console.log(`Hi mina \n \t ${str1}`)

// CH03_VID04_Tagged Template
function fun (strings , ...values)
{
    let str=" " ;
    console.log(strings.length) ;
    for(let item=0 ; item <strings.length ; item++)
    {
        str +=strings[item] ;
        if (values[item]) //check undefined 
            str +=values[item] ;
    }
    return str ;
}

let x1 =10 ,
    y1 =20 ;
var result =fun `this is ${x1} and ${y1} and sum of them ${x1+y1}`;
console.log(result) ;

// CH03_VID05_Array API improvement

var fruits =["apple" ,"banana" ,"strawberry" ,"orange" ,"mango"]
//every method  &&
var resuult1= fruits.every((val ,idx ,arr1) =>
{
    return val[0] ==="a" ;
})
console.log(resuult1);
//some method   ||
resuult1= fruits.some((val) =>
    {
        return val[0] ==="a" ;
    })
console.log(resuult1);

//map method
resuult1= fruits.map((val) =>
    {
        return `i like ${val}` ;
    })
console.log(resuult1);

//find method
resuult1= fruits.find((val) =>
    {
        return val === "apple" ;
    })
console.log(resuult1);

//filter method
resuult1= fruits.filter((val) =>
    {
        return val[0] === "a" || val[0] === "b";
    })
console.log(resuult1);

//CH03_VID06_Object new shorthand creation

//creat object by factory method
function employee1(nm ,id ,age)
{
    return {
        empName :nm ,
        empId : id ,
        empAge :age ,
        displayInfo : function ()
        {
            return `employee name is ${this.empName} , employee id is ${this.empId} and employee age is ${this.empAge}` ;
        }
    }
}

var emp1 = employee1("mina maher" , 123 , 26) ;
console.log(emp1.displayInfo()) ;

//enhancement

function employee1 ( empName ,empId , empAge )
{
    return {
        empName ,
        empId ,
        empAge  ,
        displayInfo()
        {
            return `employee name is ${this.empName} , employee id is ${this.empId} and employee age is ${this.empAge}` ;
        }
    }
}

var emp1 = employee1("mina maher" , 123 , 26) ;
console.log(emp1.displayInfo()) ;

//CH03_VID08_Options object 
// CH03_VID09_Object.assign()

function courseDetails(msg="Greetings" ,options ={})
{
    let defaultCousreInfo=
    {
        courseName : "ES6" ,
        courseDuration :"3Days" ,
        supervisor  :"Anonymouse"
    }


    return `${msg} in ${options.courseName} course ,duration of this course is ${options.courseDuration} and supervisor is ${options.supervisor}`
}

var course1={
    name :"JS" ,
    dur :"7 days" ,
    supervisor : "maharateck"
}
console.log(courseDetails("Hello",course1)) ;
//out 
//Hello in undefined course ,duration of 
// this course is undefind and supervisor 
//is maharateck

//solve undefined we use sme name  of memebers 
var course2={
    courseName :"JS" ,
    courseDuration :"7 days" ,
}
console.log(courseDetails("Hello",course2)) ;

//solve problem of forgett one memeber we use assign function 
function courseDetails1(msg="Greetings" ,options ={})
{
    let defaultCousreInfo=
    {
        courseName : "ES6" ,
        courseDuration :"3Days" ,
        supervisor  :"Anonymouse"
    }

    let optionsSetting =Object.assign({} ,defaultCousreInfo,options)
    console.log(optionsSetting)
    return `${msg} in ${optionsSetting.courseName} course ,duration of this course is ${optionsSetting.courseDuration} and supervisor is ${optionsSetting.supervisor}`
}

var course3={
    courseName :"JS" ,
    courseDuration :"7 days" ,
    supervisor :"MahraTech" ,
    courseId :123
}
console.log(courseDetails1("Hello",course3)) ;

//CH03_VID10_Destructuring and named arguments solution
function courseDetails2(
    {
        //default values
        courseName ="ES6"  ,
        courseDuration = "3 days" ,
        supervisor = "anonymouse" ,
        msg ="Graetings"
    } 
    ={})
{
    return `${msg} in ${courseName} course ,duration of this course is ${courseDuration} and supervisor is ${supervisor}`
}

var course4={
    courseName :"JS" ,
    courseDuration :"7 days" ,
    supervisor :"MahraTech" ,
    courseId :123 ,
    msg :"Hello"
}
console.log(courseDetails2(course4)) ;

// proxy 
handler =
{
    set (obj , prop ,value)
    {
        if(obj.hasOwnProperty(prop))
        {
            //validation 
            if (prop === 'comName' || prop === "comCEO")
            {
                if (typeof value === "string")
                        obj[prop] = value 
                else 
                    throw  `please enter string value `
                    
            }
            else if (prop === "comId")
            {
                if (typeof value == "number" && (value < 300 && value > 0))
                        obj[prop] = value 
                else 
                    throw  `please enter integer value and range though 0 to 300 `
            }
           
        }
        else 
        throw `${prop} property is not fouund in object `

    },
    get (obj , prop )
    {
        if(obj.hasOwnProperty(prop))
        {
            //adding text to property 
            return `${prop} property is ${obj[prop] }`
        }
        else 
        //at case undefined 
            throw `${prop} property is not fouund in object `
    }
}



company= 
{
    comName : "seimens" ,
    comId : 222 ,
    comCEO : "Mina Maher"
}

var myProxy = new Proxy(company , handler) ;

myProxy.comName ="mina" ;
console.log(myProxy.comName )

//CH04_VID01_Set object
var mySet1 =new Set();
//inititilization 
var mySet2 =new Set(["mina",12 , 333]);
//add value 
mySet1.add("mina maher") ;
var arr=["mina " ," maher"] ;
mySet1.add(arr) ;

mySet1.add("delet item") ;

console.log(mySet1) ;
//delete method
mySet1.delete("delet item") ;
console.log(mySet1) ;
//has
console.log(mySet1.has("mina maher")) ;
console.log(mySet1.has("delet item")) ;

//clear
console.log(mySet2) ;
mySet2.clear()
console.log(mySet2) ;

//iterator methods
console.log(mySet1.entries())
console.log(mySet1.values())
console.log(mySet1.keys())

//CH04_VID02_Map object
//empty 
var employeeRes = new Map()
// init 
var compEmp = new Map([["empName" , "Mina Maher"],["empId", 122],["empSalary", 2222]])

// set method
employeeRes.set("empName" , "Mina Maher");
employeeRes.set("empID" , 111);
employeeRes.set("empSalary" , 4000);

//get 
console.log(compEmp.get("empName"))
console.log(employeeRes.get("empName"))

//delete
console.log(compEmp)
console.log(employeeRes)
console.log(compEmp.delete("empName"))
console.log(employeeRes.delete("empName"))

//has 
console.log(compEmp.has("empName"))
console.log(employeeRes.has("empName"))

//clear 
console.log(compEmp.clear())
console.log(employeeRes.clear())

// iterators
//empty 
var resEmpl = new Map()
// init 
var manger = new Map([["empName" , "Mina Maher"],["empId", 122],["empSalary", 2222]])
// set method
resEmpl.set("empName" , "Mina Maher");
resEmpl.set("empID" , 111);
resEmpl.set("empSalary" , 4000);

//iterators entresEmplries values keys
console.log(manger.entries())
console.log(manger.values())
console.log(manger.keys())

console.log(resEmpl.entries())
console.log(resEmpl.values())
console.log(resEmpl.keys())

//CH04_VID03_For .. of
var myArr =[123,22,33,44,55] 

for( val of myArr)
    {
        console.log(val) ;
    }

// CH04_VID04_Example for of with map
for( entity of  resEmpl)
    {
        console.log(entity)
    }
console.log("  ")
for( entity of  resEmpl.entries())
    {
        console.log(entity)
    }
console.log("  ")
for( value of  resEmpl.values())
    {
        console.log(value)
    }
console.log("  ")

for( key of  resEmpl.keys())
    {
        console.log(key)
    }
 console.log("  ")

// key and value 
for( [k ,v] of  resEmpl.entries())
    {
        console.log(k + " " + v)
    }

//CH05_VID01_Iterable object

//iterable object
var arr =[1,2,3,4,5] 
//iterator object
var iter =arr[Symbol.iterator]()
console.log(iter.next()) ;
console.log(iter.next()) ;
console.log(iter.next()) ;
console.log(iter.next()) ;
console.log(iter.next()) ;
console.log(iter.next()) ;// out {value: undefined, done: true}

for (iter1 of arr)
{
    console.log(iter1)
}

//CH05_VID02_Generator function (object object to iterable object)

var object={
    objjName : 'mian' ,
    objId : 122 ,
    gen1 : function * gen()
    {
        // yield 10 ;
        // var x =20 +50 ;
        // console.log(x) ;
        // yield 30 ;
        //     console.log("Hi ma") ;
        yield object.objjName ;
        yield object.objId ;
    }
}

console.log(" Gen")
for (i of object.gen1())
{
    console.log(i)
}