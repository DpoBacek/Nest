class Typescript {
    version: string 

    constructor(version: string) {
    this.version = version 
    }
    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}
const tsInstance = new Typescript("4.9.4")
console.log(tsInstance.info("MyProject"))
