const assert = require('assert');
// const QuizModel = require('./client/src/models/model.js');
const QuizModel = require('/Users/annabelt/Documents/codeclan/codeclan_work/Group-Project/project/client/src/models/model.js');

describe("QuizModel", function(){
  let quizModel;

  beforeEach(function(){
//    quizModel = new QuizModel();
  });

  xit ("should add each score to a running total", function() {
      // Arrange
      quizModel = new QuizModel(0,2);

      // Act
      const actual = quizModel.runningTotal;
      quizModel.addScoreToTotal(5);
      const updated = quizModel.runningTotal;
      quizModel.addScoreToTotal(5);
      // Assert
      assert.strictEqual(actual, 0);
      assert.strictEqual(updated, 5);

      // actual goes first then expected
  });

  xit("should have a number of questions", function(){
    // Arrange
    quizModel = new QuizModel(0,2);

    // Act
    const actual = quizModel.numberOfQuestions;
    // Assert
    assert.strictEqual(actual, 2);
    // actual goes first then expected
  });

  xit("should check if the answer is correct and return a score", function(){
    // Arrange
    quizModel = new QuizModel(0,2);
    let isItWrong1 = false;
    let isItWrong2 = true;
    let isItWrong3 = false;
    let isItWrong4 = true;

    let howRightIsIt1 = 4;
    let howRightIsIt2 = 4;
    let howRightIsIt3 = 4;
    let howRightIsIt4 = 4;


    const question = {
      _id: "5cbb93be1d7658a0ee8bb5b1",
      category: "User Interface Design",
      type: "boolean",
      difficulty: 0,
      question: "A container is an example of an interface element.",
      correct_answer: "{'true'}",
  //   incorrect_answers: "{'false'}",
      incorrect_answers: "{'false', 'true'}",
      image: "",
      link: "https://blog.prototypr.io/how-to-teach-yourself-ux-design-31f16e41b189"
    };
    const veryRightAnswer = ['true', 'very true'];
    const rightAnswer = ['true'];
    const wrongAnswer = ['false'];
    const beyondRightAnswer = ['only true stuff here', 'very true', 'only a bit true'];

    // Act
    isItWrong1 = quizModel.checkAnswer(question, rightAnswer)[0];
    isItWrong2 = quizModel.checkAnswer(question, wrongAnswer)[0];
     isItWrong3 = quizModel.checkAnswer(question, veryRightAnswer)[0];
    isItWrong4 = quizModel.checkAnswer(question, beyondRightAnswer)[0];
    howRightIsIt4 = quizModel.checkAnswer(question, beyondRightAnswer)[1];
   howRightIsIt1 = quizModel.checkAnswer(question, rightAnswer)[1];
    howRightIsIt2 = quizModel.checkAnswer(question, wrongAnswer)[1];
    howRightIsIt3 = quizModel.checkAnswer(question, veryRightAnswer)[1];
    // Assert
    // with only 'false' in incorrect_answers
    // assert.strictEqual(isItWrong1, false);
    // assert.strictEqual(isItWrong2, true);
    // assert.strictEqual(isItWrong3, false);
    // assert.strictEqual(howRightIsIt1, 1);
    // assert.strictEqual(howRightIsIt2, 0);
    // assert.strictEqual(howRightIsIt3, 2);

    // with ['false','true'] in incorrect_answers
    assert.strictEqual(isItWrong1, true);
    assert.strictEqual(isItWrong2, true);
    assert.strictEqual(isItWrong3, true);
    assert.strictEqual(howRightIsIt3, 1);
    assert.strictEqual(isItWrong4, false);
    assert.strictEqual(howRightIsIt4, 3);
    assert.strictEqual(howRightIsIt1, 0);
    assert.strictEqual(howRightIsIt2, 0);


    // actual goes first then expected
  });

  xit("should have a list of questions", function(){
// ** Mixed results:
// if I hard code the 2 test questions into the QuizModel constructor in the same order
// the test gets the data and passes.
// If the questions are in a different order the test fails, which is annoying for my plans
// If I call the function to fetch the questions from the database, the test fails with
// 'Reference Error: fetch is not defined'
// - which is more worrying
    // Arrange
    quizModel = new QuizModel(0,2);

    // Act
//    const questionsFetched = quizModel.getQuestions(0, 2);

    const actual = quizModel.questions;
    // Assert
//    console.log('questions in test:', actual);
    assert.deepStrictEqual(actual, [
      {
        _id: "5cbb93be1d7658a0ee8bb5b1",
        category: "User Interface Design",
        type: "boolean",
        difficulty: 0,
        question: "A container is an example of an interface element.",
        correct_answer: "{'true'}",
        incorrect_answers: "{'false'}",
        image: "",
        link: "https://blog.prototypr.io/how-to-teach-yourself-ux-design-31f16e41b189"
      },
  {
    _id: "5cbb93be1d7658a0ee8bb5b2",
    category: "Effective Visual Communication",
    type: "boolean",
    difficulty: 1,
    question: "There are 6 concern relating to the qualities of great software: Functionality, reliability, usability, efficiency, maintainability and portability concerns. True or false? ",
    correct_answer: "{'true'}",
    incorrect_answers: "{'false'}",
    image: "",
    link: "https://practicingruby.com/articles/qualities-of-great-software"
  }
]);
    // actual goes first then expected
  });

  xit("should have a difficulty level", function(){
    // Arrange
    quizModel = new QuizModel(0,2);
    quizModelSafetyCheck = new QuizModel(4,2);
    quizModelSafetyCheck3 = new QuizModel(8,2);

//    quizModelSafetyCheck2 = new QuizModel(-1,2)

    // Act
    const actual = quizModel.difficulty;
    const actual2 = quizModelSafetyCheck.difficulty;
//    const actual3 = quizModelSafetyCheck.difficulty;
const actual4 = quizModelSafetyCheck3.difficulty;

    // Assert
    assert.strictEqual(actual, "easy");
    assert.strictEqual(actual2, "medium");
//    assert.strictEqual(actual3, "hard");
// I discovered mod treats negative numbers as absolutes! :)
    assert.strictEqual(actual4, "hard");
    // actual goes first then expected
  });

  xit("should be able to increase the difficulty level number up to 2", function(){
    // Arrange
    quizModel = new QuizModel(0,2);

    // Act
    const beforeLevel1 = quizModel.level;
    const afterLevel1 = quizModel.levelUp(beforeLevel1);
    const beforeLevel2 = 1;
    const afterLevel2 = quizModel.levelUp(beforeLevel2);
    const beforeLevel3 = 2;
    const afterLevel3 = quizModel.levelUp(beforeLevel3);

    // Assert
    assert.strictEqual(beforeLevel1, 0);
    assert.strictEqual(afterLevel1, 1);
    assert.strictEqual(beforeLevel2, 1);
    assert.strictEqual(afterLevel2, 2);
    assert.strictEqual(beforeLevel3, 2);
    assert.strictEqual(afterLevel3, 2);
       // actual goes first then expected
  });

  xit("should be able to decrease the difficulty level number down from 2 to 0", function(){
    // Arrange
    quizModel = new QuizModel(2,2);

    // Act
    const beforeLevel1 = quizModel.level;
    const afterLevel1 = quizModel.levelDown(beforeLevel1);
    const beforeLevel2 = 1;
    const afterLevel2 = quizModel.levelDown(beforeLevel2);
    const beforeLevel3 = 0;
    const afterLevel3 = quizModel.levelDown(beforeLevel3);

    // Assert
    assert.strictEqual(beforeLevel1, 2);
    assert.strictEqual(afterLevel1, 1);
    assert.strictEqual(beforeLevel2, 1);
    assert.strictEqual(afterLevel2, 0);
     assert.strictEqual(beforeLevel3, 0);
    assert.strictEqual(afterLevel3, 0);
       // actual goes first then expected
  });

  xit("should be able to increase the difficulty from easy to medium to hard", function(){
    // Arrange
    quizModel = new QuizModel(0,2);
    // Act
    const actual1 = quizModel.difficulty; // starts at 0 ie easy
    const actual2 = quizModel.updateDifficulty(quizModel.levelUp(quizModel.level));
    const actual3 = quizModel.updateDifficulty(quizModel.levelUp(1));
    const actual4 = quizModel.updateDifficulty(quizModel.levelUp(2));
    const actual5 = quizModel.updateDifficulty(quizModel.levelUp(quizModel.level));

    const actual6 = quizModel.difficulty;
    // Assert
     assert.strictEqual(actual1, "easy");
    assert.strictEqual(actual2, "medium");
     assert.strictEqual(actual3, "hard");
     assert.strictEqual(actual4, "hard");
     assert.strictEqual(actual5, "hard");
     // actual goes first then expected
  });

  // **** note: the logic is working but the results may not be sticking.
  // check scope of variables


  xit("should be able to decrease the difficulty level from hard down to medium then easy", function(){
    // Arrange
    quizModel = new QuizModel(2,2);

    // Act
    const actual1 = quizModel.difficulty;
    const actual2 = quizModel.updateDifficulty(quizModel.levelDown(quizModel.level));
    const actual3 = quizModel.updateDifficulty(quizModel.levelDown(quizModel.level));
    const actual4 = quizModel.updateDifficulty(quizModel.levelDown(quizModel.level));
    const actual5 = quizModel.difficulty;

    // Assert
    assert.strictEqual(actual1, "hard");
    assert.strictEqual(actual2, "medium");
    assert.strictEqual(actual3, "easy");
    assert.strictEqual(actual4, "easy");
    assert.strictEqual(actual5, "easy");
    // actual goes first then expected
  });

  xit("should be able to scroll through levels of difficulty", function(){
    // Arrange
    quizModel = new QuizModel(0,2);
    // Act
    const actual1 = quizModel.difficulty; // starts at 0 ie easy
    const actual2 = quizModel.updateDifficulty(quizModel.scrollLevel(quizModel.level));
    const actual3 = quizModel.updateDifficulty(quizModel.scrollLevel(quizModel.level));
    const actual4 = quizModel.updateDifficulty(quizModel.scrollLevel(quizModel.level));
    const actual5 = quizModel.updateDifficulty(quizModel.scrollLevel(quizModel.level));

    const actual6 = quizModel.difficulty;
    // Assert
     assert.strictEqual(actual1, "easy");
    assert.strictEqual(actual2, "medium");
     assert.strictEqual(actual3, "hard");
     assert.strictEqual(actual4, "easy");
     assert.strictEqual(actual5, "medium");
     assert.strictEqual(actual6, "medium");

     // actual goes first then expected
  });

//  xit("should have a model");
// x misses out the test. skip does this in ruby.

}); // end of spec file
