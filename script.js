const chatInput = document.querySelector(".chat-input input");
const chatMessages = document.querySelector(".chat-messages");
const sendButton = document.querySelector(".chat-input button");

// add event listener to send button
sendButton.addEventListener("click", (event) => {
  event.preventDefault();

  // get message text from input
  const messageText = chatInput.value;

  // create new message element for user message
  const userMessage = document.createElement("div");
  userMessage.classList.add("message", "outgoing");
  const userMessageContent = document.createElement("div");
  userMessageContent.classList.add("message-content");
  const userMessageTextElement = document.createElement("p");
  userMessageTextElement.textContent = messageText;
  userMessageContent.appendChild(userMessageTextElement);
  userMessage.appendChild(userMessageContent);

  // add user message to chat
  chatMessages.appendChild(userMessage);

  // clear input field
  chatInput.value = "";

  // generate bot response
  const botResponse = generateBotResponse(messageText);

  // create new message element for bot response
  const botMessage = document.createElement("div");
  botMessage.classList.add("message", "incoming");
  const botMessageContent = document.createElement("div");
  botMessageContent.classList.add("message-content");
  const botMessageTextElement = document.createElement("p");
  botMessageTextElement.textContent = botResponse;
  botMessageContent.appendChild(botMessageTextElement);
  botMessage.appendChild(botMessageContent);

  // add bot response to chat after a delay
  setTimeout(() => {
    chatMessages.appendChild(botMessage);
  }, 1000);
});

// add event listener to input field for "enter" key
chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    sendButton.click();
  }
});

// generate bot response based on user message
function generateBotResponse(messageText) {
  // TODO: add your bot logic here
  return "I'm just a simple bot and I don't know how to respond to that.";
}
