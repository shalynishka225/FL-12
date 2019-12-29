const email = prompt('Enter your Email', '');
let password = '';
let passwordOld = '';
let passwordNew = '';
const lengthOfStr = 5;
const lengthofNewPass = 6;

switch(true) {
  case email === '' || email === null:
    alert('Canceled');
    break;

  case email.length < lengthOfStr:
    alert("I don't know any emails having name length less than 5 symbols");
    break;

  case email === 'user@gmail.com':
    password = prompt('Enter password','');
      if(password === '' || password === null) {
        alert('Canceled');
      } else if (password === 'UserPass') {
        alert('Correct password');
        if(confirm('Do you want to change your password?','Ok','cancel')) {
          passwordOld = prompt('Enter your old password','');
          if(passwordOld === '' || passwordOld === null) {
            alert('Canceled');
          } else if (passwordOld === 'UserPass') {
            alert('Correct password');
            password = prompt('Enter new password','');
            if(password === '' || password === null) {
              alert('Canceled');
            } else if (password.length < lengthofNewPass) {
              alert('It’s too short password. Sorry.')
            } else {
              passwordNew = prompt('Enter your new password again');
              if(passwordNew === password) {
                alert('You have successfully changed your password');
              } else {
                alert('You wrote the wrong password.');
              }
            }
          } else {
            alert('Wrong password');
          }
          
          
        } else {
          alert('You have failed the change');
        }
        

      } else {
        alert('Wrong password');
      }
      break;

      case email === 'admin@gmail.com':
          password = prompt('Enter password','');
            if(password === '' || password === null) {
              alert('Canceled');
            } else if (password === 'AdminPass') {
              alert('Correct password');
              if(confirm('Do you want to change your password?','Ok','cancel')) {
                passwordOld = prompt('Enter your old password','');
                if(passwordOld === '' || passwordOld === null) {
                  alert('Canceled');
                } else if (passwordOld === 'AdminPass') {
                  alert('Correct password');
                  password = prompt('Enter new password','');
                  if(password === '' || password === null) {
                    alert('Canceled');
                  } else if (password.length < lengthofNewPass) {
                    alert('It’s too short password. Sorry.')
                  } else {
                    passwordNew = prompt('Enter your new password again');
                    if(passwordNew === password) {
                      alert('You have successfully changed your password');
                    } else {
                      alert('You wrote the wrong password.');
                    }
                  }
                } else {
                  alert('Wrong password');
                }
                
                
              } else {
                alert('You have failed the change');
              }
              
      
            } else {
              alert('Wrong password');
            }
            break;

  default:
    alert("I don't know you");
}
