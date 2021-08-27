console.log('js');

$(document).ready(readyNow);

function readyNow() {
    console.log('DOM Ready');
$('#submit-button').on('click', appendCityToTable); 
$('#city-table-body').on('click', '.clear-button', clearBackgroundColor)
}

function clearBackgroundColor() {
    // what is $(this)
    console.log($(this).parent().parent());
    let tableRow = $(this).parent().parent(); //THE jQuery is being sent to the below lines!
    tableRow.removeClass(); 
    tableRow.removeClass();
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
                <td><button class="clear-button">Clear Background</button></td>
            </tr>`)

    $('#city-name').val('');
    $('#city-temperature').val('');
    }

// .css adds property stuff (JQ)
//  .addClass adds class (JQ)
// .removeClass removes class (maybe in the parens??)