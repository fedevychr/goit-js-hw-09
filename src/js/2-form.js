const feedbackForm = document.querySelector('.feedback-form');
const userEmail = document.querySelector('.feedback-form input');
const userMessage = document.querySelector('.feedback-form textarea');

const userInputData = localStorage.getItem('feedback-form-state');
const userData = { email: '', message: '' };

if (userInputData) {
  const parsedData = JSON.parse(userInputData);
  userEmail.value = parsedData.email;
  userMessage.value = parsedData.message;
}

const onSubmit = event => {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const message = event.target.elements.message.value.trim();
  if (email && message) {
    localStorage.removeItem('feedback-form-state');
    userData.email = email;
    userData.message = message;
    event.target.reset();
    console.log(userData);
  } else {
    alert('All form fields must be filled in');
  }
};

const onChangeFeedback = () => {
  const email = userEmail.value.trim();
  const message = userMessage.value.trim();
  if (email || message) {
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({ email, message })
    );
  } else {
    localStorage.removeItem('feedback-form-state');
  }
};

feedbackForm.addEventListener('submit', onSubmit);
feedbackForm.addEventListener('input', onChangeFeedback);
