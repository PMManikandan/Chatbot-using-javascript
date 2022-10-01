function talk(){  
  var know = {  
   "Who are you" : "Hello, i am zara",  
   "how are you" : "Good :)",    
   "What’s up": "not too much. How's your day going?",
   "Good morning": "Good morning",
   "Good afternoon": "Good afternoon",
   "Good night": "Good night",
   "Tell me something": "let's discover your fortune",
   "hello" : "Hi,it's really good to hear from you love you! I hope you and your loved ones are safe and healthy",
   "Hi": "Hi,it's really good to hear from you love you! I hope you and your loved ones are safe and healthy",
   "Happy birthday": "Ooh, happy to hear from you but today is not my birthday. wish me on december 20", 
   "ok" : "Thank You So Much ",  
   "Bye" : "Okay! Will meet soon.."  
  };  
  var user = document.getElementById('userBox').value;  
   document.getElementById('chatLog').innerHTML = user + "<br>";  
  if (user in know) {  
   document.getElementById('chatLog').innerHTML = know[user] + "<br>";  
  }else{  
   document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";  
  }  
 }  