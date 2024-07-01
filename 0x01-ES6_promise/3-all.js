import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  uploadPhoto()
    .then((resp) => {
      createUser()
        .then((resp1) => {
          console.log(`${resp.body} ${resp1.firstName} ${resp1.lastName}`);
        });
    });
}

export default handleProfileSignup;
