// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// .some() returns one truthy and one falsy
const currentYear = new Date().getFullYear();

// Array.prototype.every() // is everyone 19 or older?
const checkAge = people.some(person => ((currentYear - person.year) >= 19) ? true : false);
console.table(people);
console.table(comments);
console.log(`All people above are 19 or over: ${checkAge}`);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const input = 823423;

const idSearch = comments.find(comment => comment.id == input);
console.log(`Using .find() >>  input: ${input} comment: ${idSearch.text}`);

// Array.prototype.findIndex()
// Find the comment with this ID
const index = comments.findIndex(comment => comment.id == input);
console.log(`using .findIndex() >> input: ${input} index: ${index} comment: ${comments[index].text}`);

// delete the comment with the ID of 823423
// to delete using .splice(), index of item is needed, ie .splice(index of item to start splicing, # of elements to delete)
// Note to self: https://love2dev.com/blog/javascript-remove-from-array/
console.log("%c%s",
  "color: white; background: green; font-size: 14px;",
  `Hey, you! Run splice(); in the console to delete comment with an id of ${input}`);

splice = () => {
  comments.splice(index, 1);
  console.table(comments);
  console.log("%c%s",
    "color: white; background: green; font-size: 14px;",
    `Above table should be missing comment with id of ${input}`);
  };
