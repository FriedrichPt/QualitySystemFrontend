import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		logs: false,
		themes: ["dracula"],
	},

	theme: {
		extend: {}
	},

	plugins: [
		typography,
		require('daisyui')
	]
} satisfies Config;
