import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  const response1 = await photo;
  user.then((response2) => {
    console.log(`${response1.body} ${response2.firstName} ${response2.lastName}`);
  });
}

export default handleProfileSignup;
