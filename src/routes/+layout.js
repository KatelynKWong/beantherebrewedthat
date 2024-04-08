// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = true;

// src/routes/__layout.js

// import { Router } from '@sveltejs/kit';
// import Main from '../components/ScrollyTeller.svelte'; // Import your main component
// import SubPage from '../components/Coffee/CoffeeMain.svelte'; // Import your subpage component

// export const handle = ({ request, resolve }) => {
//   // Define your routes
//   const routes = {
//     '/': Main, // Route to the main component
//     '/sub-page': SubPage // Route to the subpage component
//   };

//   // Get the path from the request object
//   const { path } = request;

//   // Get the component corresponding to the requested path
//   const Component = routes[path];

//   // Render the component
//   if (Component) {
//     return resolve({
//       // Pass the component to be rendered
//       props: { page: path, Component }
//     });
//   }

//   // If no matching route is found, return a 404
//   return {
//     status: 404,
//     error: new Error(`Not found`)
//   };
// };
