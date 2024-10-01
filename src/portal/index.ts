import fs from "fs";
import path from "path";

// Function to generate the admin portal from a translation file
export function generateAdminPortal(filePath: string): void {
  try {
    const translationData = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // Read the HTML template
    const adminTemplate = fs.readFileSync(
      path.join(__dirname, "../templates/admin.html"),
      "utf8"
    );

    // Replace the placeholder in the template with the translation data
    const filledTemplate = adminTemplate.replace(
      "__TRANSLATIONS__",
      JSON.stringify(translationData)
    );

    // Write the generated HTML to the dist folder
    fs.writeFileSync(
      path.join(__dirname, "../../dist/admin.html"),
      filledTemplate
    );

    console.log(
      "Admin portal generated! Open dist/admin.html to edit translations."
    );
  } catch (error) {
    console.error("Error generating admin portal:", error);
  }
}
