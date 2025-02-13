let personNumber =Symbol()
export default class person22
{
    constructor(pName ="Pepo" , pAge=10 ,pAddr="sohag")
    {
        this._personName=pName ;
        this._personAge = pAge ;
        this._pesronAddr =pAddr ;
        this[personNumber] =12333333
    }

    // to dispaly property
    get prsName()
    {
        return this._personName
    }
    get prsAge()
    {
        return this._personAge
    }

    set prsName(val)
    {
        this._personName = val
    }
    set prsAge(val)
    {
        this._personAge = val
    }

    //static
    static personID =3344444
    static get persId()
    {
        return this.personID
    }
    //method 
    displayInfo()
    {
        return `this is  ${this._personName} and him age is ${this._personAge} and him address is ${this._pesronAddr}`

    }
    // CH07_VID02_Function Overriding
    toString()
    {
        return `i am ${this._personName} and my age is ${this._personAge} and my address is ${this._pesronAddr}`
    }
}