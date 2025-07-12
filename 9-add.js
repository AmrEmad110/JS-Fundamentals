const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

function add(x, y) {
  return x + y;
}

if (isNaN(a) || isNaN(b)) {
  console.log("Missing or invalid number(s)");
} else {
  console.log(add(a, b));
}
