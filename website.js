const fieldnames = [
    'firstName',
    'surname',
    'email',
    'phone',
    'message',
];

document.querySelector('#contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    let sendForm = true;
    fieldnames.forEach(function (fieldname, index) {
        const field = document.getElementById(fieldname)
        // data += fieldname + '=' + field.value;
        if (['firstName', 'email', 'message'].includes(fieldname)) {
            if (field.value === '') {
                const help = document.getElementById(fieldname + 'Help');
                help.classList.remove('text-muted')
                sendForm = false
            } else {
                const help = document.getElementById(fieldname + 'Help');
                help.classList.add('text-muted')
            }
        }

    })
    if (sendForm) {
        const form = document.getElementById('contact-form');
        const body = new FormData(form);
        const response = await fetch('/', { method: 'POST', body: body });
        form.innerHTML = 'Danke für deine Nachricht! Ich melde mich üblicherweise innerhalb von 24 Stunden.'
    }
})
