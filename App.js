import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
const App = () => {
 1. //map method
  // const students = ["Anil", "Sam", "Ravi", "Ram"]
  // students.map((item) => {
  //   console.log("My name is:", item)
  // })
  // var arr = [10,20,30,40]
  // var newArr = arr.map((value) => {
  //   value++;
  //   console.log(value);
  // })

  // const nums = [1, 2, 3]
  // const strs =["one", "two", "three"];
  // const mapped = nums.map((val, index) => [val, strs[index]]);
  // console.log(mapped)
  
 2. //push method- Added at the end of array
  // var name = ["Ram", "Ravi", "Anil", "Sam"];
  // name.push("Rohit");
  // console.log(name);
  // var name_length = name.push("Rohit", "Mohit");
  // console.log(name );
  // console.log(name_length);

  //pop method - Remove at the end of array
  // var name = ["Ram", "Ravi", "Anil", "Sam"];
  // name.pop();
  // console.log(name);
  // var name_removed = name.pop();
  // // console.log(name );
  // console.log(name_removed);

  //unshift- Added at the start of array
  // var name = ["Ram", "Ravi", "Anil", "Sam"];
  // name.unshift("Rohit");
  // console.log(name);
  // var name_length = name.unshift("Rohit", "Mohit");
  // console.log(name );
  // console.log(name_length);

  //shift- Remove at the start of array
  // var name = ["Ram", "Ravi", "Anil", "Sam"];
  // name.shift();
  // console.log(name);
  // var name_removed = name.shift();
  // console.log(name );
  // console.log(name_removed);

  //splice - (start, deletecount, replacevalue)
  // var name =["Ram", "Ravi", "Anil", "Sam", "Rohit"];
  // name.splice(2); // in this after 2 index every element will be deleted
  // console.log(name);
  // name.splice(2,1); // in this after 2 index 1 item will be deleted
  // console.log(name);
  // name.splice(2,3); // in this after 2 index 3 item will be deleted
  // console.log(name);
  // name.splice(2, 0, "Mohit"); // in this after 2 index 0 will be deleted and mohit will be added
  // console.log(name)
  // name.splice(2, 2, "Mohit", "Mani"); // in this after 2 index 2 will be deleted and mohit and mani after 2 index will be deleted
  // console.log(name);

  //slice - (start, end)
  // var name = ["Ram", "Ravi", "Anil", "Sam", "Rohit"]
  // var new_name = name.slice(1,4);
  // console.log(name);

  //concat - joining 2 strings together
  // var name1 = ["Ram", "Ravi", "Anil", "Sam", "Rohit"];
  // var name2 = ["Raj", "Rohan"]
  // var new_name = name1.concat (name2);
  // console.log(new_name)

  //indexOf - It tells the index of the first item search from start ("search item", start)
  // var name = ["Ram", "Ravi", "Anil", "Sam", "Rohit"];
  // // var position = name.indexOf("Mani"); // in this mani is not there so it returns -1
  // // console.log(position);
  // var position = name.indexOf("Anil");
  // console.log(position);

  //lastindexOf - search from last
  // var name = ["Ram", "Ravi", "Anil", "Sam", "Rohit"];
  // var position = name.lastIndexOf("Anil", 4);
  // console.log(position);

  //find - it checks the condition and returns the actual result
  // var ages = [10,23,19,20,25];
  // console.log(ages);
  // var b = ages.find(checkAdult);
  // console.log (b);
  // function checkAdult (age){
  //   return age>=18 // here check which no is equal or greater than 18 23 is greater and it comes in first so it stops here
  // }

  //findIndex - it reurns the index number
  // var ages = [10,23,19,20,25];
  // console.log(ages);
  // var b = ages.findIndex(checkAdult);
  // console.log (b);
  // function checkAdult (age){
  //   return age>=18 // here check which no is equal or greater than 18 23 is greater and it comes in first so it stops here
  // }

  //includes - it search the item if item is there it returns true and if item is not there it reurns false
  // var name = ["Ram", "Ravi", "Anil", "Sam"];
  // console.log(name)
  // // var b = name.includes("Ravi");// item is there it return true
  // // console.log(b);
  // var b = name.includes("Mani")// item is not there it reurns false
  // console.log(b);

  //forEach - it prints every element
  // var name = ["Ram", "Ravi", "Anil", "Sam"];
  // name.forEach(function (value, index){
  //   console.log (index + " : " + value + ":" )
  // })

  //filter - it prints every no who is greater than 18
  // var ages = [10,23,19,20,25];
  // console.log(ages);
  // var b = ages.filter(checkAdult);
  // console.log (b);
  // function checkAdult (age){
  //   return age>=18 // here check which no is equal or greater than 18 and which no is greater it prints all no
  // }

  //reduce - it returns the element in single item it goes left to right
  // var arr = [1, 2, 3, 4, 5];
  // var total = 0;
  // console.log (arr)
  // total = arr.reduce((total, num) => {
  //   return total + num;
  // })
  // console.log (total);

  // const strs = ['t', 's', 'a', 'b'];
  // const best = strs.reduce((c, v) => (c + v));
  // console.log(best);

  //reduceRight - it also makes one item but it goes from right to left
  // var arr = [1, 2, 3, 4, 5];
  // var total = 0;
  // console.log (arr)
  // total = arr.reduceRight((total, num) => {
  //   return total + num;
  // })
  // console.log (total);

  // const strs = ['t', 's', 'a', 'b'];
  // const best = strs.reduceRight((c, v) => (c + v));
  // console.log(best);


  //fill - fill the element in an array with a static value
  // var name = ["Ram", "Ravi", "Anil", "Sam"];
  // name.fill("Sami")
  // console.log(name)

  //join - in this it combine and make one value
  // var a = ["1", "2", "3", "4", "5"]
  // var b = ["6", "7"];
  // var c = a.concat(b);
  // console.log(c);
  // var d = c.join(" ")
  // console.log(d)
  // var d = c.join("  / ")//in this what sign we use it come in output
  // console.log(d)

  //reverse - it reverse the order of the element in an array
  // var arr = [1, 2, 3, 4 ,5];
  // arr.reverse();
  // console.log(arr)

  //sort - it arrange the eement in ascending and descending order
  // var name = ["Ram", "Ravi", "Anil", "Sam", "Mohit"];
  // name.sort();
  // console.log(name)

  //some - in this it checks the condition and if any condition is true it returns true it doesnt check all value
  //  var ages =[20, 15, 19, 12, 27];
  //  console.log(ages);
  //  var b = ages.some(checkAdult);
  //  console.log(b);
  //  function checkAdult(age){
  //   return age>=18
  //  }

  //every - it checks all the values if any value is smaller it return false
  //  var ages =[20, 15, 19, 12, 27];
  //  console.log(ages);
  //  var b = ages.every(checkAdult);
  //  console.log(b);
  //  function checkAdult(age){
  //   return age>=18
  //  }
  
  //flat - it makes multiple array in one array if multiple bracket is there we use infinity
  // var num = [1, 2, [3, 4, [5, 6]]]
  // var newArray = num.flat(Infinity);
  // console.log(newArray);
  
  //flatMap

  // const nums = [1, 2, 3]
  // const strs =["one", "two", "three"];
  // const mapped = nums.flatMap((val, index) => [val, strs[index]]);
  // console.log(mapped)
  
//copyWithin
// const nums = [0, 1,2,3,4,5,6,7,8,9];
// // nums.copyWithin(2);// starting index
// // console.log(nums)
// // nums.copyWithin(0, 2);// starting index
// // console.log(nums)
// nums.copyWithin(0, 2, 6);// starting index
// console.log(nums)

//toString - converts the array into a string
// var a = ["Rahul", "Aman", "Ravi"];
// a.toString(a);
// console.log(a)
// var num = 24;
// var str = num.toString();

// console.log(num); // 24
// console.log(str); // "24"


// let num = ["1", "2","3","4","5"];
// let text = num.toString();
// console.log(text)

// let num = ["A", "B","C","D","D"];
// let text = num.toString();
// console.log(text)


//Array.at
// const list =[1,2,3,4];
// list.at(1)
// console.log(list)
// const scores = [5, 6, 7];

// console.log(scores.at(1));
// console.log(scores)

//tolocaleString

// const number = 3500;
// console.log(number.toLocaleString())

//Array.from() - it converts the every character in string form
// const name ="Nishi"
// const nameArray = Array.from(name);
// console.log(name)
// console.log(nameArray)

//Array.of() -it converts the arguments in array form
// const nums = Array.of(1,2,3,4,5,6);
// console.log(nums)

//Array.isArray-it checks that it is in array form or not if not array then return false
let numbers = [1, 2, 3, 4];
console.log(Array.isArray(numbers));


  return (
    <SafeAreaView>
      <View>
      <Text>Hii i am nishi</Text>
      

        
        </View>
          
    </SafeAreaView>
  );
};



export default App;
