const fieldnames = [
    'firstName',
    'surname',
    'email',
    'phone',
    'message',
];

document.querySelector('#contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    // let data = 'form-name=contact&';
    // const action = document.getElementById('contact-form').getAttribute('action');
    // console.log(action)
    // fieldnames.forEach(function (fieldname, index) {
    //     const field = document.getElementById(fieldname)
    //     data += fieldname + '=' + field.value;
    //     if (index < fieldnames.length -1) {
    //         data += '&';
    //     }
    //     console.log(fieldname, field.value);

    // })
    // const response = await fetch (action, {method: 'POST', body: data, headers: {'Content-Type': 'application(x-www-form-urlencoded'}});
    // console.log(response)

    const form = new FormData(document.getElementById('contact-form'));
    fetch('/', { method: 'POST', body: form});
})

// $("#my-form").submit(function(e) {
//     e.preventDefault();

//     var $form = $(this);
//     $.post($form.attr("action"), $form.serialize()).then(function() {
//       alert("Thank you!");
//     });
//   });