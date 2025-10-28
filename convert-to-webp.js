// convert-to-webp.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = path.join(process.cwd(), "public");

async function convertImagesToWebp(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await convertImagesToWebp(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      const outputPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
      console.log(`🖼️ Convirtiendo: ${entry.name} → ${path.basename(outputPath)}`);

      await sharp(fullPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
    }
  }
}

convertImagesToWebp(inputDir)
  .then(() => console.log("✅ Conversión a WebP completada."))
  .catch(err => console.error("❌ Error:", err));
