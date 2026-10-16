const convert = (n) => {
  let result = '';
  if (n % 3 === 0) {
    result += 'Pling';
  }
  if (n % 5 === 0) {
    result += 'Plang';
  }
  if (n % 7 === 0) {
    result += 'Plong';
  }
  return result === '' ? n.toString() : result;
};

const __in = [1, 3, 5, 7, 6, 8, 9, 10, 15, 21, 25, 27, 35, 49, 52, 105];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: convert(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
