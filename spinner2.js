const spinner2 = function() {
 
  let arr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${arr[i]}   `);
    }, 100 + (i * 200));
  }

};

spinner2();


