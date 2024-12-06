<script lang="ts">
	import { enhance } from '$app/forms';
	import '../app.css';

	let { children } = $props();

</script>


<div class="navbar text-white bg-gray-500 absolute top-0 rounded	"> <!-- maybe trans machen -->
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">Home</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal">
			<li><a href="/insights">Analyze</a></li>
			<li><a>How to</a></li>
		</ul>
	</div>
</div>
{@render children()}