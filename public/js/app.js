console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const weather_icon = document.getElementById('weathear__icon')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location)
        .then((response) => {
            response.json()
                .then((data) => {
                    if (data.error) {
                        messageOne.textContent = data.error
                    } else {
                        weather_icon.setAttribute('src', data.weather_icon)
                        messageOne.textContent = data.weather_description + ', ' + data.weather_temprature + ' ℃'
                        messageTwo.textContent = 'perciptation: ' + data.perciptation + ' MM'
                        messageThree.textContent = data.location + ' lat: ' + data.latitude + ', long: ' + data.longitude
                    }
                })
        })
})