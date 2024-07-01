export default function uploadPhoto(filename) {
  return new Promise((resolve) => {
    // reject(new Error(`${filename} cannot be processed`));
    resolve(`$${filename}`);
  });
}
