import puppeteer from "puppeteer";
import handlebars from "handlebars";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

// __dirname emulation
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Handlebars helper to join arrays
handlebars.registerHelper("join", function (array, separator) {
  if (!Array.isArray(array)) return "";
  return array.join(separator);
});

async function buildResume() {
  try {
    console.log("📄 Loading JSON...");
    const jsonPath = path.join(__dirname, "master.json");
    const templatePath = path.join(__dirname, "template.html");

    const resumeData = await fs.readJson(jsonPath);
    const htmlTemplate = await fs.readFile(templatePath, "utf-8");

    console.log("🧩 Compiling Template...");
    const template = handlebars.compile(htmlTemplate);
    const finalHtml = template(resumeData);

    // Save debug HTML
    await fs.writeFile("debug.html", finalHtml);
    console.log("📝 Saved debug.html");

    console.log("🖨️ Generating PDF...");
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.setContent(finalHtml, { waitUntil: "networkidle0" });

    await page.pdf({
      path: "Vamshi_Resume.pdf",
      format: "A4",
      printBackground: true,
      margin: {
        top: "0.5in",
        right: "0.5in",
        bottom: "0.5in",
        left: "0.5in"
      }
    });

    await browser.close();

    console.log("✅ Resume Generated: Vamshi_Resume.pdf");

  } catch (error) {
    console.error("❌ Error:", error);
  }
}

buildResume();
