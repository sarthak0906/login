$(document).ready(() => {
    $('#login').on('click', (event) => {
        // window.alert('random');
        var id = $('#id').val();
        var pass = $('#pass').val();
        var url = 'https://loginq.herokuapp.com/login?id=' + id + "&pass=" + pass;
        console.log(url);
        $.get(url , (result) => {
            console.log('result');
            console.log(result);
            if (result == 'err'){
                window.alert('error in the process');
            }
            else if(result == 'yes'){
                window.alert('welcome to the website');
                var count = 0; 
                var intervalObject = setInterval(function () { 
                        count++; 
                        console.log(count, 'seconds passed'); 
                        if (count == 1) { 
                            signout();
                            clearInterval(intervalObject); 
                        } 
                    }, 15000); 
            }
            else {
                window.alert('incorrect username id pair');
            }
        })
    })
})

function signout () {
    console.log('login period has expired');
    window.alert('login period has expired');
}