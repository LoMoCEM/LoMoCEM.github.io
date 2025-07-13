import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { fileURLToPath } from "url";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for exporting static site
  app.post("/api/export-gh-pages", async (req, res) => {
    try {
      // This endpoint would trigger the GitHub Pages export process
      // For now, we'll return success response
      res.json({ 
        success: true, 
        message: "GitHub Pages export initiated",
        exportUrl: "https://lamocem.github.io"
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Export failed",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);

  return httpServer;
}
