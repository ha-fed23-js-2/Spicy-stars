import Menu from "./lista";
import { useVariablesStore } from "./store";
// import { useVariablesStore } from "./store";

// const Menu = Menu
const baseUrl = 'https://forverkliga.se/JavaScript/api/jsonStore.php'
const key = 'spicy-stars'

async function saveToApi(MenuFood) {
	const url = baseUrl + '?method=save'
	console.log('saveToApi sending request to ' + url);
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			key: key,
			value: MenuFood  // kan vara hela state
		})
	});
	// If response.ok is true, the request succeeded
	console.log('saveToApi response ok? ', response.ok);
	// TODO: finish this when it's working
}
async function saveOriginalToApi(MenuFood) {
	const url = baseUrl + '?method=save'
	console.log('saveToApi sending request to ' + url);
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			key: key,
			value: Menu  // kan vara hela state
		})
	});
	
	console.log('saveToApi response ok? ', response.ok);
	
}

async function loadFromApi() {
	const url = baseUrl + '?method=load&key=' + key
	const response = await fetch(url, {
		method: 'GET'
	});
	// const data = await response.json();
	console.log('loadFromApi response ok? ', response.ok);
	let result = await response.json()
	console.log('loadFromApi result: ', result);
	return result
}

// const handleAPI = async () => {
// 	await saveToApi()
// 	 const result = await loadFromApi()

// 	console.log("LoadFronApi: ", result);
// }
const handleAPI = async () => {
	// await saveToApi()
	 const result = await loadFromApi()
	 const ApiMenuFood = useVariablesStore(state => state.ApiMenuFood)
	 console.log("LoadFronApi: ", result);
	return ApiMenuFood(result)
	 
}


export { saveToApi, loadFromApi, handleAPI }