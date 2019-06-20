// In this file you initialize and configure your experiment using babeInit

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
        views_seq: [
            intro,
            instructions,
            description,
            // we have three different tasks
            // generally like this dilemma_description
            // a few forced choices
            dilemma_description_1,
            rating_choice_1,
            dilemma_description_2,
            post_test,
            thanks,
        ],
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
                rating_choice_1.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
