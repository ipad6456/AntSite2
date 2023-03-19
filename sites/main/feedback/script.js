const submit = document.getElementById("submitBtn")
const textArea = document.getElementById('textAreaFeedback')

function sendMessage(text) {
  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1086507706648633464/HWslKT5iDpC5uIHdhXH7U2YpCLMi4K2QB1iIbJh_F7z-IsJPhyQsUZULgYqg7GP3h1Ys");

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    "content": "@everyone",
    "embeds": [
      {
        "title": "Feedback!",
        "description": "Someone has left feedback! Feedback: `"+String(text)+"`",
        "color": 65517
      }
    ],
    "attachments": []
        }

        request.send(JSON.stringify(params));
      }

submit.addEventListener('click', function(){
  if(!(textArea.value === null || textArea.value.trim() === "")){
    sendMessage(textArea.value) 
    setTimeout(function(){
    window.location="/sites/main/feedback/responseRecorded"
    }, 1000)
  }
})