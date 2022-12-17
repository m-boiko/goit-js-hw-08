import debounce from 'debounce';

const formEl = document.querySelector('.feedback-form');
const EmailInput = document.querySelector('input');
const MessageInput = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

formEl.addEventListener('submit', OnFormSubmit);
formEl.addEventListener('input', debounce(OnFormChange, 500));

function OnFormChange(e) {
  formData[e.target.name] = e.target.value;
  console.log('OnFormChange  e.target.name', e.target.name);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log('formData', formData);
}

function OnFormSubmit(evt) {
  evt.preventDefault();
  const resultData = new FormData(evt.currentTarget);
  const payLoad = {
    email: resultData.get('email'),
    message: resultData.get('message'),
  };
  console.log(payLoad);

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function MessageOutput() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const psrsData = JSON.parse(savedMessage);
  console.log('MessageOutput  psrsData', psrsData);

  console.log('MessageOutput  savedMessage', savedMessage);

  if (psrsData) {
    EmailInput.value = psrsData.email;

    MessageInput.value = psrsData.message;
  }
}
MessageOutput();
