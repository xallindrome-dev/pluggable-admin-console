import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

export function publishTranslationFile(): void {
  const app = express();
  app.use(express.json()); // Middleware to parse JSON requests

  // Handle POST requests to /publish
  app.post("/publish", (req: Request, res: Response) => {
    const updatedTranslations = req.body;

    // Write the updated translation file to the locales folder
    try {
      fs.writeFileSync(
        path.join(__dirname, "../../locales/translations.json"),
        JSON.stringify(updatedTranslations, null, 2)
      );
      res.status(200).send("Translation file updated!");
      console.log("Translation file published successfully.");
    } catch (error) {
      res.status(500).send("Failed to update translation file.");
      console.error("Error writing translation file:", error);
    }
  });

  // Start the server on port 3000
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
}
