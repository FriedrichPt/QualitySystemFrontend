import type { Actions, PageServerLoad } from './$types';
import { fail, isRedirect, redirect } from '@sveltejs/kit';


export const actions = {
	getData: async ({ request, params }) => {

		const data = await request.formData();
		const productID = data.get("productID") as String;
		console.log(productID)
		if(productID.trim() === "") {
			console.log("leere Eingabe")
			return{
				success: false,
				message: "bitte gebe einen Wert ein.",
			};
		}

		const response = await fetch("http://localhost:3187/getdata", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(productID),
		});

		if(!response.ok){
			console.log("unexpected Error")
		}

		if(response.ok){
			console.log("ok")
			const data = await response.json();
			redirect(303, `/insights/${data}`);
		}
	}
}




















