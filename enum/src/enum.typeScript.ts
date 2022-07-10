

enum colorCode   {
    Black = 0,
    Brown = 1,
    Red =  2,
    Orange = 3,
    Yellow = 4,
    Green = 5,
    Blue = 6,
    Violet = 7,
    Grey = 8,
    White = 9
}

let tupple:[string,string] = ['Black','Yellow']

function colorCodeTotal(tupple:[string,string]):number{
     
       
    let code1:number = Object.getOwnPropertyNames(colorCode).indexOf(tupple[0])
    let code2:number = Object.getOwnPropertyNames(colorCode).indexOf(tupple[1])

    return code1 + code2


}

let result:number = colorCodeTotal(tupple)

console.log(result)