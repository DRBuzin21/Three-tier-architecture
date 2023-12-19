function authenticateUser(username, password) {
  return fetch('/api/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => data.success)
    .catch((error) => {
      console.error('Error:', error);
      return false;
    });
}

function displayMessage(message, isSuccess) {
  const messageElement = document.getElementById('message');
  messageElement.innerText = message;

  if (isSuccess) {
    messageElement.style.color = 'green';
  } else {
    messageElement.style.color = 'red';
  }
}