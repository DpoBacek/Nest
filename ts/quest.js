var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var employees = [
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
function SortNonMapped(arr) {
    var _a;
    if (arr.length <= 1)
        return arr;
    for (var i = 0; i < arr.length; i++) {
        var minIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j].id < arr[minIndex].id) {
                minIndex = j;
            }
        }
        _a = [arr[minIndex], arr[i]], arr[i] = _a[0], arr[minIndex] = _a[1];
    }
    return arr;
}
function SortMapped(arr) {
    var newArray = new Map();
    var lastMin = 0;
    var _loop_1 = function (i) {
        var localMin = 99;
        for (var j = 0; j < arr.length; j++) {
            if (arr[j].id < localMin && arr[j].id > lastMin) {
                localMin = arr[j].id;
            }
        }
        newArray.set(i, arr.find(function (elem) { return elem.id === localMin; }) || { id: -1, name: '', email: '' });
        lastMin = localMin;
    };
    for (var i = 0; i < arr.length; i++) {
        _loop_1(i);
    }
    return __spreadArray([], newArray, true).map(function (_a) {
        var name = _a[0], value = _a[1];
        return (__assign({}, value));
    });
}
function QuickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivot = arr[0];
    var less = arr.slice(1).filter(function (x) { return x.id <= pivot.id; });
    var greater = arr.slice(1).filter(function (x) { return x.id > pivot.id; });
    return __spreadArray(__spreadArray(__spreadArray([], QuickSort(less), true), [pivot], false), QuickSort(greater), true);
}
function removeDuplicateIds(arr) {
    var uniqueIds = new Set();
    return arr.filter(function (employee) {
        if (uniqueIds.has(employee.id)) {
            return false;
        }
        uniqueIds.add(employee.id);
        return true;
    });
}
console.log(SortNonMapped(employees));
console.log(removeDuplicateIds(employees));
// console.log(employees.sort((a,b)=>a.id<b.id?-1:1))
