import type { PageServerLoad } from './$types';
import type { InfosProd, InfosProdWithID } from '$lib';


export const load: PageServerLoad = async ({ fetch, params })=>{
	const response  = await fetch(`http://localhost:3187/getdata/${params.id}`, {
		method: 'GET',
	});

	console.log(response)
	const product: InfosProdWithID = await response.json() //TODO fix type
	return product

}