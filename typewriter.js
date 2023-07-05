const typeWriter = (sentence) => {
  
  let timer = 200;
  for(const char of sentence) {
  setTimeout(() => {
      process.stdout.write(char);
    }, timer);
    timer += 200;
  }    
  setTimeout(() => {
    console.log()
  }, timer);
}



typeWriter("hello there from lighthouse labs");
