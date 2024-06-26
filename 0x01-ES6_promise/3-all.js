import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((resp) => {
      console.log(`${resp[0].body} ${resp[1].firstName} ${resp[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
