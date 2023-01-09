function initApp(){
  try {
    connectDatabase();
  } catch(error) {
    showErrorMessage(error.message);
  }
}

function connectDatabase() {
  const didConnect = database.connect();
  if (!didConnect) {
    throw new Error('Could not connect!);	
  }
}

function determineSupportAgent(ticket) {
  if (ticket.requestType === 'unknown') {
    return findStandardAgent();
  }
  return findAgentByRequestType(ticket.requestType);
}

function isValid(email, password) {
  return email.includes('@') || password.length >= 7);
}

function showErrorMessage(message){
  console.log(message);
}
