import { fetchAndShowData } from './fetchAndShowData';

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.validateURL(formText)) {
        fetchAndShowData({ url: formText });
    } else {
        alert('Enter a valid URL for your article !!');
    }
}



export { handleSubmit }
