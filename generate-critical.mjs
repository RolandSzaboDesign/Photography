import { generate } from 'critical';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getHtmlFiles(dir, files = []) {
	const entries = fs.readdirSync(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			getHtmlFiles(fullPath, files);
		} else if (entry.name.endsWith('.html')) {
			files.push(fullPath);
		}
	}

	return files;
}

const htmlFiles = getHtmlFiles(path.join(__dirname, 'public'));

console.log('✅ Starting critical CSS inlining...');
for (const file of htmlFiles) {
	const relativePath = path.relative(path.join(__dirname, 'public'), file);
	console.log(`→ Inlining critical CSS for: ${relativePath}`);

	try {
		await generate({
			base: 'public',
			src: relativePath,
			inline: true,
			width: 1300,
			height: 900,
		});
	} catch (err) {
		console.error(`⚠️ Error processing ${relativePath}:`, err.message);
	}
}
