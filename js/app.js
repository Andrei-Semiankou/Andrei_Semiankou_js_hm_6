import users from "./users.js"


// Задание 1
// Получить массив имен всех пользователей (поле name).
// 1.1
//    const getUserNames = users.map((user) => {
//       return user.name;
//    })
//    console.log(getUserNames);

// 1.2
//    const getUserNames = users.map((user) => user.name);
//    console.log(getUserNames);

// 1.3
   const getUserNames = users.map(({name}) => name);
   console.log(getUserNames); // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]




// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
// 2.1
//    let eyeColorToFind = 'blue';
//    const getUsersWithEyeColor = users.filter((user) => {
//        return eyeColorToFind === user.eyeColor;
//    })
//    console.log(getUsersWithEyeColor); 

// 2.2
//      function getUsersWithEyeColor (users, color){
//          return users.filter((user) => {
//              return user.eyeColor === color
//          }) 
//      }
//      console.log(getUsersWithEyeColor(users, 'blue'));

// 2.3
     const getUsersWithEyeColor = (users, color) => users.filter((user) => user.eyeColor === color)
     console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]





//  Задание 3
//  Получить массив имен пользователей по полу (поле gender).
// 3.1
//     function getUsersWithGender (users, gender){
//     return users.filter((user) =>{
//         return user.gender === gender
//     }) .map((user) => {
//         return user.name
//     })          
//   }
//   console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// 3.2
const getUsersWithGender = (users, gender) => users.filter((user) => user.gender === gender) .map((user) => user.name)
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]





// Задание 4
// Получить массив только неактивных пользователей (поле isActive).
// 4.1
// const getInactiveUsers = users => users.filter((user) => !user.isActive)
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// 4.2
//    function getInactiveUsers(users){
//        return users.filter((user) =>{
//         return !user.isActive
//        }) 
//    }
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// 4.3
 const getInactiveUsers = users => users.filter(({isActive}) => !isActive);
 console.log(getInactiveUsers(users));// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]





//  Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).
// 5.1
// const getUserWithEmail = (users, email) => users.find((user)=>user.email === email);
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// 5.2 
 function getUserWithEmail (users, email){
    return users.find((user) =>{
       return user.email === email
    })
 }
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}





// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
// 6.1
// function getUsersWithAge (users, min, max){
//    return users.filter((user) =>{
//       return user.age > min && user.age < max
//    })  
// }
// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// 6.2
const getUsersWithAge = (users, min, max) => users.filter((user) =>user.age > min && user.age < max)
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]




// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.
const calculateTotalBalance = users.reduce((total, user) => {
  return total + user.balance
}, 0);
console.log(calculateTotalBalance); // 20916





// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.
// 8.1
// function getUsersWithFriend (users, friendName)  {
//    return users.filter((user) => {
//       return user.friends.includes(friendName)   
//    }) .map((user) => {
//       return user.name
//    })
// };
// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// 8.2
const getUsersWithFriend = (users, friendName) => users.filter((user) => user.friends.includes(friendName)) .map((user) => user.name);
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]




// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
// 9.1
// function getNamesSortedByFriendsCount(users){
//    return users.sort((a , b) => {
//       return a.friends.length - b.friends.length 
//    }) .map((user) => {
//       return user.name
//    })
// } 
// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// 9.2
 const getNamesSortedByFriendsCount = users => users.sort((a, b) => a.friends.length - b.friends.length ) .map((user) => user.name );
 console.log(getNamesSortedByFriendsCount(users));





// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
function getSortedUniqueSkills (users)  {
  return users.reduce((total, user) => {
     user.skills.forEach((skill) => {
        if (total.indexOf(skill) === -1){
        total.push(skill);
        }

     })
     return total
  },[]) 
      
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]