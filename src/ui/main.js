import { caesarEncrypt, caesarDecrypt } from '../ciphers/caesar.js';

const $ = (sel) => document.querySelector(sel);

function getOptions() {
  return {
    onlyLetters: $('#only-letters').checked,
    preserveCase: $('#preserve-case').checked,
  };
}

$('#btn-encrypt').addEventListener('click', () => {
  const text = $('#input').value || '';
  const k = parseInt($('#key').value || '0', 10);
  $('#output').value = caesarEncrypt(text, k, getOptions());
});

$('#btn-decrypt').addEventListener('click', () => {
  const text = $('#input').value || '';
  const k = parseInt($('#key').value || '0', 10);
  $('#output').value = caesarDecrypt(text, k, getOptions());
});

$('#btn-swap').addEventListener('click', () => {
  $('#input').value = $('#output').value;
  $('#output').value = '';
  $('#input').focus();
});
