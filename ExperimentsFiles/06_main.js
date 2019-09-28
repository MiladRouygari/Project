// In this file you initialize and configure your experiment using babeInit
$(window).bind("load", function() {
// this function returns random languege english/german
// could also make this global variable

//
// views_seq_language = []
// if(getLanguage() == 'german') {
//   console.log("german");
//   views_seq_language = [
//       intro,
//       instructions,
//       dilemma_1_german,
//       rating_choice_1_german,
//       test_german_man,
//       dilemma_2_german,
//       rating_choice_2_german,
//       test_german_car,
//       dilemma_3_german,
//       rating_choice_3_german,
//       test_german_fairy,
//       post_test,
//       thanks,
//     ]
// } else {
//   console.log("english");
//   views_seq_language = [
//       intro,
//       instructions,
//       dilemma_1_english,
//       rating_choice_1_english,
//       test_comprehension_1_english,
//       dilemma_2_english,
//       rating_choice_2_english,
//       test_comprehension_2_english,
//       post_test,
//       thanks,
//     ]
// }
views_seq = [];
views_seq =  randomiseViewSeq();



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
        views_seq: views_seq,
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: 75,
            serverAppURL: "https://babe-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "debug",
            contact_email: "haterborg@uni-osnabrueck.de",
            //prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                dilemma_1_german.name,
                rating_choice_1_german.name,
                test_german_man.name,
                dilemma_2_german.name,
                rating_choice_2_german.name,
                test_german_car.name,
                dilemma_1_english.name,
                rating_choice_1_english.name,
                test_comprehension_1_english.name,
                dilemma_2_english.name,
                rating_choice_2_english.name,
                test_comprehension_2_english.name,
                dilemma_3_english.name,
                rating_choice_3_english.name,
                test_comprehension_3_english.name,
                dilemma_3_german.name,
                rating_choice_3_german.name,
                test_german_fairy.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "default",
            width: 100
        }

    });



});
