function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((resp) => resp);
}

export default loadBalancer;
