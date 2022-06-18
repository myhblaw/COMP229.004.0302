/*
    app.js
    Student's name: Yuk Hong Ma
    Student ID: 301210312
    Date: June 17, 2022
*/

console.log('Goes to the client side.');

if(getTitle == "Business Contacts List View" || "Update View")
{
    let deleteButtons = document.querySelectorAll('btn btn-danger btn-sm');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}


if(getTitle == "Sign-up Form")
{
    const confirm = document.querySelector('input[name=password_confirm]');

    confirm.addEventListener('change', onChange); 
}

function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=password_confirm]');
    
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
}