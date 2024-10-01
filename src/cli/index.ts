import { Command } from "commander";
import { generateAdminPortal } from "../portal";
import { publishTranslationFile } from "../utils/fileUtils";

// Create a CLI using Commander.js
const program = new Command();

program
  .command("pac -t <file>")
  .description("Generate admin portal for the translation file")
  .action((file: string) => {
    generateAdminPortal(file);
  });

program
  .command("pac publish")
  .description("Publish the modified translation file")
  .action(() => {
    publishTranslationFile();
  });

program.parse(process.argv);
