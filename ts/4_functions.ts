function add (a:number, b:number, c?:number): number{
    if(a && b && !c){
        return a+b
    }
    if(a && b && c){
        return a+b+c
    }
    return 1
}
console.log(add(1,3,4))
console.log(add(11,3))
