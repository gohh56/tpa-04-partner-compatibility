const { candidates } = require('./data/candidates-data.js');

const calculateBestMatch = function(quizSubmissions) {
  // TODO: replace this...
  // TODO: implement the following algorithm for
  // calculating the candidate who is the best match for you

  // set closest match to 1st candidate
  let closestMatch = candidates[0];
  let currentPersonPointCount = 0;
  let maxPointCount = 0;

  // for each candidate
  //  for each question
  //    if question values are exactly the same
  //      add 2 points
  //    if question values are one score away
  //      add 1 point
  //  update the closest match
  for (let i = 0; i < candidates.length; i += 1) {
    for (let j = 2; j < candidates[i].length; j += 1) {
      for (let k = 0; k < candidates[i][j].length; k += 1) {
        if (candidates[i][j][k].value === quizSubmissions[j][k].value) {
          currentPersonPointCount += 2;
        } else if (Math.abs(candidates[i][j][k].value - quizSubmissions[j][k].value) === 1) {
          currentPersonPointCount += 1;
        }
      }
    }
    if (currentPersonPointCount >= maxPointCount) {
      closestMatch = candidates[i];
      maxPointCount = currentPersonPointCount;
    }
    currentPersonPointCount = 0;
  }

  // for ties, the last person who has the highest score is returned

  // return closest match
  return closestMatch;
};

module.exports = {
  calculateBestMatch,
};
