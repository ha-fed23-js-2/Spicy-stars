import Menu from "./lista";
import { useVariablesStore } from "./store";


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
	
	let result = await response.json()
	
	return result
}


const handleAPI = async () => {
	// await saveToApi()
	 const result = await loadFromApi()
	 const ApiMenuFood = useVariablesStore(state => state.ApiMenuFood)
	
	return ApiMenuFood(result)
	 
}


export { saveToApi, loadFromApi, handleAPI, saveOriginalToApi }