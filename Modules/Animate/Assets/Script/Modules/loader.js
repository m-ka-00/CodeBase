export class loader {
	static libraries = {
		mathjs: 'https://cdn.jsdelivr.net/npm/mathjs/lib/browser/math.js'
	};

	static async load(library) {
		if (!window[library]) {
			const url = LibraryLoader.libraries[library];
			if (!url) throw new Error('Unknown library: ' + library);
			await import(url);
		}
		return window[library];
	}
}
