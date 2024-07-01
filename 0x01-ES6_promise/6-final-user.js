import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const respArr = [];
  const obj = { status: '', value: '' };
  try {
    const resp = await Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
    console.log(resp.status);
    obj.status = resp.status;
    obj.value = resp;
  } catch (err) {
    obj.value = err;
  }
  respArr.push(obj);

  return respArr;
}

export default handleProfileSignup;
