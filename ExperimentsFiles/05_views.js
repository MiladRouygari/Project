comprehension_test// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator("intro",{
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    title: 'Willkommen!',
    text:   `Im Rahmen von unserem Kurs „Experimental Psychology Lab“ replizieren wir eine Studie.
            Vielen Dank, dass du an unserem Experiment teilnimmst, damit unterstützt Du uns sehr.
            <br />
            <br />
            Es ist wichtig, dass Du dieses Experiment eigenständig und fokussiert bearbeitest.
            Bitte schalte alles aus, was Dich ablenken könnte (z.B. Hintergrundmusik, Fernseher, Benachrichtigungsmitteilungen an deinem Handy, …).
            <br />
            <br />
            Das Experiment wird ungefähr 15 Minuten dauern.
 `,
   buttonText: 'Zum Experiment'
});

// For most tasks, you need instructions views
const instructions = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instrucions',
    title: 'Anleitung',
    text:  `Um an diesem Experiment teilzunehmen, ist es notwendig, dass Du Deutsch Muttersprachler*in bist und in der Lage Englisch zu verstehen.
            <br />
            <br />
            Im Folgenden wirst Du 3 Dilemmata lesen und dazu Fragen beantworten.
            Lese Dir die Dilemmata sorgfältig durch und stelle sicher, dass Du sie verstanden hast.
            Bitte nutze dafür keine Übersetzungsinstrumente.
            <br />
            <br />
            Falls Du auch nach sorgfältigem Lesen das Dilemma nicht verstanden haben solltest,
            wirst du später die Möglichkeit haben, dies anzugeben.
            <br />
            <br />
            Wenn Du bereit bist, kannst du nun das Experiment beginnen.
`,
    buttonText: 'Zum Experiment'
});

// Dilemma description in German
const dilemma_1_german = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'dilemma_1_german',
    title: 'Dilemma',
    text:  `Stell dir vor, du stehst auf einer Brücke von der aus du mehrere Bahngleise überblicken kannst.
    Du siehst ein Gleis auf dem fünf Personen festgebunden sind und einen Wagon, der auf sie zufährt.
    Du schaust zu deiner linken und da ist ein großer und schwerer Mann, der neben dir steht.
    Die einzige Möglichkeit den Wagon zu stoppen, ist den Mann von der Brücke auf die Gleise zu stoßen,
    was den Mann tötet, aber fünf Menschen rettet.`,
    buttonText: 'Zu den Fragen'
});

const dilemma_2_german = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'dilemma_2_german',
    title: 'Dilemma',
    text:  `Stell dir vor, du reist mit dem Auto, vor dir siehst du zwei Fahrbahnen.
    Du siehst fünf Fahrradfahrer, die darauf warten, dass die Ampel umschaltet (die auf die Ampel warten) und das Auto fährt direkt auf sie zu, zu schnell um rechtzeitig zu bremsen.
    Du schaust zu deiner linken und siehst einen Mann, der zu Fuß geht (der die Straße überqueren will?)
    Die einzige Möglichkeit den Zusammenstoß mit den Fahrradfahrern zu verhindern ist das Lenkrad herumzureißen,
    die Spur zu wechseln, was die gehende Person tötet aber fünf Menschen rettet.`,
    buttonText: 'Zu den Fragen'
});



// Dilemma description in English
const dilemma_1_english = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'dilemma_1_english',
    title: 'Dilemma',
    text:  `Imagine you are standing on a bridge overlooking a set of train tracks.
    You see five people tied to the track and a runaway trolley is barrelling towards them.
    You look to your left and there is a large and heavy man standing next to you.
    The only way to stop the trolley would be to push that man off the bridge and onto the tracks,
    killing the man but saving five people.`,
    buttonText: 'To the questions'
});

const dilemma_2_english = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'dilemma_2_english',
    title: 'Dilemma',
    text:  `Imagine you are traveling by car seeing two lanes in front of you.
    You see five bikers waiting for the traffic light and the car is heading towards them.
    You look to your left and see a lane where a person in walking.
    The only way to avoid the crash would to jerk the wheel and thereby switch the lane,
    killing the one walking person but saving five people.`,
    buttonText: 'To the questions'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator("post_test", {
    trials: 1,
    name: 'post_test',
    title: 'Zusätzliche Informationen',
    text: 'Die folgenden Fragen zu beantworten ist optional, aber deine Antworten helfen uns bei der Analyse.',

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    buttonText: 'Weiter',
    age_question: 'Alter',
    gender_question: 'Geschlecht',
    gender_male: 'männlich',
    gender_female: 'weiblich',
    gender_other: 'divers',
    edu_question: 'Höchster erreichter Bildungsabschluss',
    edu_secondary_school:'Haupt-/Realschulabschluss',
    edu_graduated_high_school: '(Fach-)Abitur',
    edu_graduated_college: 'Bachelor oder vergleichbares',
    edu_higher_degree: 'Höherer Universitärer Abschluss',
    edu_training:'Vollendete Ausbildung',
    languages_question: 'Deutsch als Muttersprache',
    languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    //age_question: 'Alter ab dem Englisch gerlernt',
    comments_question: 'Weitere Kommentare'
},

//{
//stimulus_container_generator: stimulus_container_generators.basic_stimulus,
// or     {
    //     stimulus_container_generator: function (config, CT) {
    //         return `<div class='babe-view'>
    //                   <div class='babe-view-stimulus-container'>
    //                     <img src="${config.data[CT].picture}" height="42" width="42">
    //                     <img src="${config.data[CT].picture}" height="42" width="42">
    //                   </div>
    //                 </div>`;}
    // }
{

  //  changes for additional Informationen
  // not quite sure how to do it (yet)
  answer_container_generator: function(config,CT){
    const quest = babeUtils.view.fill_defaults_post_test(config);
    return `<form>
            <p class='babe-view-text'>
                <label for="age">${quest.age.title}:</label>
                <input type="number" name="age" min="16" max="110" id="age" />
            </p>
            <p class='babe-view-text'>
                <label for="gender">${quest.gender.title}:</label>
                <select id="gender" name="gender">
                    <option></option>
                    <option value="${quest.gender.male}">${quest.gender.male}</option>
                    <option value="${quest.gender.female}">${quest.gender.female}</option>
                    <option value="${quest.gender.other}">${quest.gender.other}</option>
                </select>
            </p>
            <p class='babe-view-text'>
                <label for="education">${quest.edu.title}:</label>
                <select id="education" name="education">
                    <option></option>
                    <option value="${quest.edu.graduated_high_school}">${quest.edu.graduated_high_school}</option>
                    <option value="${quest.edu.graduated_college}">${quest.edu.graduated_college}</option>
                    <option value="${quest.edu.higher_degree}">${quest.edu.higher_degree}</option>
                    <option value="${"abgeschlossene Berufsausbildung"}">${"abgeschlossene Berufsausbildung"}</option>
                    <option value="${"Haupt- oder Realschulabschluss"}">${"Haupt- oder Realschulsbschluss"}</option>
                </select>
            </p>
            <p class='babe-view-text'>
                <label for="languages">${quest.langs.title}:</label>
                <select id="languages" name="languages">
                    <option></option>
                    <option value="${"ja"}">${"ja"}</option>
                    <option value="${"nein"}">${"nein"}</option>
                </select>
            <p class='babe-view-text'>
                <label if="foreign" for="foreign">${"Englisch als Fremdsprache <br />(in Jahren)"}:</label>
                <input type="number" name="foreign" min="0" max="110" id="years" />
            </p>
            <p class='babe-view-text'>
                <label for="living_abroad">${"Auslandsaufenthalte in einem englischsprachigen Ländern<br>(in Monaten)"}:</label>
                <input type="number" name="living_abroad" min="0" max="110" id="abroad_months" />
            </p>
            <p class='babe-view-text'>
                <label for="provicency">${"Bewerte deine Englischkenntinisse auf einer Skala von 1 bis 7"}:</label>
                <select id="provicency" name="provicency">
                    <option></option>
                    <option value="${"1"}">${"1"}</option>
                    <option value="${"2"}">${"2"}</option>
                    <option value="${"3"}">${"3"}</option>
                    <option value="${"4"}">${"4"}</option>
                    <option value="${"5"}">${"5"}</option>
                    <option value="${"6"}">${"6"}</option>
                    <option value="${"7"}">${"7"}</option>


                </select>
            <p class="babe-view-text">
                <label for="comments">${quest.comments.title}</label>
                <textarea name="comments" id="comments" rows="6" cols="40"></textarea>
            </p>
            <button id="next" class='babe-view-button'>${config.button}</button>
    </form>`
  },
  handle_response_function: handle_response_functions_2.post_test,
},

// {
// handle_response_functions: function(config, CT, babe, answer_container_generator, startingTime) {
//         $(".babe-view").append(answer_container_generator(config, CT));
//
//         $("#next").on("click", function(e) {
//             // prevents the form from submitting
//             e.preventDefault();
//
//             // records the post test info
//             babe.global_data.age = $("#age").val();
//             babe.global_data.gender = $("#gender").val();
//             babe.global_data.education = $("#education").val();
//             babe.global_data.languages = $("#languages").val();
//             babe.global_data.yearsEnglish = $("#age").val();
//             babe.global_data.comments = $("#comments")
//             .val()
//             .trim();
//             babe.global_data.endTime = Date.now();
//             babe.global_data.timeSpent =
//                 (babe.global_data.endTime -
//                     babe.global_data.startTime) /
//                 60000;
//
//             // moves to the next view
//             babe.findNextView();
//         });
//     }
// }
);

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator("thanks", {
    trials: 1,
    name: 'thanks',
    title: 'Vielen Dank für deine Teilnahme an diesem Experiment! Wir freuen uns, wenn Du es mit deinen Freund*innnen teilst',
    prolificConfirmText: 'Drück den Knopf!'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#trial-views
*/

//"forced_choice", {

// Here, we initialize a normal forced_choice view
// Forced choice in German

const rating_choice_1_german = babeViews.view_generator("forced_choice", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.forced_choice_1_german.length,
    // name should be identical to the variable name
    name: 'rating_choice_1_german',
    data: getRandomisedRatingChoiceGerman1(),},
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
  {
    answer_container_generator: function (config, CT) {
     return `<div class='babe-view-answer-container'>
              <p class='babe-view-question'>${config.data[CT].question}</p>
            <strong class='babe-response-rating-option babe-view-text'>${config.data[CT].optionLeft}</strong>
            <br>
             <label for='o1' class='babe-response-buttons'>${config.data[CT].v01}</label>
             <input type='radio' name='answer' id='o1' value=1 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v02}</label>
             <input type='radio' name='answer' id='o2' value=2 />
             <br>
             <label for='o3' class='babe-response-buttons'>${config.data[CT].v03}</label>
             <input type='radio' name='answer' id='o3' value=3 />
             <br>
             <label for='o4' class='babe-response-buttons'>${config.data[CT].v04}</label>
             <input type='radio' name='answer' id='o4' value=4 />
             <br>
             <label for='o5' class='babe-response-buttons'>${config.data[CT].v05}</label>
             <input type='radio' name='answer' id='o5' value=5 />
             <br>
             <label for='o6' class='babe-response-buttons'>${config.data[CT].v06}</label>
             <input type='radio' name='answer' id='o6' value=6 />
             <br>
             <label for='o7' class='babe-response-buttons'>${config.data[CT].v07}</label>
             <input type='radio' name='answer' id='o7' value=7 />
             <br>
             <strong class='babe-response-rating-option babe-view-text'>${config.data[CT].optionRight}</strong>
             </div>`;

},
    handle_response_function: handle_response_functions_2.button_choice,

// {
//   handle_response_function: function(config, CT, babe, answer_container_generator, startingTime) {
//
//       // create the answer container
//       $(".babe-view").append(answer_container_generator(config, CT));
//
//       // attaches an event listener to the radio button input
//       // when an input is selected a response property with a value equal
//       // to the answer is added to the trial object
//       // as well as a readingTimes property with value
//       $("input[name=answer]").on("change", function() {
//       const RT = Date.now() - startingTime;
//       let trial_data = {
//           trial_name: config.name,
//           trial_number: CT + 1,
//           response: $("input[name=answer]:checked").val(),
//           RT: RT
//       };
//       trial_data = babeUtils.view.save_config_trial_data(config.data[CT], trial_data);
//       babe.trial_data.push(trial_data);
//       babe.findNextView();
//       });
//
//   }
// },
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
});

const rating_choice_2_german = babeViews.view_generator("forced_choice", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.forced_choice_2_german.length,
    // name should be identical to the variable name
    name: 'rating_choice_2_german',
    data: getRandomisedRatingChoiceGerman2(),},
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
  {
    answer_container_generator: function (config, CT) {
     return `<div class='babe-view-answer-container'>
              <p class='babe-view-question'>${config.data[CT].question}</p>
            <strong class='babe-response-rating-option babe-view-text'>${config.data[CT].optionLeft}</strong>
            <br>
             <label for='o1' class='babe-response-buttons'>${config.data[CT].v01}</label>
             <input type='radio' name='answer' id='o1' value=1 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v02}</label>
             <input type='radio' name='answer' id='o2' value=2 />
             <br>
             <label for='o3' class='babe-response-buttons'>${config.data[CT].v03}</label>
             <input type='radio' name='answer' id='o3' value=3 />
             <br>
             <label for='o4' class='babe-response-buttons'>${config.data[CT].v04}</label>
             <input type='radio' name='answer' id='o4' value=4 />
             <br>
             <label for='o5' class='babe-response-buttons'>${config.data[CT].v05}</label>
             <input type='radio' name='answer' id='o5' value=5 />
             <br>
             <label for='o6' class='babe-response-buttons'>${config.data[CT].v06}</label>
             <input type='radio' name='answer' id='o6' value=6 />
             <br>
             <label for='o7' class='babe-response-buttons'>${config.data[CT].v07}</label>
             <input type='radio' name='answer' id='o7' value=7 />
             <br>
             <strong class='babe-response-rating-option babe-view-text'>${config.data[CT].optionRight}</strong>
             </div>`;

},

handle_response_function: handle_response_functions_2.button_choice,

    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
});


// Here, we initialize a normal forced_choice view
// Forced choices in English
const rating_choice_1_english = babeViews.view_generator("forced_choice", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.forced_choice_1_english.length,
    // name should be identical to the variable name
    name: 'rating_choice_1_english',
    data: getRandomisedRatingChoiceEnglish1(),
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
  },
  {
    answer_container_generator: function (config, CT) {
     return `<div class='babe-view-answer-container'>
              <p class='babe-view-question'>${config.data[CT].question}</p>
            <strong class='babe-response-rating-option babe-view-text'>${config.data[CT].optionLeft}</strong>
            <br>
             <label for='o1' class='babe-response-buttons'>${config.data[CT].v01}</label>
             <input type='radio' name='answer' id='o1' value=1 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v02}</label>
             <input type='radio' name='answer' id='o2' value=2 />
             <br>
             <label for='o3' class='babe-response-buttons'>${config.data[CT].v03}</label>
             <input type='radio' name='answer' id='o3' value=3 />
             <br>
             <label for='o4' class='babe-response-buttons'>${config.data[CT].v04}</label>
             <input type='radio' name='answer' id='o4' value=4 />
             <br>
             <label for='o5' class='babe-response-buttons'>${config.data[CT].v05}</label>
             <input type='radio' name='answer' id='o5' value=5 />
             <br>
             <label for='o6' class='babe-response-buttons'>${config.data[CT].v06}</label>
             <input type='radio' name='answer' id='o6' value=6 />
             <br>
             <label for='o7' class='babe-response-buttons'>${config.data[CT].v07}</label>
             <input type='radio' name='answer' id='o7' value=7 />
             <br>
             <strong class='babe-response-rating-option babe-view-text'>${config.data[CT].optionRight}</strong>
             </div>`;

},
    handle_response_function: handle_response_functions_2.button_choice,

});

const rating_choice_2_english = babeViews.view_generator("forced_choice", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.forced_choice_2_english.length,
    // name should be identical to the variable name
    name: 'rating_choice_2_english',
    data: getRandomisedRatingChoiceEnglish2()
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
  },
    {
      answer_container_generator: function (config, CT) {
       return `<div class='babe-view-answer-container'>
                <p class='babe-view-question'>${config.data[CT].question}</p>
              <strong class='babe-response-rating-option babe-view-text'>${config.data[CT].optionLeft}</strong>
              <br>
               <label for='o1' class='babe-response-buttons'>${config.data[CT].v01}</label>
               <input type='radio' name='answer' id='o1' value=1 />
               <br>
               <label for='o2' class='babe-response-buttons'>${config.data[CT].v02}</label>
               <input type='radio' name='answer' id='o2' value=2 />
               <br>
               <label for='o3' class='babe-response-buttons'>${config.data[CT].v03}</label>
               <input type='radio' name='answer' id='o3' value=3 />
               <br>
               <label for='o4' class='babe-response-buttons'>${config.data[CT].v04}</label>
               <input type='radio' name='answer' id='o4' value=4 />
               <br>
               <label for='o5' class='babe-response-buttons'>${config.data[CT].v05}</label>
               <input type='radio' name='answer' id='o5' value=5 />
               <br>
               <label for='o6' class='babe-response-buttons'>${config.data[CT].v06}</label>
               <input type='radio' name='answer' id='o6' value=6 />
               <br>
               <label for='o7' class='babe-response-buttons'>${config.data[CT].v07}</label>
               <input type='radio' name='answer' id='o7' value=7 />
               <br>
               <strong class='babe-response-rating-option babe-view-text'>${config.data[CT].optionRight}</strong>
               </div>`;

  },
    handle_response_function: handle_response_functions_2.button_choice,
    }
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
);


const test_comprehension_1_english = babeViews.view_generator("forced_choice", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
<<<<<<< HEAD
    trials: comprehension_test.fc_comprehension_1_english.length,
    // name should be identical to the variable name
    name: 'test_comprehension_1_english',
    data: comprehension_test.fc_comprehension_1_english,
=======
    trials: comprehension_test.forced_choice_english_test_trolly.length,
    // name should be identical to the variable name
    name: 'test_english_man',
    data: comprehension_test.forced_choice_english_test_trolly,
>>>>>>> tmp
  },
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
  {
    answer_container_generator: function (config, CT) {
     return  ` <div class='babe-view-answer-container'>
              <p class='babe-view-question'>${config.data[CT].question}</p>
               <label for='o1' class='babe-response-buttons'>${config.data[CT].pic1}</label>
               <input type='radio' name='answer' id='o1' value='correct' />
               <label for='o2' class='babe-response-buttons'>${config.data[CT].pic2}</label>
               <input type='radio' name='answer' id='o2' value='false' />
               <br>
               <label for='o2' class='babe-response-buttons'>${config.data[CT].pic3}</label>
               <input type='radio' name='answer' id='o3' value='false' />
               <label for='o2' class='babe-response-buttons'>${config.data[CT].pic4}</label>
               <input type='radio' name='answer' id='o4' value='false' />
               <br>
               <label for='o2' class='babe-response-buttons'>Ich hab das Dilemma nicht verstanden</label>
               <input type='radio' name='answer' id='o5' value='false' />
               </div>`;

},
  }
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
);


const test_comprehension_2_english= babeViews.view_generator("forced_choice", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
<<<<<<< HEAD
    trials: comprehension_test.fc_comprehension_2_english.length,
    // name should be identical to the variable name
    name: 'test_comprehension_2_english',
    data: comprehension_test.fc_comprehension_2_english,
=======
    trials: comprehension_test.forced_choice_english_test_car.length,
    // name should be identical to the variable name
    name: 'test_english_car',
    data: comprehension_test.forced_choice_english_test_car,
  },
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
  {
    answer_container_generator: function (config, CT) {
     return  ` <div class='babe-view-answer-container'>
              <p class='babe-view-question'>${config.data[CT].question}</p>
               <label for='o1' class='babe-response-buttons'>${config.data[CT].pic1}</label>
               <input type='radio' name='answer' id='o1' value='correct' />
               <label for='o2' class='babe-response-buttons'>${config.data[CT].pic2}</label>
               <input type='radio' name='answer' id='o2' value='false' />
               <br>
               <label for='o2' class='babe-response-buttons'>${config.data[CT].pic3}</label>
               <input type='radio' name='answer' id='o3' value='false' />
               <label for='o2' class='babe-response-buttons'>${config.data[CT].pic4}</label>
               <input type='radio' name='answer' id='o4' value='false' />
               <br>
               <label for='o2' class='babe-response-buttons'>Ich hab das Dilemma nicht verstanden</label>
               <input type='radio' name='answer' id='o5' value='false' />
               </div>`;

},
  }
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
);

//german
const test_german_man= babeViews.view_generator("forced_choice", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: comprehension_test.forced_choice_english_test_trolly.length,
    // name should be identical to the variable name
    name: 'test_german_man',
    data: comprehension_test.forced_choice_german_test_trolly,
  },
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
  {
    answer_container_generator: function (config, CT) {
     return  ` <div class='babe-view-answer-container'>
              <p class='babe-view-question'>${config.data[CT].question}</p>
               <label for='o1' class='babe-response-buttons'>${config.data[CT].pic1}</label>
               <input type='radio' name='answer' id='o1' value='correct' />
               <label for='o2' class='babe-response-buttons'>${config.data[CT].pic2}</label>
               <input type='radio' name='answer' id='o2' value='false' />
               <br>
               <label for='o2' class='babe-response-buttons'>${config.data[CT].pic3}</label>
               <input type='radio' name='answer' id='o3' value='false' />
               <label for='o2' class='babe-response-buttons'>${config.data[CT].pic4}</label>
               <input type='radio' name='answer' id='o4' value='false' />
               <br>
               <label for='o2' class='babe-response-buttons'>Ich hab das Dilemma nicht verstanden</label>
               <input type='radio' name='answer' id='o5' value='false' />
               </div>`;

},
  }
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
);


const test_german_car= babeViews.view_generator("forced_choice", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: comprehension_test.forced_choice_german_test_car.length,
    // name should be identical to the variable name
    name: 'test_german_car',
    data: comprehension_test.forced_choice_german_test_car,
>>>>>>> tmp
  },
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
  {
    answer_container_generator: function (config, CT) {
     return  ` <div class='babe-view-answer-container'>
              <p class='babe-view-question'>${config.data[CT].question}</p>
               <label for='o1' class='babe-response-buttons'>${config.data[CT].pic1}</label>
               <input type='radio' name='answer' id='o1' value='correct' />
               <label for='o2' class='babe-response-buttons'>${config.data[CT].pic2}</label>
               <input type='radio' name='answer' id='o2' value='false' />
               <br>
               <label for='o2' class='babe-response-buttons'>${config.data[CT].pic3}</label>
               <input type='radio' name='answer' id='o3' value='false' />
               <label for='o2' class='babe-response-buttons'>${config.data[CT].pic4}</label>
               <input type='radio' name='answer' id='o4' value='false' />
               <br>
               <label for='o2' class='babe-response-buttons'>Ich hab das Dilemma nicht verstanden</label>
               <input type='radio' name='answer' id='o5' value='false' />
               </div>`;

},
  }
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
);


// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
