// In this file you can specify the trial data for your experiment


const trial_info = {
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
    ],
    //erster teil der aufgabe
    key_press: [
        {
            //question: 'Is this the same figure?',
            picture: 'images/1_50_different.jpg',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'different',
            angle: 50,
            item: 1,
            //correct: 'different',
        },
        {
            //question: 'Is this the same figure?',
            picture: 'images/1_50_same.jpg',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'same',
            angle: 50,
            item: 1,
            //correct: 'same',
        },
        {
            //question: 'Is this the same figure?',
            picture: 'images/1_150_different.jpg',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'different',
            angle: 150,
            item: 1,
            //correct: 'different',
        },
        {
            //question: 'Is this the same figure?',
            picture: 'images/1_150_same.jpg',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'same',
            angle: 150,
            item: 1,
            //correct: 'same',
        },
        {
            //question: 'Is this the same figure?',
            picture: 'images/2_50_different.jpg',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'different',
            angle: 50,
            item: 2,
            //correct: 'different',
        }
    ]
};

const practice_trials = {
    key_press: [
        {
            picture: "images/practice/13_50_same.jpg",
            item: 13,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/practice/13_50_different.jpg",
            item: 13,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/practice/13_150_same.jpg",
            item: 13,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/practice/13_150_different.jpg",
            item: 13,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 150,
        },
        {
            picture: "images/practice/14_50_same.jpg",
            item: 14,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/practice/14_50_different.jpg",
            item: 14,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/practice/14_150_same.jpg",
            item: 14,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 150
        },
        {
            picture: "images/practice/14_150_different.jpg",
            item: 14,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 150
        },
        {
            picture: "images/practice/15_50_same.jpg",
            item: 15,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 50
        },
        {
            picture: "images/practice/15_50_different.jpg",
            item: 15,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 50
        },
        {
            picture: "images/practice/15_150_same.jpg",
            item: 15,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 150
        },
        {
            picture: "images/practice/15_150_different.jpg",
            item: 15,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 150
        },
    ],
};

const main_trials = {
    key_press: [
        {
            picture: "images/main/1_50_same.jpg",
            item: 1,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 50,

        },
        {
            picture: "images/main/1_50_different.jpg",
            item: 1,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 50,

        },
        {
            picture: "images/main/1_150_same.jpg",
            item: 1,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/1_150_different.jpg",
            item: 1,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 150,
        },
        {
            picture: "images/main/2_50_same.jpg",
            item: 2,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/2_50_different.jpg",
            item: 2,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/2_150_same.jpg",
            item: 2,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/2_150_different.jpg",
            item: 2,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 150,
        },

        {
            picture: "images/main/3_50_same.jpg",
            item: 3,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/3_50_different.jpg",
            item: 3,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/3_150_same.jpg",
            item: 3,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/3_150_different.jpg",
            item: 3,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 150,
        },

        {
            picture: "images/main/4_50_same.jpg",
            item: 4,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/4_50_different.jpg",
            item: 4,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/4_150_same.jpg",
            item: 4,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/4_150_different.jpg",
            item: 4,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 150,
        },

        {
            picture: "images/main/5_50_same.jpg",
            item: 5,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/5_50_different.jpg",
            item: 5,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/5_150_same.jpg",
            item: 5,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/5_150_different.jpg",
            item: 5,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 150,
        },
        {
            picture: "images/main/6_50_same.jpg",
            item: 6,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/6_50_different.jpg",
            item: 6,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/6_150_same.jpg",
            item: 6,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/6_150_different.jpg",
            item: 6,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 150,
        },

        {
            picture: "images/main/7_50_same.jpg",
            item: 7,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/7_50_different.jpg",
            item: 7,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/7_150_same.jpg",
            item: 7,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/7_150_different.jpg",
            item: 7,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 150,
        },

        {
            picture: "images/main/8_50_same.jpg",
            item: 8,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/8_50_different.jpg",
            item: 8,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/8_150_same.jpg",
            item: 8,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/8_150_different.jpg",
            item: 8,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 150,
        },

        {
            picture: "images/main/9_50_same.jpg",
            item: 9,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/9_50_different.jpg",
            item: 9,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/9_150_same.jpg",
            item: 9,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/9_150_different.jpg",
            item: 9,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 150,
        },
        {
            picture: "images/main/10_50_same.jpg",
            item: 10,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/10_50_different.jpg",
            item: 10,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/10_150_same.jpg",
            item: 10,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/10_150_different.jpg",
            item: 10,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 150,
        },
        {
            picture: "images/main/11_50_same.jpg",
            item: 11,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/11_50_different.jpg",
            item: 11,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/11_150_same.jpg",
            item: 11,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/11_150_different.jpg",
            item: 11,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 150,
        },
        {
            picture: "images/main/12_50_same.jpg",
            item: 12,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/12_50_different.jpg",
            item: 12,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/12_150_same.jpg",
            item: 12,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/12_150_different.jpg",
            item: 12,
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: "different",
            angle: 150,
        },
    ],
};
