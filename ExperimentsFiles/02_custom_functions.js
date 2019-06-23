// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
// Costume function for randomization

// This is for German1
function getRandomisedRatingChoiceGerman1(){
  firstBlock = (Math.floor(Math.random()*2) == 0) ? 'decision': 'vividness';

//Getting a random  set of numbers between 1 2 3 with no repeate
  var nums = [1,2,3],
    ranNums = [],
    i = nums.length,
    j = 0;

  while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
  }

//creating blocks as in first decision then the other 3 vividness or vise versa
   var randomised = new Array(4)
  if (firstBlock == 'decision'){
    randomised[0] = trial_info.forced_choice_1_german[0]
    // Populate randomised with the next 3 values
    randomised[1] = trial_info.forced_choice_1_german[ranNums[0]]
    randomised[2] = trial_info.forced_choice_1_german[ranNums[1]]
    randomised[3] = trial_info.forced_choice_1_german[ranNums[2]]
  }

  else {
    // vividness is the first 3
    randomised[0] = trial_info.forced_choice_1_german[ranNums[0]]
    randomised[1] = trial_info.forced_choice_1_german[ranNums[1]]
    randomised[2] = trial_info.forced_choice_1_german[ranNums[2]]
    randomised[3] = trial_info.forced_choice_1_german[0]
  }

   return randomised
}

// German 2
function getRandomisedRatingChoiceGerman2(){
  firstBlock = (Math.floor(Math.random()*2) == 0) ? 'decision': 'vividness';

  var nums = [1,2,3],
    ranNums = [],
    i = nums.length,
    j = 0;

  while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
  }

   var randomised = new Array(4)
  if (firstBlock == 'decision'){
    randomised[0] = trial_info.forced_choice_2_german[0]
    // Populate randomised with the next 3 values
    randomised[1] = trial_info.forced_choice_2_german[ranNums[0]]
    randomised[2] = trial_info.forced_choice_2_german[ranNums[1]]
    randomised[3] = trial_info.forced_choice_2_german[ranNums[2]]
  }

  else {
    // vividness is the first 3
    randomised[0] = trial_info.forced_choice_2_german[ranNums[0]]
    randomised[1] = trial_info.forced_choice_2_german[ranNums[1]]
    randomised[2] = trial_info.forced_choice_2_german[ranNums[2]]
    randomised[3] = trial_info.forced_choice_2_german[0]
  }

   return randomised
}

// German 3
function getRandomisedRatingChoiceGerman3(){
  firstBlock = (Math.floor(Math.random()*2) == 0) ? 'decision': 'vividness';

  var nums = [1,2,3],
    ranNums = [],
    i = nums.length,
    j = 0;

  while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
  }

   var randomised = new Array(4)
  if (firstBlock == 'decision'){
    randomised[0] = trial_info.forced_choice_3_german[0]
    // Populate randomised with the next 3 values
    randomised[1] = trial_info.forced_choice_3_german[ranNums[0]]
    randomised[2] = trial_info.forced_choice_3_german[ranNums[1]]
    randomised[3] = trial_info.forced_choice_3_german[ranNums[2]]
  }

  else {
    // vividness is the first 3
    randomised[0] = trial_info.forced_choice_3_german[ranNums[0]]
    randomised[1] = trial_info.forced_choice_3_german[ranNums[1]]
    randomised[2] = trial_info.forced_choice_3_german[ranNums[2]]
    randomised[3] = trial_info.forced_choice_3_german[0]
  }

   return randomised
}

// Enlgish1
function getRandomisedRatingChoiceEnglish1(){
  firstBlock = (Math.floor(Math.random()*2) == 0) ? 'decision': 'vividness';

  var nums = [1,2,3],
    ranNums = [],
    i = nums.length,
    j = 0;

  while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
  }

   var randomised = new Array(4)
  if (firstBlock == 'decision'){
    randomised[0] = trial_info.forced_choice_1_english[0]
    // Populate randomised with the next 3 values
    randomised[1] = trial_info.forced_choice_1_english[ranNums[0]]
    randomised[2] = trial_info.forced_choice_1_english[ranNums[1]]
    randomised[3] = trial_info.forced_choice_1_english[ranNums[2]]
  }

  else {
    // vividness is the first 3
    randomised[0] = trial_info.forced_choice_1_english[ranNums[0]]
    randomised[1] = trial_info.forced_choice_1_english[ranNums[1]]
    randomised[2] = trial_info.forced_choice_1_english[ranNums[2]]
    randomised[3] = trial_info.forced_choice_1_english[0]
  }

   return randomised
}
// English 2
function getRandomisedRatingChoiceEnglish2(){
  firstBlock = (Math.floor(Math.random()*2) == 0) ? 'decision': 'vividness';

  var nums = [1,2,3],
    ranNums = [],
    i = nums.length,
    j = 0;

  while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
  }

   var randomised = new Array(4)
  if (firstBlock == 'decision'){
    randomised[0] = trial_info.forced_choice_2_english[0]
    // Populate randomised with the next 3 values
    randomised[1] = trial_info.forced_choice_2_english[ranNums[0]]
    randomised[2] = trial_info.forced_choice_2_english[ranNums[1]]
    randomised[3] = trial_info.forced_choice_2_english[ranNums[2]]
  }

  else {
    // vividness is the first 3
    randomised[0] = trial_info.forced_choice_2_english[ranNums[0]]
    randomised[1] = trial_info.forced_choice_2_english[ranNums[1]]
    randomised[2] = trial_info.forced_choice_2_english[ranNums[2]]
    randomised[3] = trial_info.forced_choice_2_english[0]
  }

   return randomised
}
// English 3
function getRandomisedRatingChoiceEnglish3(){
  firstBlock = (Math.floor(Math.random()*2) == 0) ? 'decision': 'vividness';

  var nums = [1,2,3],
    ranNums = [],
    i = nums.length,
    j = 0;

  while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
  }

   var randomised = new Array(4)
  if (firstBlock == 'decision'){
    randomised[0] = trial_info.forced_choice_3_english[0]
    // Populate randomised with the next 3 values
    randomised[1] = trial_info.forced_choice_3_english[ranNums[0]]
    randomised[2] = trial_info.forced_choice_3_english[ranNums[1]]
    randomised[3] = trial_info.forced_choice_3_english[ranNums[2]]
  }

  else {
    // vividness is the first 3
    randomised[0] = trial_info.forced_choice_3_english[ranNums[0]]
    randomised[1] = trial_info.forced_choice_3_english[ranNums[1]]
    randomised[2] = trial_info.forced_choice_3_english[ranNums[2]]
    randomised[3] = trial_info.forced_choice_3_english[0]
  }

   return randomised
}



const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here



/* Helper functions
*
*
*/


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here



/* Hooks
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
