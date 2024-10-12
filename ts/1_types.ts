const str: string = 'asd'
const array: number[] = [1,2,3,4]
const array2: Array<number> = [10,1233,11]
const contact: [string, number] = ['asd', 12]

//=============================================

let variable: any = 24
variable = 'aida'

//=============================================

function sayMyName(name: string ): void {
console.log(name)
}
const asd=(): string=>{
return "1"
}
sayMyName('hi')
console.log(asd())

//=============================================

function throwError(massage:string): never{
     throw new Error(massage)
}
function infinite():never{
    while(true){
    }
}

//=============================================

type Login = string
    const login: Login = "admin"
type ID = string | number
    const id_1: ID = 1
    const id_2: ID = "asd"  
type SomeType = string | null | undefined
