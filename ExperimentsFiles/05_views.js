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
    text:   `Vielen Dank, dass Du an unserem Experiment teilnimmst, damit unterstützt Du uns sehr.
            Im Rahmen von unserem Kurs „Experimental Psychology Lab“ replizieren wir eine Studie.
            <br />
            <br />
            Es ist wichtig, dass Du dieses Experiment eigenständig und fokussiert bearbeitest.
            Bitte schalte alles aus, was Dich ablenken könnte (z.B. Hintergrundmusik, Fernseher, Benachrichtigungsmitteilungen an deinem Handy, …).
            <br />
            <br />
            Das Experiment wird ungefähr 10 Minuten dauern.
 `,
   buttonText: 'Zu der Anleitung'
});

// For most tasks, you need instructions views
const instructions = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instrucions',
    title: 'Anleitung',
    text:  `Um an diesem Experiment teilzunehmen, ist es notwendig, dass Deine Muttersprache Deutsch ist und Du in der Lage bist grundlegendes Englisch zu verstehen.
            Falls du dir bezüglich Deiner Englisch-Kenntnisse unsicher bist, kannst Du es dennoch einfach ausprobieren.
            <br />
            <br />
            Im Folgenden wirst Du 3 Dilemmas lesen und jeweils 5 Fragen dazu beantworten. Lese Dir die Dilemmas sorgfältig durch und stelle sicher, dass Du sie verstanden hast.
            Bitte nutze dafür keine Übersetzungshilfen. Es gibt keine Zeitbegrenzung.
            <br />
            <br />
            Falls Du auch nach sorgfältigem Lesen das Dilemma nicht verstanden haben solltest,
            wirst du später die Möglichkeit haben, das anzugeben.
            Während des Experiments gibt es keine Möglichkeit einen Schritt zurückzugehen.
            <br />
            <br />
            Wenn Du bereit bist, kannst Du nun das Experiment beginnen.
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
    Du schaust zu deiner Linken und da ist ein großer und schwerer Mann, der neben dir steht.
    Die einzige Möglichkeit den Wagon zu stoppen, wäre den Mann von der Brücke auf die Gleise zu stoßen,
    was den Mann tötet, aber fünf Menschen rettet.`,
    buttonText: 'Zu den Fragen'
});

const dilemma_2_german = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'dilemma_2_german',
    title: 'Dilemma',
    text:  `Stell dir vor, du reist mit einem selbstfahrenden Auto, vor dir siehst du zwei Fahrbahnen.
    Du siehst fünf Menschen, die einen Zebrastreifen überqueren und das Auto fährt auf sie zu.
    Du schaust zu deiner Linken auf die andere Fahrbahn und siehst eine Person, die den Zebrastreifen überquert.
    Die einzige Möglichkeit den Zusammenstoß zu verhindern, wäre das Lenkrad herumzureißen, damit die
    Fahrbahn zu wechseln, was die eine Person tötet, aber fünf Menschen rettet.`,
    buttonText: 'Zu den Fragen'
});

const dilemma_3_german = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'dilemma_3_german',
    title: 'Dilemma',
    text:  ` Stell Dir vor, Du bist in einem Märchenland und blickst eine Schlucht hinunter. Du siehst fünf Trolle unterhalb der Schlucht stehen, welche von einem hungrigen Monster in die Enge getrieben werden. Du schaust nach rechts und neben dir ist ein Troll mit Stacheln. Der einzige Weg, das Monster aufzuhalten (die anderen Trolle aufzufressen) wäre, diesen Troll in die Schlucht in den Mund des Monsters zu werfen und dadurch den Troll zu töten, aber die fünf Trolle zu retten.  `,
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
    The only way to stop the trolley would be to push the man off the bridge and onto the tracks,
    killing the man but saving five people.`,
    buttonText: 'To the questions'
});

const dilemma_2_english = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'dilemma_2_english',
    title: 'Dilemma',
    text:  `Imagine you are traveling with a self-driving car seeing two lanes in front of you.
    You see five people on a pedestrian crossing and the car is heading towards them.
    You look to your left to the other lane where one person is on the pedestrian crossing.
    The only way to avoid the crash would be to tear the wheel around and thereby switch the lane,
    killing the one person but saving five people.`,
    buttonText: 'To the questions'
});

const dilemma_3_english = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'dilemma_2_english',
    title: 'Dilemma',
    text:  `Imagine you are in fairyland looking down a canyon. You see five trolls standing below the canyon and a hungry monster running towards them. You look to your right and there is a troll with spikes next to you. The only way to stop the monster (from eating the other trolls) would be to throw the troll into the monsters mouth, killing the one troll but saving the five trolls. `,
    buttonText: 'To the questions'
});



// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator("post_test", {
    trials: 1,
    name: 'post_test',
    title: 'Zusätzliche Informationen',
    text: 'Bitte beantworte die folgenden Fragen, deine Daten bleiben dabei anonym.',

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
    languages_question: 'Ist Deutsch deine Muttersprache?',
    languages_more: '(in der Regel die Sprache, die du als Kind zu Hause gesprochen hast)',
    //age_question: 'Alter ab dem Englisch gerlernt',
    comments_question: 'Hast du noch Anmerkungen?'
},

{

  //  changes for additional Informationen
  // not quite sure how to do it (yet)
  // <p class='babe-view-text'>
  //     <label for="gender">${quest.gender.title}:</label>
  //     <select id="gender" name="gender">
  //         <option></option>
  //         <option value="m">${quest.gender.male}</option>
  //         <option value="f">${quest.gender.female}</option>
  //         <option value="d">${quest.gender.other}</option>
  //     </select>
  // </p>
  answer_container_generator: function(config,CT){
    const quest = babeUtils.view.fill_defaults_post_test(config);
    return `<form>
            <p class='babe-view-text'>
                <label for="age">${quest.age.title}:</label>
                <input type="number" name="age" min="14" max="110" id="age" />
            </p>
            <p class='babe-view-text'>
                <label for="languages">${quest.langs.title}*</label>
                <select id="languages" name="languages" class='must'>
                    <option></option>
                    <option value="${"ja"}">${"ja"}</option>
                    <option value="${"nein"}">${"nein"}</option>
                </select>
          <p class='babe-view-text'>
              <label for="dominant">${"Ist Deutsch deine dominate Sprache?* <br> (Die Sprache die du am häufigsten benutzt)"}</label>
              <select id="dominant" name="dominant" class='must'>
                  <option></option>
                  <option value="${"ja"}">${"ja"}</option>
                  <option value="${"nein"}">${"nein"}</option>
              </select>
           <p class='babe-view-text'>
              <label for="spoken_at_home">${"Wurde Englisch in dem Haushalt gesprochen, in dem du aufgewachsen bist?*"}</label>
              <select id="athome" name="athome" class='must'>
                  <option></option>
                  <option value="${"ja"}">${"ja"}</option>
                  <option value="${"nein"}">${"nein"}</option>
              </select>
            <p class='babe-view-text'>
                <label if="foreign" for="foreign">${"Mit wieviel Jahren hast du angefangen Englisch zu lernen?*"}:</label>
                <input type="number" name="foreign" min="0" max="110" id="years" class='must'/>
            </p>
            <p class='babe-view-text'>
                <label for="living_abroad">${"Wieviele Monate hast du im englischsprachigem Ausland verbracht?*"}:</label>
                <input type="number" name="living_abroad" min="0" max="110" id="abroad_months" class='must' />
            </p>
            <p class='babe-view-text'>
                <label for="proficiency">${"Bewerte deine Deutschkenntnisse auf einer Skala von 1 bis 7 * <br> (1= sehr schlecht, 7= sehr gut)"}:</label>
                <select id="proficiency_german" name="proficiency_german" class='must'>
                    <option></option>
                    <option value="${"1"}">${"1"}</option>
                    <option value="${"2"}">${"2"}</option>
                    <option value="${"3"}">${"3"}</option>
                    <option value="${"4"}">${"4"}</option>
                    <option value="${"5"}">${"5"}</option>
                    <option value="${"6"}">${"6"}</option>
                    <option value="${"7"}">${"7"}</option>


                </select>
            <p class='babe-view-text'>
                <label for="proficiency">${"Bewerte deine Englischkenntnisse auf einer Skala von 1 bis 7 *<br> (1= sehr schlecht, 7= sehr gut)"}:</label>
                <select id="proficiency" name="proficiency" class='must'>
                    <option></option>
                    <option value="${"1"}">${"1"}</option>
                    <option value="${"2"}">${"2"}</option>
                    <option value="${"3"}">${"3"}</option>
                    <option value="${"4"}">${"4"}</option>
                    <option value="${"5"}">${"5"}</option>
                    <option value="${"6"}">${"6"}</option>
                    <option value="${"7"}">${"7"}</option>


                </select>
            <p class='babe-view-text'>
               <label for="encountered_1">${"Hast du schon vor diesem Experiment von dem <strong>Zugwagen</strong> Dilemma gehört?"}</label>
               <select id="encountered_1" name="encountered_1">
                   <option></option>
                   <option value="${"ja"}">${"ja"}</option>
                   <option value="${"nein"}">${"nein"}</option>
               </select>
             <p class='babe-view-text'>
                <label for="encountered_2">${"Hast du schon vor diesem Experiment von dem <strong>selbstfahrenden Auto</strong> Dilemma gehört?"}</label>
                <select id="encountered_2" name="encountered_2">
                    <option></option>
                    <option value="${"ja"}">${"ja"}</option>
                    <option value="${"nein"}">${"nein"}</option>
                </select>
                <p class='babe-view-text'>
                   <label for="encountered_3">${"Hast du schon vor diesem Experiment von dem <strong>Troll</strong> Dilemma gehört?"}</label>
                   <select id="encountered_3" name="encountered_3">
                       <option></option>
                       <option value="${"ja"}">${"ja"}</option>
                       <option value="${"nein"}">${"nein"}</option>
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

);

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator("thanks", {
    trials: 1,
    name: 'thanks',
    title: 'Vielen Dank für Deine Teilnahme an diesem Experiment! Wir freuen uns, wenn Du es mit deinen Freund*innnen teilst',
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


const rating_choice_3_german = babeViews.view_generator("forced_choice", {
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

const rating_choice_3_english = babeViews.view_generator("forced_choice", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.forced_choice_3_english.length,
    // name should be identical to the variable name
    name: 'rating_choice_3_english',
    data: getRandomisedRatingChoiceEnglish3()
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
    trials: comprehension_test.forced_choice_english_test_trolly.length,
    // name should be identical to the variable name
    name: 'test_english_man',
    data: comprehension_test.forced_choice_english_test_trolly,
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
               <label for='o3' class='babe-response-buttons'>${config.data[CT].pic3}</label>
               <input type='radio' name='answer' id='o3' value='false' />
               <label for='o4' class='babe-response-buttons'>${config.data[CT].pic4}</label>
               <input type='radio' name='answer' id='o4' value='false' />
               <br>
               <label for='o5' class='babe-response-buttons'>Ich hab das Dilemma nicht verstanden</label>
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
               <input type='radio' name='answer' id='o1' value='false' />
               <label for='o2' class='babe-response-buttons'>${config.data[CT].pic2}</label>
               <input type='radio' name='answer' id='o2' value='false' />
               <br>
               <label for='o3' class='babe-response-buttons'>${config.data[CT].pic3}</label>
               <input type='radio' name='answer' id='o3' value='correct' />
               <label for='o4'class='babe-response-buttons'>${config.data[CT].pic4}</label>
               <input type='radio' name='answer' id='o4' value='false' />
               <br>
               <label for='o5' class='babe-response-buttons'>Ich hab das Dilemma nicht verstanden</label>
               <input type='radio' name='answer' id='o5' value='false' />
               </div>`;

},
  }
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
);


const test_comprehension_3_english= babeViews.view_generator("forced_choice", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: comprehension_test.forced_choice_english_test_fairy.length,
    // name should be identical to the variable name
    name: 'test_english_fairy',
    data: comprehension_test.forced_choice_english_test_fairy,
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
               <input type='radio' name='answer' id='o1' value='false' />
               <label for='o2' class='babe-response-buttons'>${config.data[CT].pic2}</label>
               <input type='radio' name='answer' id='o2' value='false' />
               <br>
               <label for='o3' class='babe-response-buttons'>${config.data[CT].pic3}</label>
               <input type='radio' name='answer' id='o3' value='correct' />
               <label for='o4'class='babe-response-buttons'>${config.data[CT].pic4}</label>
               <input type='radio' name='answer' id='o4' value='false' />
               <br>
               <label for='o5' class='babe-response-buttons'>Ich hab das Dilemma nicht verstanden</label>
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
               <label for='o3' class='babe-response-buttons'>${config.data[CT].pic3}</label>
               <input type='radio' name='answer' id='o3' value='false' />
               <label for='o4' class='babe-response-buttons'>${config.data[CT].pic4}</label>
               <input type='radio' name='answer' id='o4' value='false' />
               <br>
               <label for='o5' class='babe-response-buttons'>Ich hab das Dilemma nicht verstanden</label>
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
               <input type='radio' name='answer' id='o1' value='false' />
               <label for='o2' class='babe-response-buttons'>${config.data[CT].pic2}</label>
               <input type='radio' name='answer' id='o2' value='false' />
               <br>
               <label for='o3' class='babe-response-buttons'>${config.data[CT].pic3}</label>
               <input type='radio' name='answer' id='o3' value='correct' />
               <label for='o4' class='babe-response-buttons'>${config.data[CT].pic4}</label>
               <input type='radio' name='answer' id='o4' value='false' />
               <br>
               <label for='o5' class='babe-response-buttons'>Ich hab das Dilemma nicht verstanden</label>
               <input type='radio' name='answer' id='o5' value='false' />
               </div>`;

},
  }
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
);


const test_german_fairy= babeViews.view_generator("forced_choice", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: comprehension_test.forced_choice_german_test_fairy.length,
    // name should be identical to the variable name
    name: 'test_german_fairy',
    data: comprehension_test.forced_choice_german_test_fairy,
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
               <input type='radio' name='answer' id='o1' value='false' />
               <label for='o2' class='babe-response-buttons'>${config.data[CT].pic2}</label>
               <input type='radio' name='answer' id='o2' value='false' />
               <br>
               <label for='o3' class='babe-response-buttons'>${config.data[CT].pic3}</label>
               <input type='radio' name='answer' id='o3' value='correct' />
               <label for='o4' class='babe-response-buttons'>${config.data[CT].pic4}</label>
               <input type='radio' name='answer' id='o4' value='false' />
               <br>
               <label for='o5' class='babe-response-buttons'>Ich hab das Dilemma nicht verstanden</label>
               <input type='radio' name='answer' id='o5' value='false' />
               </div>`;

},
  }
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
);
