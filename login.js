$(document).ready(function () {
    $('#submit').click(function (e) {
        e.preventDefault();
        const name = $('#name').val();
        const email = $('#email').val();

        if (name === '' || email === '') {
            $('#invalid_email').text("Input Fields can not be Empty!!");
            $('#invalid_email').css("color", "red");
            return false;
        }
        else if (IsEmail(email) === false) {
            $('#invalid_email').text("Entered Email is not Valid!!");
            $('#invalid_email').css("color", "red");
            return false;
        }
        else{
            $('#invalid_email').text("Entered Email is Valid!!");
            $('#invalid_email').css("color", "green");
            return true;
        }
        return false;
    });
});

function IsEmail(email) {
    const regex =
/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    }
    else {
        return true;
    }
}