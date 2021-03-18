window.addEventListener('load', init);

function init() {

    "use strict";
    
    const $ = (id) => {
        return document.getElementById(id);
    };

    let empForm = document.getElementById('empForm');
    addEmp.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`ID: ${empid.value}`);
        console.log(`Full Name: ${fullName.value}`);
        console.log(`Extension: ${ext.value}`);
        console.log(`Email: ${email.value}`);
        console.log(`Department: ${department.value}`);
    });

}