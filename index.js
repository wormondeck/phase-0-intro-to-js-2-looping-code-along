function writeCards(names) {
    let thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }

  function countDown(startNumber) {
    for (let i = startNumber; i >= 0; i--) {
      console.log(i);
    }
  }
  
  countDown(5);