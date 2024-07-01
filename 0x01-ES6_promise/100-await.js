import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
  return { photo, user };
}

export default asyncUploadUser;
