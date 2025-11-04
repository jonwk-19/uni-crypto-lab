const A_CODE = 'A'.charCodeAt(0);
const Z_CODE = 'Z'.charCodeAt(0);

export function toAZIndex(ch) {
  const code = ch.toUpperCase().charCodeAt(0);
  if (code < A_CODE || code > Z_CODE) return null;
  return code - A_CODE; // 0..25
}

export function fromAZIndex(i, keepUpper = true) {
  const ch = String.fromCharCode(i + A_CODE);
  return keepUpper ? ch : ch.toLowerCase();
}

// Quita acentos y convierte Ñ→N (para mod26 simple)
export function normalizeText(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // acentos
    .replace(/ñ/gi, 'n');
}

export function isLetter(ch) {
  const c = ch.toUpperCase();
  return c >= 'A' && c <= 'Z';
}
