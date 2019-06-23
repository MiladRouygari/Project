// In this file you can specify the trial data for your experiment

//This might need to be changed, if we want to counter balanced between Decision and imagination,
//I don't think imagination needs to be counter balanced or does it?


const trial_info = {
    forced_choice_1_german: [
        {
            question: "Würdest du den Mann stoßen?",
            optionLeft: 'definitiv stoßen',
            optionRight: 'definitiv nicht stoßen',
            dilemma: 'footbridge',
            language: 'german'
        },
        {
            question: "Wie lebhaft stellst du dir den Mann vor?",
            optionLeft: "absolut klar",
            optionRight: "kein Bild",
            dilemma: 'footbridge',
            language: 'german'
        },
        {
            question: "Wie lebhaft stellst du dir die fünf Menschen vor?",
            optionLeft: "absolut klar",
            optionRight: "kein Bild",
            dilemma: 'footbridge',
            language: 'german'
        },
        {
            question: "Wie lebhaft stellst du dir die gesamte Situation vor?",
            optionLeft: "absolut klar",
            optionRight: "kein Bild",
            dilemma: 'footbridge',
            language: 'german'
        }
    ],
    forced_choice_2_german: [
      {
          question: "Würdest du den Mann stoßen ? -need to edit here-",
          optionLeft: 'definitiv stoßen',
          optionRight: 'definitiv nicht stoßen',
          dilemma: 'bikers',
          language: 'german'
      },
      {
          question: "Wie lebhaft stellst du dir den Mann vor?",
          optionLeft: "absolut klar",
          optionRight: "kein Bild",
          dilemma: 'bikers',
          language: 'german'
      },
      {
          question: "Wie lebhaft stellst du dir die fünf Menschen vor?",
          optionLeft: "absolut klar",
          optionRight: "kein Bild",
          dilemma: 'bikers',
          language: 'german'
      },
      {
          question: "Wie lebhaft stellst du dir die gesamte Situation vor?",
          optionLeft: "absolut klar",
          optionRight: "kein Bild",
          dilemma: 'bikers',
          language: 'german'
      }
    ],
    forced_choice_3_german: [
      {
          question: "Würdest du den Mann stoßen ? -need to edit here-",
          optionLeft: 'definitiv stoßen',
          optionRight: 'definitiv nicht stoßen',
          dilemma: 'fairyland',
          language: 'german'
      },
      {
          question: "Wie lebhaft stellst du dir den Mann vor?",
          optionLeft: "absolut klar",
          optionRight: "kein Bild",
          dilemma: 'fairyland',
          language: 'german'
      },
      {
          question: "Wie lebhaft stellst du dir die fünf Menschen vor?",
          optionLeft: "absolut klar",
          optionRight: "kein Bild",
          dilemma: 'fairyland',
          language: 'german'
      },
      {
          question: "Wie lebhaft stellst du dir die gesamte Situation vor?",
          optionLeft: "absolut klar",
          optionRight: "kein Bild",
          dilemma: 'fairyland',
          language: 'german'
      }
    ],
    forced_choice_1_english: [
      {
          question: "Would you push the man?",
          optionLeft: 'definitely would not push him',
          v01: '1',
          v02: '2',
          v03: "3",
          v04: "4",
          v05: "5",
          v06: "6",
          v07: "7",
          optionRight: 'definitely would not push him',
          dilemma: 'footbridge',
          language: 'english'
      },
      {
          question: "How vividly can you picture the man?",
          optionLeft: '',
          v01: 'no image                   ',
          v02: 'Very vague & dim           ',
          v03: "Vague and dim              ",
          v04: "Not clear, but recognizable",
          v05: "More or less clear         ",
          v06: "Very clear                 ",
          v07: "Absolutely clear image     ",
          optionRight: ' ',
          dilemma: 'footbridge',
          language: 'english'
      },
      {
          question: "How vividly can you picture the five people?",
          optionLeft: '',
          v01: 'no image                    ',
          v02: 'Very vague & dim            ',
          v03: "Vague and dim               ",
          v04: "Not clear, but recognizable ",
          v05: "More or less clear          ",
          v06: "Very clear                  ",
          v07: "Absolutely clear image      ",
          optionRight: ' ',
          dilemma: 'footbridge',
          language: 'english'
      },
      {
          question: "How vividly can you picture the overall scene?",
          optionLeft: '',
          v01: 'no image                    ',
          v02: 'Very vague & dim            ',
          v03: "Vague and dim               ",
          v04: "Not clear, but recognizable ",
          v05: "More or less clear          ",
          v06: "Very clear                  ",
          v07: "Absolutely clear image     ",
          optionRight: ' ',
          dilemma: 'footbridge',
          language: 'english'
      },
    ],
    forced_choice_2_english: [
      {
          question: "Would you push the man?",
          optionLeft: 'definitely would not push him',
          v01: '1',
          v02: '2',
          v03: "3",
          v04: "4",
          v05: "5",
          v06: "6",
          v07: "7",
          optionRight: 'definitely would not push him',
          dilemma: 'bikers',
          language: 'english'
      },
      {
          question: "How vividly can you picture the man?",
          optionLeft: '',
          v01: 'no image',
          v02: 'Very vague & dim',
          v03: "Vague and dim",
          v04: "Not clear, but recognizable ",
          v05: "More or less clear",
          v06: "Very clear",
          v07: "Absolutely clear image",
          optionRight: ' ',
          dilemma: 'bikers',
          language: 'english'
      },
      {
          question: "How vividly can you picture the five people?",
          optionLeft: '',
          v01: 'no image',
          v02: 'Very vague & dim',
          v03: "Vague and dim",
          v04: "Not clear, but recognizable ",
          v05: "More or less clear",
          v06: "Very clear",
          v07: "Absolutely clear image",
          optionRight: ' ',
          dilemma: 'bikers',
          language: 'english'
      },
      {
          question: "How vividly can you picture the overall scene?",
          optionLeft: '',
          v01: 'no image',
          v02: 'Very vague & dim',
          v03: "Vague and dim",
          v04: "Not clear, but recognizable ",
          v05: "More or less clear",
          v06: "Very clear",
          v07: "Absolutely clear image",
          optionRight: ' ',
          dilemma: 'bikers',
          language: 'english'
      },
  ],
    forced_choice_3_english: [
      {
          question: "Would you push the man?",
          optionLeft: 'definitely would not push him',
          v01: '1',
          v02: '2',
          v03: "3",
          v04: "4",
          v05: "5",
          v06: "6",
          v07: "7",
          optionRight: 'definitely would not push him',
          dilemma: 'fairyland',
          language: 'english'
      },
      {
          question: "How vividly can you picture the man?",
          optionLeft: '',
          v01: 'no image',
          v02: 'Very vague & dim',
          v03: "Vague and dim",
          v04: "Not clear, but recognizable ",
          v05: "More or less clear",
          v06: "Very clear",
          v07: "Absolutely clear image",
          optionRight: ' ',
          dilemma: 'fairyland',
          language: 'english'
      },
      {
          question: "How vividly can you picture the five people?",
          optionLeft: '',
          v01: 'no image',
          v02: 'Very vague & dim',
          v03: "Vague and dim",
          v04: "Not clear, but recognizable ",
          v05: "More or less clear",
          v06: "Very clear",
          v07: "Absolutely clear image",
          optionRight: ' ',
          dilemma: 'fairyland',
          language: 'english'
      },
      {
          question: "How vividly can you picture the overall scene?",
          optionLeft: '',
          v01: 'no image',
          v02: 'Very vague & dim',
          v03: "Vague and dim",
          v04: "Not clear, but recognizable ",
          v05: "More or less clear",
          v06: "Very clear",
          v07: "Absolutely clear image",
          optionRight: ' ',
            dilemma: 'fairyland',
            language: 'english'
      },
  ],
  forced_choice_test_english: [
    {
        question: "Would you push the man?",
        optionLeft: 'definitely would not push him',
        v01: '1',
        v02: '2',
        v03: "3",
        v04: "4",
        v05: "5",
        v06: "6",
        v07: "7",
        optionRight: 'definitely would not push him'
    },
    {
        question: "How vividly can you picture the man?",
        optionLeft: '',
        v01: 'no image',
        v02: 'Very vague & dim',
        v03: "Vague and dim",
        v04: "Not clear, but recognizable ",
        v05: "More or less clear",
        v06: "Very clear",
        v07: "Absolutely clear image",
        optionRight: ' '
    },
    {
        question: "How vividly can you picture the five people?",
        optionLeft: '',
        v01: 'no image',
        v02: 'Very vague & dim',
        v03: "Vague and dim",
        v04: "Not clear, but recognizable ",
        v05: "More or less clear",
        v06: "Very clear",
        v07: "Absolutely clear image",
        optionRight: ' '
    },
    {
        question: "How vividly can you picture the overall scene?",
        optionLeft: '',
        v01: 'no image',
        v02: 'Very vague & dim',
        v03: "Vague and dim",
        v04: "Not clear, but recognizable ",
        v05: "More or less clear",
        v06: "Very clear",
        v07: "Absolutely clear image",
        optionRight: ' '
    },
],
};
