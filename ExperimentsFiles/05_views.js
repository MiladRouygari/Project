// In this file you can instantiate your views
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

const dilemma_3_german = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'dilemma_3_german',
    title: 'Dilemma',
    text:  `Stell dir vor, du bist ein Troll in einem Märchenland und blickest in eine Schlucht hinunter.
    Du siehst fünf Trolle am Ende der Schlucht in die Enge getrieben sind und ein hungriges Monster, das sich auf sie zubewegt.Du schaust nach links und da steht ein großer und schwerer Troll mit Stacheln neben dir.Der einzige Weg, das Monster aufzuhalten (das die anderen Trolle fressen wird), wäre, diesen Troll in die Schlucht auf das Monster zu schubsen, dadurch den Troll mit den Stacheln zu töten, aber fünf Trolle zu retten.`,
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

const dilemma_3_english = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'dilemma_3_english',
    title: 'Dilemma',
    text:  `Imagine you are a troll in fairyland looking down a canyon.
    You see five trolls cornered at the end of the canyon and a hungry monster barrelling towards them.
    You look to your left and there is a large and heavy troll with spikes standing next to you.
    The only way to stop the monster from eating the other trolls would be to push that troll off into the canyon onto the monster,
    killing the spiky troll but saving but saving five trolls.`,
    buttonText: 'To the questions'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator("post_test",{
    trials: 1,
    name: 'post_test',
    title: 'Zusätzliche Informationen',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.',

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    buttonText: 'Weiter',
    age_question: 'Alter',
    gender_question: 'Geschlecht',
    gender_male: 'männlich',
    gender_female: 'weiblich',
    gender_other: 'divers',
    edu_question: 'Höchster Bildungsabschluss',
    edu_graduated_high_school: 'Abitur',
    edu_graduated_college: 'Hochschulabschluss',
    edu_higher_degree: 'Universitärer Abschluss',
    languages_question: 'Muttersprache',
    languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
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
  answer_container_generator: function(config,CT){
    const quest = babeUtils.view.fill_defaults_post_test(config);
    return `<form>
            <p class='babe-view-text'>
                <label for="age">${quest.age.title}:</label>
                <input type="number" name="age" min="18" max="110" id="age" />
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
                </select>
            </p>
            <p class='babe-view-text'>
                <label for="languages" name="languages">${quest.langs.title}:<br /><span>${quest.langs.text}</</span></label>
                <input type="text" id="languages"/>
            </p>
            <p class="babe-view-text">
                <label for="comments">${quest.comments.title}</label>
                <textarea name="comments" id="comments" rows="6" cols="40"></textarea>
            </p>
            <button id="next" class='babe-view-button'>${config.button}</button>
    </form>`
  }
}
//answer_container_generator: answer_container_generators.button_choice,
// or
//answer_container_generator: function (config, CT) {
//  return `<div class='babe-view-answer-container'>
//          <p class='babe-view-question'>${config.data[CT].question}</p>
//          <label for='o1' class='babe-response-buttons'>${config.data[CT].option1}</label>
//          <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
//          <label for='o2' class='babe-response-buttons'>${config.data[CT].option2}</label>
//          <input type='radio' name='answer' id='o2' value=${config.data[CT].option2} />
//          <label for='o2' class='babe-response-buttons'>${config.data[CT].option3}</label>
//          <input type='radio' name='answer' id='o3' value=${config.data[CT].option3} />
//          </div>`;
// }

//handle_response_function: handle_response_functions.button_choice
//}
);

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator("thanks", {
    trials: 1,
    name: 'thanks',
    title: 'Vielen Dank für deine Teilnahme an diesem Experiment! Wir freuen uns, wenn Du es mit deinen Freund*innnen teilst',
    prolificConfirmText: 'Press the button'
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

const rating_choice_1_german = babeViews.view_generator("rating_scale", {
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
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v03}</label>
             <input type='radio' name='answer' id='o3' value=3 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v04}</label>
             <input type='radio' name='answer' id='o4' value=4 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v05}</label>
             <input type='radio' name='answer' id='o5' value=5 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v06}</label>
             <input type='radio' name='answer' id='o6' value=6 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v07}</label>
             <input type='radio' name='answer' id='o7' value=7 />
             <br>
             <strong class='babe-response-rating-option babe-view-text'>${config.data[CT].optionRight}</strong>
             </div>`;

}
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
});

const rating_choice_2_german = babeViews.view_generator("rating_scale", {
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
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v03}</label>
             <input type='radio' name='answer' id='o3' value=3 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v04}</label>
             <input type='radio' name='answer' id='o4' value=4 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v05}</label>
             <input type='radio' name='answer' id='o5' value=5 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v06}</label>
             <input type='radio' name='answer' id='o6' value=6 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v07}</label>
             <input type='radio' name='answer' id='o7' value=7 />
             <br>
             <strong class='babe-response-rating-option babe-view-text'>${config.data[CT].optionRight}</strong>
             </div>`;

}
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
});

const rating_choice_3_german = babeViews.view_generator("rating_scale", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.forced_choice_3_german.length,
    // name should be identical to the variable name
    name: 'rating_choice_3_german',
    data: getRandomisedRatingChoiceGerman3(),},
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
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v03}</label>
             <input type='radio' name='answer' id='o3' value=3 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v04}</label>
             <input type='radio' name='answer' id='o4' value=4 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v05}</label>
             <input type='radio' name='answer' id='o5' value=5 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v06}</label>
             <input type='radio' name='answer' id='o6' value=6 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v07}</label>
             <input type='radio' name='answer' id='o7' value=7 />
             <br>
             <strong class='babe-response-rating-option babe-view-text'>${config.data[CT].optionRight}</strong>
             </div>`;

}
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
});


// Here, we initialize a normal forced_choice view
// Forced choices in English
const rating_choice_1_english = babeViews.view_generator("rating_scale", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.forced_choice_1_english.length,
    // name should be identical to the variable name
    name: 'rating_choice_1_english',
    data: getRandomisedRatingChoiceEnglish1(),
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
});

const rating_choice_2_english = babeViews.view_generator("rating_scale", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.forced_choice_2_english.length,
    // name should be identical to the variable name
    name: 'rating_choice_2_english',
<<<<<<< HEAD
    data: getRandomisedRatingChoiceEnglish2(),},
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
               <label for='o2' class='babe-response-buttons'>${config.data[CT].v03}</label>
               <input type='radio' name='answer' id='o3' value=3 />
               <br>
               <label for='o2' class='babe-response-buttons'>${config.data[CT].v04}</label>
               <input type='radio' name='answer' id='o4' value=4 />
               <br>
               <label for='o2' class='babe-response-buttons'>${config.data[CT].v05}</label>
               <input type='radio' name='answer' id='o5' value=5 />
               <br>
               <label for='o2' class='babe-response-buttons'>${config.data[CT].v06}</label>
               <input type='radio' name='answer' id='o6' value=6 />
               <br>
               <label for='o2' class='babe-response-buttons'>${config.data[CT].v07}</label>
               <input type='radio' name='answer' id='o7' value=7 />
               <br>
               <strong class='babe-response-rating-option babe-view-text'>${config.data[CT].optionRight}</strong>
               </div>`;

  }
    }
=======
    data: getRandomisedRatingChoiceEnglish2(),
>>>>>>> 249f74f3dda04f1d41c0028e593d2b02da436ddd
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
});

const rating_choice_3_english = babeViews.view_generator("rating_scale", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.forced_choice_3_english.length,
    // name should be identical to the variable name
    name: 'rating_choice_3_english',
    data: getRandomisedRatingChoiceEnglish3(),
<<<<<<< HEAD
  },
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
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v03}</label>
             <input type='radio' name='answer' id='o3' value=3 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v04}</label>
             <input type='radio' name='answer' id='o4' value=4 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v05}</label>
             <input type='radio' name='answer' id='o5' value=5 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v06}</label>
             <input type='radio' name='answer' id='o6' value=6 />
             <br>
             <label for='o2' class='babe-response-buttons'>${config.data[CT].v07}</label>
             <input type='radio' name='answer' id='o7' value=7 />
             <br>
             <strong class='babe-response-rating-option babe-view-text'>${config.data[CT].optionRight}</strong>
             </div>`;

}
  }
=======
>>>>>>> 249f74f3dda04f1d41c0028e593d2b02da436ddd
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
<<<<<<< HEAD
);


const test_english_man= babeViews.view_generator("forced_choice", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info_2.forced_choice_test.length,
    // name should be identical to the variable name
    name: 'test_english_man',
    data: trial_info_2.forced_choice_test,
  },
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
  {
    answer_container_generator: function (config, CT) {
     return  ` <div class='babe-view-answer-container'>
              <p class='babe-view-question'>${config.data[CT].question}</p>
               <label for='o1' class='babe-response-buttons'><img src="images/trolly1.jpg" alt="trolly1" style="width:100%;height:auto;"></label>
               <input type='radio' name='answer' id='o1' value='correct' />
               <label for='o2' class='babe-response-buttons'><img src="images/trolly2.jpg" alt="trolly2" style="width:100%;height:auto;"></label>
               <input type='radio' name='answer' id='o2' value='false' />
               <br>
               <label for='o2' class='babe-response-buttons'><img src="images/trolly3.jpg" alt="trolly3" style="width:100%;height:auto;"></label>
               <input type='radio' name='answer' id='o3' value='false' />
               <label for='o2' class='babe-response-buttons'><img src="images/trolly4.jpg" alt="trolly4" style="width:100%;height:auto;"></label>
               <input type='radio' name='answer' id='o4' value='cfalse' />
               <br>
               <label for='o2' class='babe-response-buttons'>Ich hab das Dilemma nicht verstanden</label>
               <input type='radio' name='answer' id='o5' value='false' />
               </div>`;

}
  }
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
);

// const test = babeViews.view_generator("rating_scale",
//   {
//     // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
//     trials: trial_info.forced_choice_test_english.length,
//     // name should be identical to the variable name
//     name: 'test',
//     data: getRandomisedRatingChoiceEnglishtest(),},
//     // you can add custom functions at different stages through a view's life cycle
//     // hook: {
//     //     after_response_enabled: check_response
//     // }
//     {
//       answer_container_generator: function (config, CT) {
//        return `<div class='babe-view-answer-container'>
//                <p class='babe-view-question'>${config.data[CT].question}</p>
//               <strong class='babe-response-rating-option babe-view-text'>${config.data[CT].optionLeft}</strong>
//                <label for='o1' class='babe-response-buttons'>${config.data[CT].v01}</label>
//                <input type='radio' name='answer' id='o1' value=1 />
//                <label for='o2' class='babe-response-buttons'>${config.data[CT].v02}</label>
//                <input type='radio' name='answer' id='o2' value=2 />
//                <label for='o2' class='babe-response-buttons'>${config.data[CT].v03}</label>
//                <input type='radio' name='answer' id='o3' value=3 />
//                <label for='o2' class='babe-response-buttons'>${config.data[CT].v04}</label>
//                <input type='radio' name='answer' id='o4' value=4 />
//                <label for='o2' class='babe-response-buttons'>${config.data[CT].v05}</label>
//                <input type='radio' name='answer' id='o5' value=5 />
//                <label for='o2' class='babe-response-buttons'>${config.data[CT].v06}</label>
//                <input type='radio' name='answer' id='o6' value=6 />
//                <label for='o2' class='babe-response-buttons'>${config.data[CT].v07}</label>
//                <input type='radio' name='answer' id='o7' value=7 />
//                <strong class='babe-response-rating-option babe-view-text'>${config.data[CT].optionRight}</strong>
//                </div>`;
//
//   }
//     }
// );
=======
});
>>>>>>> 249f74f3dda04f1d41c0028e593d2b02da436ddd

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
