// In this file you can specify the trial data for your experiment

//This might need to be changed, if we want to counter balanced between Decision and imagination,
//I don't think imagination needs to be counter balanced or does it?

// this function returns random languege english/german
function getLanguage(){
    return (Math.floor(Math.random()*2) == 0) ? 'german': 'english';
}

language = getLanguage()
exp = {}

// german trials
if(language == 'german'){
    exp = {
        forced_choice: [
            {
                question: "Was ist auf dem Brot?",
                picture: "images/question_mark_02.png",
                option1: 'jam',
                option2: 'ham',
                correct: 'jam'
            },
            {
                question: "Wie sieht das Wetter aus?",
                picture: "images/weather.jpg",
                option1: "shiny",
                option2: "rainbow",
                correct: "shiny"
            }
        ]
    };
}

// english trials
else{
    exp = {
        forced_choice: [
            {
                question: "What's on the bread?",
                picture: "images/question_mark_02.png",
                option1: 'jam',
                option2: 'ham',
                correct: 'jam'
            },
            {
                question: "What's the weather like?",
                picture: "images/weather.jpg",
                option1: "shiny",
                option2: "rainbow",
                correct: "shiny"
            }
        ]
    };
}


const trial_info = exp