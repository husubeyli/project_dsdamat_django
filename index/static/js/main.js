var domain = 'http://localhost:8000/az';



document.querySelector('#newsletter_subscribe').addEventListener('submit', async(e) => {
    e.preventDefault()
    let form = e.target;
    let postData = new FormData(form)

    postData.append('email', form.name.value)
    

    console.log(postData.entries());

})