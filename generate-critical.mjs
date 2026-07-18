import { generate } from "critical";
import fg from "fast-glob";

const outputDirectory = "public";
const files = await fg("**/*.html", {
	cwd: outputDirectory,
	onlyFiles: true,
});

if (files.length === 0) {
	throw new Error(`Nem található feldolgozható HTML-fájl a(z) ${outputDirectory} mappában.`);
}

for (const file of files.sort()) {
	console.log(`Critical CSS: ${file}`);

	try {
		await generate({
			base: `${outputDirectory}/`,
			src: file,
			target: file,
			inline: true,
			dimensions: [
				{
					width: 390,
					height: 844,
				},
				{
					width: 1300,
					height: 900,
				},
			],
		});
	} catch (error) {
		throw new Error(`A critical CSS generálása sikertelen ennél a fájlnál: ${file}`, {
			cause: error,
		});
	}
}

console.log(`Critical CSS elkészült ${files.length} HTML-fájlhoz.`);
