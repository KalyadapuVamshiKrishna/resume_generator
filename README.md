# 📄 Resume Generator — Automated PDF Resume Builder

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Puppeteer](https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=puppeteer&logoColor=white)
![Handlebars](https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebars.js&logoColor=black)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)

> **The Central Resume Engine.** This project is the first module in a larger AI-powered job-application automation system. It generates clean, ATS-friendly, professional PDF resumes using a structured `master.json` and Handlebars templates.

---

## 📌 Overview
The goal of this module is to serve as the central **Resume Engine**. It is designed to integrate into future automated pipelines including job scraping, job matching, resume personalization, and auto-application bots.

## ✨ Key Features

* **✅ JSON-Driven Resume System:** The complete resume is stored in `master.json`, enabling dynamic customization for different job descriptions in later phases.
* **✅ Handlebars-Based Template:** Uses a modular and readable HTML template that dynamically fills data using Handlebars placeholders.
* **✅ Automatic PDF Generation:** Uses **Puppeteer** to render and export A4-sized professional PDFs optimized for ATS readability.
* **✅ Debug Mode:** Generates a `debug.html` file to visualize layout, spacing, and fonts before exporting the final PDF.
* **✅ Modular Architecture:** Built to act as the foundation for:
    * Job Scraping
    * JD-based Resume Customization
    * Automated Application Bots
    * Job Tracking Dashboards

---

## 📂 Project Structure

```text
resume_generator/
│
├── master.json          # Source-of-truth resume data
├── template.html        # Handlebars HTML resume template
├── build-resume.js      # Puppeteer script to generate PDF
├── debug.html           # Generated for preview (auto-generated)
├── Vamshi_Resume.pdf    # Final rendered resume (auto-generated)
│
└── README.md
```
⚙️ Installation & Setup
Prerequisites
Node.js (v18+ recommended)

npm or yarn installed

1. Install Dependencies
Run the following command to install Node modules:

```Bash

npm install
```
Note: If Puppeteer fails to download Chromium, run:
```Bash

npm install puppeteer
```
2. Update Resume Data
Open master.json. This file acts as your Master Resume. Modify it with your latest information. This source-of-truth will be used for generating all future variants.

3. Customize Template (Optional)
Edit template.html to adjust:

Typography & Fonts

Layout structure

Color themes

Spacing and Margins

🚀 Usage
Generate the Resume
Run the build script to compile your JSON and Template into a PDF:

Bash

node build-resume.js
Outputs:

debug.html (Open in browser to inspect layout)

Vamshi_Resume.pdf (Final ATS-ready file)

Handlebars Helpers
This project uses custom helpers for data formatting. Example: Joining Arrays

Handlebars

{{join tech_stack " | "}}
Output: JavaScript | Node.js | Python

🧩 Role in Full AI Automation System
This project is Phase 1 of a 5-Phase Automation Workflow:

Phase 1: Resume Generator (This Project) 🟢

Master JSON resume & PDF generation.

Phase 2: Job Scraper 🟡

Scrapes LinkedIn, Indeed, Naukri for descriptions.

Phase 3: AI Resume Customizer 🔴

Rewrites summary based on JD.

Injects relevant skills automatically.

Phase 4: Application Bot 🔴

Autofills application forms & attaches custom resumes.

Phase 5: Application Tracker 🔴

Tracks submissions, callbacks, and analytics.

📄 Output Specifications
The final PDF is engineered for:

Clean Header

Categorized Skills

Project-focused Layout

ATS-Friendly Formatting

Professional Typography

🛠️ Technologies Used
Node.js

Handlebars

Puppeteer

HTML/CSS

🛣️ Roadmap
Short-Term
[ ] Support for multiple color themes.

[ ] Swappable resume templates.

[ ] JD-based summary rewriting.

Long-Term
[ ] Automated Cover Letter generation.

[ ] CLI Tool (npx resume-generate).

[ ] API for external integrations.

[ ] Resume Versioning System.

📬 Contact
Author: Kalyadapu Vamshi Krishna

🌐 Portfolio: View Portfolio

📧 Email: curiuskkrish@gmail.com
