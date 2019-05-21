$(document).ready(() => {
    console.log('register');
    $('#register').on('click', (event) => {
        window.alert('random');
        var id = $('#id').val();
        var pass = $('#pass').val();
        var cpass = $("#cpass").val();
        if (pass != cpass){
            console.log(pass);
            console.log(cpass);
            window.alert('password and confirm password dont match');
        }
        else{
            var url = 'https://loginq.herokuapp.com/populate?id=' + id + "&pass=" + pass;
            console.log(url);
            $.get(url , (result) => {
                console.log('result');
                console.log(result);
                if (result == 'err'){
                    window.alert('error in the process');
                }
                else if(result == 'success'){
                    window.alert('new user added');
                }
                else {
                    window.alert('error in the process');
                }
            })
        }
    })
})
