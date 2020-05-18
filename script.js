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
    const currentYear = new Date().getFullYear();
    // Array.prototype.every() // is everyone 19 or older?
    // const isAdult = people.some(function (person) {
    //   if ((currentYear - person.year) >= 19) {
    //     return true;
    //   }
    // });
    const isAdult = people.some(person => ((currentYear - person.year) >= 19) ? true : false);

    // display the array & result
    console.table(people);
    console.log(`Everyone in the array above is an adult: ${isAdult}`);


    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    //get input for ID number
    const input = document.querySelector("#input");
    const button = document.querySelector("#button");
    const display = document.querySelector("#display");

    //event listener for clicking Search
    const search = button.addEventListener('click', () => {
      displayComment();
      findCommentByIndex();
    });

    // Array.prototype.findIndex()
    // Find the comment with this ID

//search for the comment - used Number() to convert string input to number value
const displayComment = () => {
      const comment = comments.find(function (comment){
        if ((Number(input.value)) == comment.id){
          display.innerHTML = comment.text;
          return 1;
        };
      });
    };

const findCommentByIndex = () => {
const findIndex = comments.findIndex(function (comment) {
      return (Number(input.value)) == comment.id;
    });
console.log(`Comment for index ${findIndex}: ${comments[findIndex].text}`);
};
    // delete the comment with the ID of 823423

    const deleteButton = document.querySelector("#delete");

    const deleteComment = deleteButton.addEventListener('click', function (element) {
      const deleteIndex = comments.findIndex(function (comment) {
      return (Number(input.value)) == comment.id;
    });
delete comments[deleteIndex];
console.table(comments);
    });
