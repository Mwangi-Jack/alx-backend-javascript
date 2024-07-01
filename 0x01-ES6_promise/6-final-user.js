import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  const promise = new Promise((resolve) => {
    resolve(photo.then((response1) => {
      user.then((response2) => [{
        status: response2.status,
        value: response1.body,
      }]);
    }));
  });

  return promise;
}

export default handleProfileSignup;
