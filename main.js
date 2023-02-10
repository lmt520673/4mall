import App from './App';
import * as Pinia from 'pinia';
import Vant from 'vant';
import 'vant/lib/index.css';

import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(Pinia.createPinia())
	app.use(Vant)
	return {
		app,
		Pinia
	}
}
