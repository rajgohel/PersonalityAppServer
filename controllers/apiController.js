exports.getQuestions = (req, res) => {
    res.send({
        "response_code": 0,
        "results": [
            {
                "category": "Entertainment: Comics",
                "type": "multiple",
                "difficulty": "easy",
                "question": "Who is Batman?",
                "correct_answer": "Bruce Wayne",
                "incorrect_answers": [
                    "Clark Kent",
                    "Barry Allen",
                    "Tony Stark"
                ]
            },
            {
                "category": "Entertainment: Comics",
                "type": "multiple",
                "difficulty": "easy",
                "question": "This Marvel superhero is often called &quot;The man without fear&quot;.",
                "correct_answer": "Daredevil",
                "incorrect_answers": [
                    "Thor",
                    "Wolverine",
                    "Hulk"
                ]
            },
            {
                "category": "Entertainment: Comics",
                "type": "multiple",
                "difficulty": "easy",
                "question": "Which universe crossover was introduced in the &quot;Sonic the Hedgehog&quot; comic issue #247?",
                "correct_answer": "Mega Man",
                "incorrect_answers": [
                    "Super Mario Brothers",
                    "Alex Kidd",
                    "Super Monkey Ball"
                ]
            },
            {
                "category": "Entertainment: Comics",
                "type": "multiple",
                "difficulty": "easy",
                "question": "What is the alter-ego of the DC comics character &quot;Superman&quot;?",
                "correct_answer": "Clark Kent",
                "incorrect_answers": [
                    "Bruce Wayne",
                    "Arthur Curry",
                    "John Jones"
                ]
            },
            {
                "category": "Entertainment: Comics",
                "type": "multiple",
                "difficulty": "easy",
                "question": "What is the full first name of the babysitter in Calvin and Hobbes?",
                "correct_answer": "Rosalyn",
                "incorrect_answers": [
                    "Rose",
                    "Ruby",
                    "Rachel"
                ]
            },
            {
                "category": "Entertainment: Comics",
                "type": "multiple",
                "difficulty": "easy",
                "question": "The main six year old protagonist in Calvin and Hobbes is named after what theologian?",
                "correct_answer": "John Calvin",
                "incorrect_answers": [
                    "Calvin Klein",
                    "Calvin Coolidge",
                    "Phillip Calvin McGraw"
                ]
            },
            {
                "category": "Entertainment: Comics",
                "type": "multiple",
                "difficulty": "easy",
                "question": "In &quot;Homestuck&quot; the &quot;Kingdom of Darkness&quot; is also known as?",
                "correct_answer": "Derse",
                "incorrect_answers": [
                    "Skaia",
                    "Prospit",
                    "The Medium"
                ]
            },
            {
                "category": "Entertainment: Comics",
                "type": "multiple",
                "difficulty": "easy",
                "question": "When was Marvel Comics founded?",
                "correct_answer": "1939",
                "incorrect_answers": [
                    "1932",
                    "1951",
                    "1936"
                ]
            },
            {
                "category": "Entertainment: Comics",
                "type": "multiple",
                "difficulty": "easy",
                "question": "In Black Hammer, what city did the heroes save from the Anti-God?",
                "correct_answer": "Spiral City",
                "incorrect_answers": [
                    "Mega-City One",
                    "Rockwood",
                    "Star City"
                ]
            },
            {
                "category": "Entertainment: Comics",
                "type": "multiple",
                "difficulty": "easy",
                "question": "What&#039;s the race of Invincible&#039;s father?",
                "correct_answer": "Viltrumite",
                "incorrect_answers": [
                    "Kryptonian",
                    "Kree",
                    "Irken"
                ]
            }
        ]
    });
};