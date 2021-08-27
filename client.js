console.log('js');

$(document).ready(readyNow);

function readyNow() {
    console.log('DOM Ready');
$('#submit-button').on('click', appendCityToTable); 
}
    function appendCityToTable(){
        let cityName = $('#city-name').val();//'jquery, go find our input field with the ID city-name' (can be string or number or array)
        let temperature = $('#city-temperature').val(); //'hey JQ, go find our input field with the city-temperature ID and grab it
        console.log(cityName, temperature);
    }

