interface Rect {
    readonly id: string
    color?: string
    size: {
        width:number
        height:number
    }
}
const rect1: Rect = {
    id: '1',
    size:{
        width:12,
        height:30
    },
    color: "#ccs"
}
const rect2: Rect = {
    id: '2',
    size:{
        width:10,
        height:20
    }
}
rect2.color = "#aaa"
const rect3 = {} as Rect

//===========================================================

interface RectWithArea extends Rect {
    getArea: ()=> number
}
const rect4:RectWithArea = {
    id: "4",
    size:{
        width:10,
        height:20
    },
    getArea() {
        return this.size.height*this.size.width
    },
}
console.log(rect4.getArea())

//===========================================================

interface IClock{
    time: Date
    setTime(date: Date):void
}
class Clock implements IClock{
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

//===========================================================

interface Style{
    [key: string]: string
}
const css: Style = {
    border: 'lpx solid black',
    marginTop: "2px", 
    borderRadius: "5px"
}