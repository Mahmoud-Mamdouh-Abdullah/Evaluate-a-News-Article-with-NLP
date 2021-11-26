const fetch = require('node-fetch');
const FormData = require('form-data');


const NLP = async (articleURL) => {
    const formData = new FormData();
    formData.append("key", process.env.API_KEY);
    formData.append("url", articleURL);
    formData.append("lang", "en");

    const requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    };

    const res = await fetch(process.env.BASE_URL, requestOptions);
    try {
        const body = await res.json();
        return {
            text: body.sentence_list[0].text,
            score_tag: body.score_tag,
            agreement: body.agreement,
            subjectivity: body.subjectivity,
            confidence: body.confidence,
            irony: body.irony
        }
    } catch (e) {
        return {
            error: e.message
        }
    }
}

module.exports = NLP
