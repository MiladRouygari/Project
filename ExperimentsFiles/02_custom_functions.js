// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
// Costume function for randomization
function getLanguage(){
  return (Math.floor(Math.random()*2) == 0) ? 'german': 'english';
}

function getDilemma(){
  return (Math.floor(Math.random()*2) == 0) ? 'car': 'fairy';
}
function randomiseViewSeq(){
  views_seq_language = [];
  var language= getLanguage();
  console.log(language);
  var dilemma = getDilemma();
  console.log(dilemma);
  if(language == 'german'){
    if(dilemma =="car"){
      views_seq_language = [
          intro,
          instructions,
          dilemma_1_german,
          rating_choice_1_german,
          test_german_man,
          dilemma_2_german,
          rating_choice_2_german,
          test_german_car,
          dilemma_3_german,
          rating_choice_3_german,
          test_german_fairy,
          post_test,
          thanks,
        ]
    }else {
      views_seq_language = [
          intro,
          instructions,
          dilemma_1_german,
          rating_choice_1_german,
          test_german_man,
          dilemma_3_german,
          rating_choice_3_german,
          test_german_fairy,
          dilemma_2_german,
          rating_choice_2_german,
          test_german_car,
          post_test,
          thanks,
        ]
    }

  }else{
    if(dilemma =="car"){
      views_seq_language = [
          intro,
          instructions,
          dilemma_1_english,
          rating_choice_1_english,
          test_comprehension_1_english,
          dilemma_2_english,
          rating_choice_2_english,
          test_comprehension_2_english,
          dilemma_3_english,
          rating_choice_3_english,
          test_comprehension_3_english,
          post_test,
          thanks,
        ]

    }else {
      views_seq_language = [
          intro,
          instructions,
          dilemma_1_english,
          rating_choice_1_english,
          test_comprehension_1_english,
          dilemma_3_english,
          rating_choice_3_english,
          test_comprehension_3_english,
          dilemma_2_english,
          rating_choice_2_english,
          test_comprehension_2_english,
          post_test,
          thanks,
        ]

    }
  }

return views_seq_language
}


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

function getRandomisedRatingChoiceEnglishtest(){


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
    randomised[0] = trial_info.forced_choice_test_english[0]
    // Populate randomised with the next 3 values
    randomised[1] = trial_info.forced_choice_test_english[ranNums[0]]
    randomised[2] = trial_info.forced_choice_test_english[ranNums[1]]
    randomised[3] = trial_info.forced_choice_test_english[ranNums[2]]
  }

  else {
    // vividness is the first 3
    randomised[0] = trial_info.forced_choice_test_english[ranNums[0]]
    randomised[1] = trial_info.forced_choice_test_english[ranNums[1]]
    randomised[2] = trial_info.forced_choice_test_english[ranNums[2]]
    randomised[3] = trial_info.forced_choice_test_english[0]
  }

   return randomised
}



 // You can determine global (random) parameters here
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


const handle_response_functions_2 = {
  post_test: function(config, CT, babe, answer_container_generator, startingTime) {
    $("html, body").css({"overflow":"auto","position":"relative"} );
      console.log("In handle response");
       $(".babe-view").append(answer_container_generator(config, CT));

       $("#next").on("click", function(e) {
           // prevents the form from submitting
           e.preventDefault();

           // records the post test info
           // babe.global_data.age = $("#age").val();
           babe.global_data.age = $("#age").val();
           //babe.global_data.gender = $("#gender").val();
           // babe.global_data.education = $("#education").val();
           babe.global_data.native = $("#languages").val();
           babe.global_data.athome = $("#athome").val();
           babe.global_data.start_age = $("#years").val();
           babe.global_data.abroad = $("#abroad_months").val();
           babe.global_data.dominant = $("#dominant").val();
           babe.global_data.proficiency_german = $("#proficiency_german").val();
           babe.global_data.proficiency_english = $("#proficiency").val();
           babe.global_data.encountered_trolley = $("#encountered_1").val();
           babe.global_data.encountered_car = $("#encountered_2").val();
           babe.global_data.encountered_fairy = $("#encountered_3").val();

           babe.global_data.comments = $("#comments")
           .val()
           .trim();
           babe.global_data.endTime = Date.now();
           babe.global_data.timeSpent =
               (babe.global_data.endTime -
                   babe.global_data.startTime) /
               60000;

           // moves to the next view
           //handle if data wasn't given

          babe.global_data.sub_id = generateID(8);
           var missing = false;
           mustfill= [babe.global_data.native, babe.global_data.athome, babe.global_data.start_age,babe.global_data.abroad, babe.global_data.dominant, babe.global_data.proficiency_german,babe.global_data.proficiency_english];
           mustfill_ids=["languages","athome","years","abroad_months","dominant","proficiency_german","proficiency"];
           mustfill_true_false=[0,0,0,0,0,0,0]
           missingvalues =[];

           mustf



           for(i = 0; i<=  mustfill.length;i++){
           if( mustfill[i]== ""){
             missing =  true;
             mustfill_true_false[i]=0;
           }else {
            mustfill_true_false[i]=1;
              $("#"+ mustfill_ids[i]).css( {"border": "0.5px inset gray","background-color":"#69d9ff"} );
           }
         }
           if(missing == true){
             alert("Please fill in all fields marked with *")
             console.log(mustfill_true_false);
              for(j = 0; j <= mustfill_true_false.length;j++){
                if(mustfill_true_false[j]==0)
                $("#"+ mustfill_ids[j]).css( {"border": "3px solid red","background-color":"pink"} );

                  missing = false;
              }
              //missingvalues=[];
             //document.getElementsByClassName("must").style.backgroundColor="red";
             //$( ".must" ).css( {"border": "3px solid red","background-color":"pink"} );
           } else{
             babe.findNextView();
           }

       });
   },
   button_choice: function(config, CT, babe, answer_container_generator, startingTime) {

        $(".babe-view").append(answer_container_generator(config, CT));

        // attaches an event listener to the yes / no radio inputs
        // when an input is selected a response property with a value equal
        // to the answer is added to the trial object
        // as well as a readingTimes property with value
        $("input[name=answer]").on("change", function() {
            const RT = Date.now() - startingTime;
            let trial_data = {
                trial_name: config.name,
                trial_number: CT + 1,
                response: $("input[name=answer]:checked").val(),
                RT: RT
            };

            trial_data = babeUtils.view.save_config_trial_data(config.data[CT], trial_data);

            babe.trial_data.push(trial_data);
            babe.findNextView();

        });
    },

}
