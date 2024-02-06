
// task1


// let sum = 0 

// function Sum(num1,num2) {
//     if (num1<num2) {
//         for (let i = num1; i <= num2; i++) {
//             sum+=i
//         }
//     }
//     else{
//         console.log("num1 num2 den boyukdur");
//     }
//     return sum
// }
// console.log(Sum(10,5));


// task2


// function filter(arr, callback) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// const arr = [1, 6,13,15,45,67,89,90];
// const onbeseebolunme =filter(arr, (num) => num % 15 === 0);
// console.log(onbeseebolunme);


// task3

// function Map(arr, callback) {
//     const newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArray.push(callback(arr[i], i, arr));
//     }
//     return newArray;
// }

// const array = [2,3,7,8,9, 5];
// const kub = Map(array, (num) => num ** 3);
// console.log(kub);

