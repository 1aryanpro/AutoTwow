/*
Deviation Variance Test
  STEP 1: Create ideal string of specified length
  STEP 2: Assign each character a value based on position
  STEP 3: Ask for new string (Check if it's the right length)
  STEP 4: Cycle through all elements of test string
    subtract actual score from 'ideal' score, take absolute value
    sum all values, divide by specified length
  STEP 5: Print variance score
  EXTRAS?: Allow strings to be any letters A-Z, relative 'off'ness
    compare against what would be the most ideal of the given set
*/

function deviationVariance(inputVote) {
  let screenSize = 8;
  ideal = new Array();
  for (let i = 0; i < screenSize; i++) {
    ideal.push(String.fromCharCode(65 + i));
  }
  voteArray = inputVote.split('');
  deviations = new Array();
  for (let i = 0; i < voteArray.length; i++) {
    const findIdeal = (element) => element == voteArray[i];
    let idealScore = (ideal.findIndex(findIdeal) / (screenSize - 1)) * 100;
    let votedScore = (i / (screenSize - 1)) * 100;
    deviations.push(Math.abs(idealScore - votedScore));
  }
  let deviationSum = 0;
  for (let i = 0; i < deviations.length; i++) {
    deviationSum += deviations[i];
  }
  console.log(
    'The average deviation for this vote was: ' +
      deviationSum / screenSize +
      '%'
  );
}
deviationVariance('HABGDFEC');

function AZVariance(inputVote) {
  let screenSize = 8;
  let leaderboardLen = 26
  ideal = new Array();
  for (let i = 0; i < leaderboardLen; i++) {
    ideal.push(String.fromCharCode(65 + i));
  }
  voteArray = inputVote.split('');
  function deviateLoop(array){
    swerve = new Array();
    for (let i = 0; i < voteArray.length; i++) {
      const findIdeal = (element) => element == array[i];
      let idealScore = (ideal.findIndex(findIdeal) / (leaderboardLen - 1)) * 100;
      let votedScore = (i / (screenSize - 1)) * 100;
      swerve.push(Math.abs(idealScore - votedScore));
    }
    return (swerve);
  }
  deviations = deviateLoop(voteArray);
  let deviationSum = 0;
  for (let i = 0; i < deviations.length; i++) {
    deviationSum += deviations[i];
  }
  console.log(deviationSum);
  perfectVote = voteArray.sort()
  perfectDev = deviateLoop(perfectVote);
  let perfectSum = 0;
  for (let i = 0; i<perfectDev.length;i++){
    perfectSum += perfectDev[i];
  }
  console.log(perfectSum)
  finalDev = (deviationSum/screenSize) - (perfectSum/screenSize)
  console.log('The average deviation for this vote was: ' + finalDev + '%');
}
AZVariance('ZSRNLJEA');
