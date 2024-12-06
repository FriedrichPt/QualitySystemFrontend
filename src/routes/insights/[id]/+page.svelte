<script lang="ts">
	import type { ActionData, PageServerData } from './$types';
	import type { Page } from '@sveltejs/kit';

	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();

</script>

<div class="flex w-full h-screen vertical-align: top pt-16">
	<div class="position: relative flex w-full h-full p-4 box-border items-stretch">
		<div class="card bg-base-300 rounded-box grid flex-grow basis-1/2 place-items-center">
			<div class="flex h-full w-full flex-col border-opacity-50">

				<div class="card bg-base-300 rounded-box flex h-20 items-center">
					<h1 class="relative">
						General Information
					</h1>
					<div>
						{data.text}
						{data.id}
						{data.verkaeufer}
						{data.verkaeufe_letzter_monat}
					</div>
				</div>
				<div class="divider"></div>
				<div class="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>

			</div>
		</div>
		<div class="divider divider-horizontal"></div>

		<div class="card bg-base-300 rounded-box grid flex-grow basis-1/2 place-items-center">
			<!-- CHATWINDOW --> nicht aktiv
			<div class="flex flex-col justify-end w-full h-full">
				<input type="text" placeholder="Type here" class="input input-bordered w-full" />
			</div>
		</div>
	</div>
</div>