/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderWidth: {
				'1': '1px',
				'3': '3px',
			},
			colors: {
				melon: '#f9c0ac',
				mandysPink: '#f8b29a', /*darker melon */
				apricot: '#f59675', /* darker mandy's pink */
				deluge: '#83739c', /* medium purple */
				dolphin: '#65587d', /* darker purple */
				maiTai: '#a96338', /* tan / light brown */
				burntMaroon: '#420404',
				provincialPink: '#f8e4dd', /* light pink */
				dustyGray: '#a19197',
				makara: '#645c4f', /* brown gray */
				midnightExpress: '#192136', /* navy */
				cloudy: '#b3ada3', /* light gray brown */
				mulledWine: '#4d435f',
			},
		},
		fontFamily: {
			display: ['Old Pines', 'sans-serif'],
			code: ['Fira Code', 'monospace'],
			body: ['Courier Prime', 'Courier', "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "Android Emoji", "EmojiSymbols", "EmojiOne Mozilla", "Twemoji Mozilla", 'monospace'],
		}
	},
	plugins: [],
}
