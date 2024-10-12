const employees: Employee[] = [
    { id: 3, name: "Сергей Сергеев", email: "sergey.sergeev@example.com" },
    { id: 7, name: "Елена Еленова", email: "elena.elanova@example.com" },
    { id: 5, name: "Мария Васильева", email: "maria.vasilieva@example.com" },
    { id: 8, name: "Николай Николаев", email: "nikolay.nikolaev@example.com" },
    { id: 1, name: "Иван Иванов", email: "ivan.ivanov@example.com" },
    { id: 6, name: "Дмитрий Дмитриев", email: "dmitriy.dmitriev@example.com" },
    { id: 2, name: "Петр Петров", email: "petr.petrov@example.com" },
    { id: 10, name: "Владимир Владимиров", email: "vladimir.vladimirov@example.com" },
    { id: 9, name: "Ольга Ольгова", email: "olga.olgov@example.com" },
    { id: 4, name: "Алексей Алексеев", email: "aleksey.alekseev@example.com" },
    { id: 4, name: "Алексей Алексеев", email: "aleksey.alekseev@example.com" },
  ];
  type Employee = {
    id: number;
    name: string;
    email:string;
  }
  


  class EmployeeProcessor {
    private employees:Employee[] = employees
    constructor (array:Employee[]){
      this.employees = array
    }
    private QuickSort(arr = this.employees): Employee[] {
      if (arr.length <= 1) {
         return arr;
      }
      const pivot = arr[0];
      const less = arr.slice(1).filter((x) => x.id <= pivot.id);
      const greater = arr.slice(1).filter((x) => x.id > pivot.id);
      return [...this.QuickSort(less), pivot, ...this.QuickSort(greater)];
    }
    Sort():this{
      this.employees = this.QuickSort();
      return this
    }
    Log():this{
      console.log(this.employees)
      return this
    }
  }
  new EmployeeProcessor(employees).Sort().Log()







  function SortNonMapped (arr: Employee[]){
    if(arr.length <=1) return arr
      for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j].id < arr[minIndex].id) {
              minIndex = j;
          }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
      return arr;
    }
  
    function SortMapped (arr: Employee[] ){
      let newArray = new Map<number, Employee>()
      let lastMin = 0
      for (let i = 0; i < arr.length; i++) {
        let localMin = 99
        for (let j = 0 ;j < arr.length; j++) {
          if (arr[j].id< localMin && arr[j].id > lastMin) {
            localMin = arr[j].id
          }
        }
        newArray.set(i, arr.find((elem)=>elem.id === localMin) || {id:-1, name:'', email:''})
        lastMin = localMin
      }
      return [...newArray].map(([name,value])=>({...value}))
    }

  function QuickSort(arr: Employee[]): Employee[] {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[0];
    const less = arr.slice(1).filter((x) => x.id <= pivot.id);
    const greater = arr.slice(1).filter((x) => x.id > pivot.id);
  
    return [...QuickSort(less), pivot, ...QuickSort(greater)];
  }

  function removeDuplicateIds(arr: Employee[]): Employee[] {
    const uniqueIds = new Set();
    return arr.filter((employee) => {
      if (uniqueIds.has(employee.id)) {
        return false;
      }
      uniqueIds.add(employee.id);
      return true;
    });
  }
  
  
  
  console.log(SortNonMapped(employees))
  console.log(removeDuplicateIds(employees));
  
  // console.log(employees.sort((a,b)=>a.id<b.id?-1:1))