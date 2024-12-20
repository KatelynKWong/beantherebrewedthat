import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			// base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
			base: process.env.BASE_PATH || '/beantherebrewedthat'

		},
		// routes: [
        //     // { src: 'coffee', dest: './src/routes/coffee/+page.svelte' },
		// 	// { src: 'food', dest:  './src/routes/food/+page.svelte' }
		
		// 	{ src: 'coffee', dest: './src/components/Coffee/CoffeeMain.svelte' },
		// 	{ src: 'food', dest:  './src/routes/Food/FoodMain.svelte' }
        // //     // Add more routes for other subpages here
        // ],

	}
};

export default config;
