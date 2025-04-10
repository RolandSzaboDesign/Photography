import { generate } from 'critical';
import fg from 'fast-glob';
import path from 'path';

const files = await fg(['public/**/*.html']);

for (const file of files) {
	const outFile = path.resolve(file);
	console.log(`Inlining critical CSS for ${outFile}`);

	await generate({
		base: 'public/',
		src: file.replace(/^public\//, ''), // relative to `base`
		target: file.replace(/^public\//, ''), // overwrite
		inline: true,
		width: 1300,
		height: 900
	});
}
