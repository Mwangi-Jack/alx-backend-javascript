
function getResponseFromAPI(){
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (true) {
				resolve("API Response")
			} else {
				reject("Failed To Fetch Data")
			}
		}, 3000)
	});
	return promise;
}

// console.log(getResponseFromAPI())
export default getResponseFromAPI;
