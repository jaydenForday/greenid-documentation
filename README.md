# greenID Documentation

Welcome to the **greenID Documentation** repository! This is a new version of the current greenID documentation, which you can find [here](https://vixverify.atlassian.net/wiki/spaces/GREEN/overview). Built using [Docusaurus](https://docusaurus.io/) and [TinaCMS](https://tina.io/).

## 📚 Overview

**greenID Documentation** is your go-to resource for all things greenID. Here's a quick rundown of what powers our site:

- **Docusaurus Framework**: We use Docusaurus to build and serve our site, making it easy to create beautiful documentation.
- **Hosted on Vercel**: Our site is hosted on [Vercel](https://vercel.com/) because it's free and super easy to manage. (Heads up: We might switch hosting providers in the future!)
- **TinaCMS for Content Editing**: Want to update the docs? No problem! We use [TinaCMS](https://tina.io/) to edit content directly within the `docs/` folder.
  - **Access TinaCMS**: Simply append `/admin` to the site URL (e.g., `https://greenid-documentation.vercel.app/admin`) to get started.
  - **Tina Cloud**: We're on the free tier, which supports up to 2 users. You can manage your Tina Cloud projects [here](https://app.tina.io/projects).
- **API Reference with [Redocusaurus](https://github.com/rohit-gohri/redocusaurus)**: Our API references are built using Redocusaurus, which renders Swagger (YAML) files stored in the `static/api/` folder.

## 🚀 Features

### Docusaurus Framework
Docusaurus provides a robust foundation for our documentation site, offering a smooth experience for both authors and readers.

### TinaCMS for Editing
- **Editable Content**: All content within the `docs/` folder is editable using TinaCMS.
- **Automatic Commits and Deploys**: When you make changes via TinaCMS, they are automatically committed to the `main` branch and deployed. ⚠️ **Caution**: Be mindful of the changes you make, as they go live immediately.
- **Git Co-authors**: Changes will show the Tina bot (`tina-cloud-app[bot]`) and the editor as co-authors in Git.

### API References
- **Swagger (YAML) Files**: Each API has its own Swagger file located in the `static/` folder.
- **Redocusaurus Rendering**: [Redocusaurus](https://github.com/rohit-gohri/redocusaurus) takes care of rendering these Swagger files in the documentationg 


## ✏️ Editing Content

If you're non-technical you can use Tina for content editing. Otherwise you can simply clone, create a new branch and merge any changes

### Tina Cloud Editing

For editing directly on the live site:

1. **Access TinaCMS**: Navigate to `/admin` on the live site (e.g., [https://greenid-documentation.vercel.app/admin](https://greenid-documentation.vercel.app/admin)).
2. **Start Editing**: Make your changes, and they'll be automatically committed and deployed.

## 📄 API References

Our API references are dynamically generated using Redoc

### Adding a New API

1. **Create a Swagger (YAML) file for your API**.
2. **Place the file in the `static/` folder**.
3. **Rendering**: Redocusaurus will automatically detect and render the new API reference in the API Reference section.

### Redocusaurus Configuration

To ensure Redocusaurus correctly renders your API documentation, you need to specify the path to each Swagger file in the configuration. Here's an example configuration:

```javascript
[
  'redocusaurus',
  {
    specs: [
      {
        id: "api-core_v5",
        spec: 'static/core_v5.yaml',
        route: 'docs/api-reference/core_v5',
      },
      {
        id: "api-hosted_web",
        spec: 'static/hosted_web.yaml',
        route: 'docs/api-reference/hosted_web',
      },
    ]
  },
],