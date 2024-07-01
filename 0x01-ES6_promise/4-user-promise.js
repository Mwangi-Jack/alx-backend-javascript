function signUpUser(firstName, lastName) {
  const promise = new Promise((reslove) => {
    reslove({ firstName, lastName });
  });

  return promise;
}

export default signUpUser;
