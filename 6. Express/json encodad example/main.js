document.querySelector('#json-form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("prevent");

    const formData = new FormData(event.target);
    const jsonData = {
        name: formData.get('name'),
        email: formData.get('email'),
    };

    fetch('http://localhost:2000/submit-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    })
});
