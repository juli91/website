const fieldnames = [
    'firstName',
    'surname',
    'email',
    'phone',
    'message',
];

document.querySelector('#contact-form').addEventListener('submit', function (e) {
e.preventDefault();
// alert("Danke für deine Nachricht! Ich melde mich in der Regel innerhalb von 24 Stunden.");
const action = document.getElementById('contact-form').getAttribute('action');
console.log(action)
fieldnames.forEach(function (fieldname) {
    const field = document.getElementById(fieldname)
    console.log(fieldname, field.value)

})
})

// $("#my-form").submit(function(e) {
//     e.preventDefault();
  
//     var $form = $(this);
//     $.post($form.attr("action"), $form.serialize()).then(function() {
//       alert("Thank you!");
//     });
//   });