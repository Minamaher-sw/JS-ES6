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