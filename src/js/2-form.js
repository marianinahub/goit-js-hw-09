const form = document.querySelector('.feedback-form');

const formData = { email: '', message: '' };

if (localStorage.getItem('feedback-form-state') !== null) {
  const parse = JSON.parse(localStorage.getItem('feedback-form-state'));
  formData.email = parse.email;
  formData.message = parse.message;
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', function (event) {
  formData[event.target.name] = event.target.value.trim();
  const json = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', json);
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});