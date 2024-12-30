import { defineConfig } from "tinacms";

// Determine the branch dynamically or default to "main"
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "tina-setup"; // Use "tina-setup" initially

// Check if the environment is local or cloud-based
const isLocal = process.env.TINA_LOCAL === "true";

export default defineConfig({
  branch,
  clientId: isLocal ? "" : process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Use Tina Cloud only if not local
  token: isLocal ? "" : process.env.TINA_TOKEN, // Use Tina Cloud only if not local
  localContent: isLocal, // Enable local filesystem mode if in local environment
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "docs",
        label: "Documentation",
        path: "docs", // Path to your Markdown files
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "unique_id", // Unique internal name
            nameOverride: "id", // Maps to "id" in frontmatter
            label: "Document ID",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true, // Marks this as the primary field for display
            required: true,
          },
          {
            type: "number",
            name: "sidebar_position",
            label: "Sidebar Position",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true, // Marks this as the main content of the document
          },
        ],
      },
    ],    
  },
});
