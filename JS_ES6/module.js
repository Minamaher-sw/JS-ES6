const pi =3.14 ;

export function calAreaCircle( raduis)
{
    return (pi * raduis * raduis) ;
}

function sqrtRootVal(val)
{
    return  Math.sqrt(val)
}

export function disSqrRootValue(val)
{
    return ` squar root of ${val} is ${sqrtRootVal(val)}`
}
