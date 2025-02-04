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
debugger ;
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