const data = document.getElementsByTagName('body')[0].innerHTML;
fetch('https://transifex-302222.appspot.com/auth/html/translate', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: {
        html: data
    }
})
.then((res) => res.json()) 
.then(res => {
    document.getElementsByTagName('body')[0].innerHTML = res.message
    console.log('Translated!')
})
.catch(err => {
    console.log('Translation service failed!')
})