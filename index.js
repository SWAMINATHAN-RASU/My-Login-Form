

function login(){
    let useremail = document.getElementById('tookemail').value
    let userpassword = document.getElementById('tookpassword').value

    if( useremail == "Entri Elevate" && userpassword == "admin123") { 
        alert('Login Successfully')
        alert ('Welcome to My Portfolie Webpage ')  
        window.location.assign("https://swaminathan-rasu.github.io/My-Portfolie-Website-2/")
        document.getElementById('tookemail').value = "";
        document.getElementById('tookpassword').value = "";
    }
     else if( useremail == "" && userpassword == "" ) {
        alert(`please fill out this required data`)
    } else{
        alert('Login denied please check your email or password');       
        document.getElementById('tookemail').value = "";
        document.getElementById('tookpassword').value = "";
    }

}


function forgotemail()
{
    prompt('Enter the email')
    alert('Verification code sent to your email')
}


