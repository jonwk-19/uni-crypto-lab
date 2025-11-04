import { mod } from '../core/mod.js';
import { toAZIndex, fromAZIndex, isLetter, normalizeText } from '../core/codec.js';

export function caesarEncrypt(plain, k, options = {}) {
  const { onlyLetters = true, preserveCase = true } = options;
  const K = mod(Number(k || 0), 26);
  const norm = normalizeText(plain);

  let out = '';
  for (let i = 0; i < norm.length; i++) {
    const origCh = plain[i];        // para conservar case original
    const ch = norm[i];             // normalizado para procesar

    if (isLetter(ch)) {
      const idx = toAZIndex(ch);
      const enc = mod(idx + K, 26);
      const keepUpper = preserveCase ? (origCh === origCh.toUpperCase()) : true;
      out += fromAZIndex(enc, keepUpper);
    } else {
      out += onlyLetters ? origCh : ch; // si no es letra, lo dejamos
    }
  }
  return out;
}

export function caesarDecrypt(cipher, k, options = {}) {
  return caesarEncrypt(cipher, -Number(k || 0), options);
}
