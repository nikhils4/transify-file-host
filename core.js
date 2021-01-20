const data = document.getElementsByTagName('body')[0].innerHTML;
fetch('https://transify.herokuapp.com/auth/html/translate', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        html: data
    })
})
.then((res) => res.json()) 
.then(res => {
    document.getElementsByTagName('body')[0].innerHTML = res.message
    console.log('Translated!')
})
.catch(err => {
    console.log('Translation service failed!')
})