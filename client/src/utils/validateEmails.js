const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
  // console.log('emails are:', emails);
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => !re.test(email));

  if (invalidEmails[invalidEmails.length - 1] === '') {
    invalidEmails.pop();
  }

  if (invalidEmails.length) {
    return `The following emails are invalid: ${invalidEmails}`;
  }

  return;
};
