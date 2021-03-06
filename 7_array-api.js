'use strict';

// Q1. make a string out of an array
{
    console.log('Q1');
    const fruits = ['apple', 'banana', 'orange'];
    //my answer
    let fruitsString = fruits[0] + fruits[1] + fruits[2];
    console.log(fruitsString);
    //answer
    const fruitsString2 = fruits.join();
    console.log(fruitsString2);
}

  // Q2. make an array out of a string
{   
    console.log('Q2');
    const fruits = '๐, ๐ฅ, ๐, ๐';
    //my answer
    const fruits2 = fruits.slice();
    console.log(fruits2);
    //answer
    const result = fruits.split(", ");
    //split์ ๊ตฌ๋ถ์ ํ์
    console.log(result);
}

  // Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    console.log('Q3');
    const array = [1, 2, 3, 4, 5];
    //my answer
    const array2 = array.reverse();
    console.log(array2);
    //answer
    //correct answer

}

  // Q4. make new array without the first two elements
{   
    console.log('Q4');
    const array = [1, 2, 3, 4, 5];
    //my answer
    const array2 = array.slice(2, 5);
    console.log(array2);
    //answer
    //correct answer
}

class Student {
    constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

  // Q5. find a student with the score 90
{
  console.log('Q5');
  //my answer
  for(let i = 0; i < students.length; i++){
    if(students[i].score === 90){
      console.log(students[i].name);
    }
  }
  //answer
  const result = students.find((student) => student.score === 90);
  //find์์ ํจ์๊ฐ true์ด๋ฉด true์ ํด๋นํ๋ obj๋ฅผ ๋ฆฌํดํด์ค๋ค.
  console.log(result);
}

  // Q6. make an array of enrolled students
{
  console.log('Q6');
  //my answer
  const enrolledArray = new Array();
  for(let i = 0; i < students.length; i++){
    if (students[i].enrolled == true){
      enrolledArray.push(students[i]);
    }
  }
  for(let i = 0; i < enrolledArray.length; i++){
    console.log(enrolledArray[i].name);
  }
  //answer
  const result = students.filter((student) => student.enrolled);
  //๋งค๊ฐ๋ณ์๋ฅผ ๋ฐ์์์ ๋ฆฌํด ๊ฐ์ ์กฐ๊ฑด์ ์ถฉ์กฑ์ํค๋ ๊ฐ๋ค๋ง ๋ชจ์ ๋ฐฐ์ด์ ๋ง๋?๋ค.
  console.log(result);
}

  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
{
  console.log('Q7');
  //my answer
  const newArray = new Array();
  for (let i = 0;  i < students.length; i++){
    newArray.push(students[i].score);
  }
  console.log(newArray);
  //answer
  const result = students.map((student) => student.score);
  //๋งค๊ฐ๋ณ์๋ก ๋ฐ์์จ ๊ฐ์ ๋ฆฌํด ๊ฐ์ผ๋ก ๋ฐ๊พธ์ด ๋ฐฐ์ด์ ์๋กญ๊ฒ ๋ง๋?๋ค.
  console.log(result);
}

  // Q8. check if there is a student with the score lower than 50
{
  console.log('Q8');
  //my answer
  const newArray = new Array();
  for (let i = 0;  i < students.length; i++){
    newArray.push(students[i].score);
  }
  
  for(let i = 0; i < newArray.length; i++){
    if(newArray[i] < 50){
      console.log('yes');
      //์?์๊ฐ 50์ดํ์ธ ํ์์ด ์๋ค.
      break;
    }
    else if(i === 4){
      console.log('no');
      //์๋ค.
    }
  }
  //answer
  const result = students.some((student) => student.score < 50);
  console.log(result);
  //ํ๋๋ผ๋ ๋ง์กฑํ๋ ๊ฒ์ด ์๋๊ฐ
  const result2 = students.every((student) => student.score < 50);
  console.log(result2);
  //๋ชจ๋ ๋ง์กฑํ๋๊ฐ
}

  // Q9. compute students' average score
{
  console.log('Q9');
  //my answer
  let scoreSum = 0;
  let average;
  const newArray = new Array();
  for (let i = 0;  i < students.length; i++){
    scoreSum += students[i].score;
  }
  average = scoreSum/(students.length);
  console.log(average);
  //answer (for explain)
  const result = students.reduce((prev, curr) => { //reduceRight์ ๋ฐ๋๋ฐฉํฅ์์ ๋ถํฐ ์์
    console.log('-------')
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0); //initial value
  //๋ฐฐ์ด ์์ ๊ฐ์ ๋์?ํ๋ api
  console.log(result / students.length);
  //answer (simple)
  const result2 = students.reduce((prev, curr) => prev + curr.score, 0); //initial value
  //๋ฐฐ์ด ์์ ๊ฐ์ ๋์?ํ๋ api
  console.log(result2 / students.length);
}

  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
{
  console.log('Q10');
  //my answer
  const newArray = new Array();
  for (let i = 0;  i < students.length; i++){
    newArray.push(students[i].score);
  }
  const newArray2 = newArray.join();
  console.log(newArray2);
  //answer (my answer)
  const result = (students.map((student) => student.score)).join();
  console.log(result);
  //answer (simple expression)
  const result2 = students
    .map((student) => student.score)
    .join();
  console.log(result2);
  //correct
}

  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
{
  console.log('Bonus');
  //my answer
  const newArray = new Array();
  for (let i = 0;  i < students.length; i++){
    newArray.push(students[i].score);
  }
  newArray.sort();
  const newArray2 = newArray.join();
  console.log(newArray2);
  // answer (my answer)
  const result = students
    .map(student => student.score)
    .sort() //.sort((a, b) => b - a) >> ๋ฐ๋๋ก ์?๋?ฌ
    .join();
  console.log(result);
}

/**
 * Array APIs
 * .join()
 * .split()
 * .reverse()
 * .slice()
 * .find()
 * .filter()
 * .map()
 * .some()
 * .every()
 * .reduce()
 * .sort()
 */