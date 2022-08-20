export const validate = (formContent) => {
  const errors = {}

  if (formContent.name === '') {
    errors.name = 'You forgot to add your name'
  }

  if (formContent.email === '') {
    errors.email = 'You forgot to add your email'
  }

  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (formContent.email !== '' && !formContent.email.match(emailFormat)) {
    errors.emailFormat = "You didn't enter a valid email"
  }

  return errors
}