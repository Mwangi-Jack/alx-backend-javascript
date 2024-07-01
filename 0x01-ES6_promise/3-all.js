import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  return photo
    .then((response1) => {
      user.then((response2) => {
        console.log(`${response1.body} ${response2.firstName} ${response2.lastName}`);
      });
    });
}

export default handleProfileSignup;
