<script lang="ts">
	import { enhance } from "$app/forms"

</script>


<div class="min-h-screen flex justify-center items-center">
	<form action="/insights?/getData" method="POST" class="flex flex-row items-center">
		<input type="text" placeholder="Type here" name="productID" class="input w-full max-w-xs bg-gray-700"/>
		<button class="btn bg-gray-600 rounded" type="submit">search</button>
	</form>
</div>