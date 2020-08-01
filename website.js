const fieldnames = [
    'firstName',
    'surname',
    'email',
    'phone',
    'message',
];

document.querySelector('#contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    let data = '';
    // alert("Danke für deine Nachricht! Ich melde mich in der Regel innerhalb von 24 Stunden.");
    const action = document.getElementById('contact-form').getAttribute('action');
    console.log(action)
    fieldnames.forEach(function (fieldname, index) {
        const field = document.getElementById(fieldname)
        data += fieldname + '=' + field.value;
        if (index < fieldnames.length -1) {
            data += '&';
        }
        console.log(fieldname, field.value);

    })
    const response = await fetch (action, {method: 'POST', body: data});
    console.log(response)
})

// $("#my-form").submit(function(e) {
//     e.preventDefault();

//     var $form = $(this);
//     $.post($form.attr("action"), $form.serialize()).then(function() {
//       alert("Thank you!");
//     });
//   });