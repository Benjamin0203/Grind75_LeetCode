
const test = string => {
  return new Promise((resolve, reject) => {
    if (!string) {
      reject("You forgot a string")
    } else {
      resolve(`Here is your string:  ${string}`)
    }
  });
};

test("haha")
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
  .finally()