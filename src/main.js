import App from './App.svelte';
import '@fortawesome/fontawesome-free/js/all.js'
const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;