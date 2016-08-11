var shippingBox = {
  length: 5,
  width: 8
};

function volume({ length, width, height = 10 }) {
  return length * width * height;
}

console.log(volume(shippingBox)); // 400
