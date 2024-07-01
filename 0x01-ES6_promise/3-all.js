import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  const user = createUser();
  const response1 = await uploadPhoto();
  user.then((response2) => {
    console.log(`${response1.body} ${response2.firstName} ${response2.lastName}`);
  });
}

export default handleProfileSignup;
