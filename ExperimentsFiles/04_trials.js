// In this file you can specify the trial data for your experiment

//This might need to be changed, if we want to counter balanced between Decision and imagination,
//I don't think imagination needs to be counter balanced or does it?


const trial_info = {
    forced_choice_1_german: [
        {
            question: "Würdest du den Mann stoßen?",
            optionLeft: 'Würde ihn definitiv nicht stoßen',
            v01: '1',
            v02: '2',
            v03: "3",
            v04: "4",
            v05: "5",
            v06: "6",
            v07: "7",
            optionRight: 'Würde ihn definitiv stoßen',
            dilemma: 'footbridge',
            language: 'german',
            question_kind: 'decision'
        },
        {
            question: "Erinnere dich an das Bild, das du im Kopf hattest, während du das Szenario gelesen hast. Bewerte, wie lebhaft du dir jede der folgenden Teile der Szene vorgestellt hast. <br /><br /> Wie lebhaft stellst du dir den Mann vor?",
            optionLeft: '',
            v01: 'Kein Bild                 ',
            v02: 'Sehr wage & trüb           ',
            v03: "Wage und trüb             ",
            v04: "Nicht klar, aber erkennbar",
            v05: "Mehr oder weniger klar        ",
            v06: "Sehr klar               ",
            v07: "Absolut klares Bild     ",
            optionRight: ' ',
            dilemma: 'footbridge',
            language: 'german',
            question_kind: 'vivid_man'
        },
        {
            question: "Erinnere dich an das Bild, das du im Kopf hattest, während du das Szenario gelesen hast. Bewerte, wie lebhaft du dir jede der folgenden Teile der Szene vorgestellt hast. <br /><br /> Wie lebhaft stellst du dir die fünf Menschen vor?",
            optionLeft: '',
            v01: 'Kein Bild                 ',
            v02: 'Sehr wage & trüb           ',
            v03: "Wage und trüb             ",
            v04: "Nicht klar, aber erkennbar",
            v05: "Mehr oder weniger klar        ",
            v06: "Sehr klar               ",
            v07: "Absolut klares Bild     ",
            optionRight: ' ',
            dilemma: 'footbridge',
            language: 'german',
            question_kind: 'vivid_people'
        },
        {
            question: "Erinnere dich an das Bild, das du im Kopf hattest, während du das Szenario gelesen hast. Bewerte, wie lebhaft du dir jede der folgenden Teile der Szene vorgestellt hast. <br /><br /> Wie lebhaft stellst du dir die gesamte Situation vor?",
            optionLeft: '',
            v01: 'Kein Bild                 ',
            v02: 'Sehr wage & trüb           ',
            v03: "Wage und trüb             ",
            v04: "Nicht klar, aber erkennbar",
            v05: "Mehr oder weniger klar        ",
            v06: "Sehr klar               ",
            v07: "Absolut klares Bild     ",
            optionRight: ' ',
            dilemma: 'footbridge',
            language: 'german',
            question_kind: 'vivid_overall'
        }
    ],
    forced_choice_2_german: [
      {
          question: "Würdest du den Mann überfahren?",
          optionLeft: 'Würde ihn definitiv nicht überfahren',
          v01: '1',
          v02: '2',
          v03: "3",
          v04: "4",
          v05: "5",
          v06: "6",
          v07: "7",
          optionRight: 'Würde ihn definitiv überfahren',
          dilemma: 'car',
          language: 'german',
          question_kind: 'decision'
      },
      {
        question: "Erinnere dich an das Bild, das du im Kopf hattest, während du das Szenario gelesen hast. Bewerte, wie lebhaft du dir jede der folgenden Teile der Szene vorgestellt hast. <br /><br /> Wie lebhaft stellst du dir den Mann vor?",
          optionLeft: '',
          v01: 'Kein Bild                 ',
          v02: 'Sehr wage & trüb           ',
          v03: "Wage und trüb             ",
          v04: "Nicht klar, aber erkennbar",
          v05: "Mehr oder weniger klar        ",
          v06: "Sehr klar               ",
          v07: "Absolut klares Bild     ",
          optionRight: ' ',
          dilemma: 'car',
          language: 'german',
          question_kind: 'vivid_man'
      },
      {
          question: "Erinnere dich an das Bild, das du im Kopf hattest, während du das Szenario gelesen hast. Bewerte, wie lebhaft du dir jede der folgenden Teile der Szene vorgestellt hast. <br /><br /> Wie lebhaft stellst du dir die fünf Menschen vor?",
          optionLeft: '',
          v01: 'Kein Bild                 ',
          v02: 'Sehr wage & trüb           ',
          v03: "Wage und trüb             ",
          v04: "Nicht klar, aber erkennbar",
          v05: "Mehr oder weniger klar        ",
          v06: "Sehr klar               ",
          v07: "Absolut klares Bild     ",
          optionRight: ' ',
          dilemma: 'car',
          language: 'german',
          question_kind: 'vivid_people'
      },
      {
          question: "Erinnere dich an das Bild, das du im Kopf hattest, während du das Szenario gelesen hast. Bewerte, wie lebhaft du dir jede der folgenden Teile der Szene vorgestellt hast. <br /><br /> Wie lebhaft stellst du dir die gesamte Situation vor?",
          optionLeft: '',
          v01: 'Kein Bild                 ',
          v02: 'Sehr wage & trüb           ',
          v03: "Wage und trüb             ",
          v04: "Nicht klar, aber erkennbar",
          v05: "Mehr oder weniger klar        ",
          v06: "Sehr klar               ",
          v07: "Absolut klares Bild     ",
          optionRight: ' ',
          dilemma: 'car',
          language: 'german',
          question_kind: 'vivid_overall'
      }
    ],
    forced_choice_1_english: [
      {
          question: "Would you push the man?",
          optionLeft: 'Definitely would not push him',
          v01: '1',
          v02: '2',
          v03: "3",
          v04: "4",
          v05: "5",
          v06: "6",
          v07: "7",
          optionRight: 'Definitely would push him',
          dilemma: 'footbridge',
          language: 'english',
          question_kind: 'decision'
      },
      {
          question: "Remember the image you had in your mind while you read the scenario. Rate how vividly you imagined each of the following parts of the scene. <br /><br /> How vividly can you picture the man?",
          optionLeft: '',
          v01: 'No image                   ',
          v02: 'Very vague & dim           ',
          v03: "Vague and dim              ",
          v04: "Not clear, but recognizable",
          v05: "More or less clear         ",
          v06: "Very clear                 ",
          v07: "Absolutely clear image     ",
          optionRight: ' ',
          dilemma: 'footbridge',
          language: 'english',
          question_kind: 'vivid_man'
      },
      {
          question: "Remember the image you had in your mind while you read the scenario. Rate how vividly you imagined each of the following parts of the scene. <br /><br /> How vividly can you picture the five people?",
          optionLeft: '',
          v01: 'No image                    ',
          v02: 'Very vague & dim            ',
          v03: "Vague and dim               ",
          v04: "Not clear, but recognizable ",
          v05: "More or less clear          ",
          v06: "Very clear                  ",
          v07: "Absolutely clear image      ",
          optionRight: ' ',
          dilemma: 'footbridge',
          language: 'english',
          question_kind: 'vivid_people'
      },
      {
          question: "Remember the image you had in your mind while you read the scenario. Rate how vividly you imagined each of the following parts of the scene. <br /><br /> How vividly can you picture the overall scene?",
          optionLeft: '',
          v01: 'No image                    ',
          v02: 'Very vague & dim            ',
          v03: "Vague and dim               ",
          v04: "Not clear, but recognizable ",
          v05: "More or less clear          ",
          v06: "Very clear                  ",
          v07: "Absolutely clear image     ",
          optionRight: ' ',
          dilemma: 'footbridge',
          language: 'english',
          question_kind: 'vivid_overall'
      },
    ],
    forced_choice_2_english: [
      {
          question: "Would you run over the man?",
          optionLeft: 'Definitely would not run over him',
          v01: '1',
          v02: '2',
          v03: "3",
          v04: "4",
          v05: "5",
          v06: "6",
          v07: "7",
          optionRight: 'Definitely would run over him',
          dilemma: 'car',
          language: 'english',
          question_kind: 'decision'
      },
      {
          question: "Remember the image you had in your mind while you read the scenario. Rate how vividly you imagined each of the following parts of the scene. <br /><br /> How vividly can you picture the man?",
          optionLeft: '',
          v01: 'No image',
          v02: 'Very vague & dim',
          v03: "Vague and dim",
          v04: "Not clear, but recognizable ",
          v05: "More or less clear",
          v06: "Very clear",
          v07: "Absolutely clear image",
          optionRight: ' ',
          dilemma: 'car',
          language: 'english',
          question_kind: 'vivid_man'
      },
      {
          question: "Remember the image you had in your mind while you read the scenario. Rate how vividly you imagined each of the following parts of the scene. <br /><br /> How vividly can you picture the five people?",
          optionLeft: '',
          v01: 'No image',
          v02: 'Very vague & dim',
          v03: "Vague and dim",
          v04: "Not clear, but recognizable ",
          v05: "More or less clear",
          v06: "Very clear",
          v07: "Absolutely clear image",
          optionRight: ' ',
          dilemma: 'car',
          language: 'english',
          question_kind: 'vivid_people'
      },
      {
          question: "Remember the image you had in your mind while you read the scenario. Rate how vividly you imagined each of the following parts of the scene. <br /><br /> How vividly can you picture the overall scene?",
          optionLeft: '',
          v01: 'No image',
          v02: 'Very vague & dim',
          v03: "Vague and dim",
          v04: "Not clear, but recognizable ",
          v05: "More or less clear",
          v06: "Very clear",
          v07: "Absolutely clear image",
          optionRight: ' ',
          dilemma: 'car',
          language: 'english',
          question_kind: 'vivid_overall'
      },
  ],


};


const comprehension_test = {

  forced_choice_english_test_trolly:[
    {
    question: "Erinner dich an das dilemma was du gelesen hast, welches Bild passt am best zu ihm?",
    pic1:"<img src='images/trolly1.jpg' alt='trolly1' style='width:100%;height:auto;'>",
    pic2:"<img src='images/trolly2.jpg' alt='trolly2' style='width:100%;height:auto;'>",
    pic3:"<img src='images/trolly3.jpg' alt='trolly3' style='width:100%;height:auto;'>",
    pic4:"<img src='images/trolly4.jpg' alt='trolly4' style='width:100%;height:auto;'>",
    dilemma: 'footbridge',
    language: 'english',
    question_kind: 'english_test'
  },

  ],
  forced_choice_english_test_car:[
    {
    question: "Erinner dich an das dilemma was du gelesen hast, welches Bild passt am best zu ihm?",
    pic1:"<img src='images/car_3.jpg' alt='car3' style='width:100%;height:auto;'>",
    pic2:"<img src='images/car_2.jpg' alt='car2' style='width:100%;height:auto;'>",
    pic3:"<img src='images/car_1.jpg' alt='car1' style='width:100%;height:auto;'>",
    pic4:"<img src='images/car_4.jpg' alt='car4' style='width:100%;height:auto;'>",

    dilemma: 'car',
    language: 'english',
    question_kind: 'english_test'
  },
  ],


forced_choice_german_test_trolly:[
  {
  question: "Erinner dich an das dilemma was du gelesen hast, welches Bild passt am best zu ihm?",
  pic1:"<img src='images/trolly1.jpg' alt='trolly1' style='width:100%;height:auto;'>",
  pic2:"<img src='images/trolly2.jpg' alt='trolly2' style='width:100%;height:auto;'>",
  pic3:"<img src='images/trolly3.jpg' alt='trolly3' style='width:100%;height:auto;'>",
  pic4:"<img src='images/trolly4.jpg' alt='trolly4' style='width:100%;height:auto;'>",
  dilemma: 'footbridge',
  language: 'german',
  question_kind: 'german_test'
},

],
forced_choice_german_test_car:[
  {
  question: "Erinner dich an das dilemma was du gelesen hast, welches Bild passt am best zu ihm?",
  pic1:"<img src='images/car_3.jpg' alt='car3' style='width:100%;height:auto;'>",
  pic2:"<img src='images/car_2.jpg' alt='car2' style='width:100%;height:auto;'>",
  pic3:"<img src='images/car_1.jpg' alt='car1' style='width:100%;height:auto;'>",
  pic4:"<img src='images/car_4.jpg' alt='car4' style='width:100%;height:auto;'>",
  dilemma: 'car',
  language: 'german',
  question_kind: 'german_test'
},
],

};
