console.log('js');

$(document).ready(readyNow);

function readyNow() {
    console.log('DOM Ready');
$('#submit-button').on('click', appendCityToTable); 
}
    function appendCityToTable(){
        let cityName = $('#city-name').val();//'jquery, go find our input field with the ID city-name' (can be string or number or array)
        let temperature = $('#city-temperature').val(); //'hey JQ, go find our input field with the city-temperature ID and grab it
        let tempNumber = parseInt(temperature);
        console.log(cityName, temperature);

        let rowClass = '';

        if(tempNumber > 75){
            rowClass = 'warm';
        }
        else if (tempNumber < 50){
            rowClass = 'cold'; // html is just a BIG STRING...this is string-worthy
        }
        $('#city-table-body').append(`
            <tr class="${rowClass}">
                <td>${cityName}</td><td>${temperature}°</td>
            </tr>`)
    $('#city-name').val('');
    $('#city-temperature').val('');
    }

