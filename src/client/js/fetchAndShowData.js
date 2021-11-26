async function fetchAndShowData (url = {}) {
    const res = await fetch(`http://localhost:8080/article_nlp/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(url)
    });
    const data = await res.json();
    document.getElementById('text').innerText = data.text;
    document.getElementById('agreement').innerText = data.agreement;
    document.getElementById('subjectivity').innerText = data.subjectivity;
    document.getElementById('confidence').innerText = data.confidence;
    document.getElementById('irony').innerText = data.irony;
    document.getElementById('score_tag').innerText = data.score_tag;
    document.querySelectorAll('p').forEach(element => {
        element.classList.remove('invisible');
    });

}

export { fetchAndShowData };