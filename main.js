const sumTheTreeValues = (root) =>
  !root
    ? 0
    : root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
console.log(
  sumTheTreeValues({
    value: 11,
    left: { value: 0, left: null, right: null },
    right: {
      value: 0,
      left: null,
      right: { value: 1, left: null, right: null },
    },
  })
);
