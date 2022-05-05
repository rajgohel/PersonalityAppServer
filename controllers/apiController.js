const { QUESTIONS } = require("../constants/apiConstants");

exports.getQuestions = (req, res) => {
    res.send({
        "results": QUESTIONS
    });
};