// In this file you initialize and configure your experiment using babeInit

// this function returns random languege english/german
function getLanguage(){
    return (Math.floor(Math.random()*2) == 0) ? 'german': 'english';
}

function tinyBityRandomNum(){
  return (Math.floor(Math.random()*2) == 0) ? '1': '2';
}

views_seq_language = []
if(getLanguage() == 'german' && tinyBityRandomNum() == '1') {
  views_seq_language = [
      intro,
      instructions,
      description,
      dilemma_1_german,
      rating_choice_1_german,
      dilemma_2_german,
      rating_choice_2_german,
      dilemma_3_german,
      rating_choice_3_german,
      post_test,
      thanks,
  ]
}
else if (getLanguage() == 'german' && tinyBityRandomNum() == '2') {
  views_seq_language = [
      intro,
      instructions,
      description,
      dilemma_1_german,
      rating_choice_1_german,
      dilemma_3_german,
      rating_choice_3_german,
      dilemma_2_german,
      rating_choice_2_german,
      post_test,
      thanks,
  ]
}
else if (getLanguage() == 'english' && tinyBityRandomNum() == '1') {
  views_seq_language = [
      intro,
      instructions,
      description,
      dilemma_1_english,
      rating_choice_1_english,
      dilemma_2_english,
      rating_choice_2_english,
      dilemma_3_english,
      rating_choice_3_english,
      post_test,
      thanks,
  ]
}
else if (getLanguage() == 'english' && tinyBityRandomNum() == '2') {
    views_seq_language = [
        intro,
        instructions,
        description,
        dilemma_1_english,
        rating_choice_1_english,
        dilemma_3_english,
        rating_choice_3_english,
        dilemma_2_english,
        rating_choice_2_english,
        post_test,
        thanks,
    ]
}

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // in debug mode this returns the babe-object, which you can access in the console of your browser
    // calls babeInit
    // e.g. >> window.babe_monitor or window.babe_monitor.findNextView()
    // in all other modes null will be returned
    window.babe_monitor = babeInit({
        // You have to specify all views you want to use in this experiment and the order of them


        views_seq: views_seq_language,
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "INSERT_A_NUMBER",
            serverAppURL: "https://babe-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "debug",
            contact_email: "YOUREMAIL@wherelifeisgreat.you",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                rating_choice_1_german.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
