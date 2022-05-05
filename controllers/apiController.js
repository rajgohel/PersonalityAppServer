const { QUESTIONS } = require("../constants/apiConstants");

exports.getQuestions = (req, res) => {
    res.send({
        "response_code": 1,
        "results": QUESTIONS
    });
};