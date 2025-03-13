# Deploying to GitHub Pages

This document provides step-by-step instructions for deploying the Mayonic Medical website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- The Mayonic Medical repository on your local machine (which you already have set up)

## Steps to Deploy

### 1. Create a New Repository on GitHub

1. Log in to your GitHub account at [github.com](https://github.com)
2. Click the "+" icon in the top right corner and select "New repository"
3. Enter "mayonic-medical" as the repository name
4. Add a description (optional)
5. Choose Public or Private visibility as preferred
6. Do not initialize the repository with a README, .gitignore, or license
7. Click "Create repository"

### 2. Push Your Local Repository to GitHub

1. After creating the repository, GitHub will display commands to push an existing repository. Use the following commands, replacing `yourusername` with your actual GitHub username:

```bash
git remote add origin https://github.com/yourusername/mayonic-medical.git
git push -u origin main
```

### 3. Configure GitHub Pages

There are two ways to deploy with GitHub Pages:

#### Option A: Deploy from the main branch (simpler)

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch and "/" (root) folder
5. Click "Save"
6. Wait a few minutes for your site to deploy
7. Your site will be available at `https://yourusername.github.io/mayonic-medical/`

#### Option B: Deploy from a dedicated gh-pages branch (advanced)

1. Create and push a gh-pages branch:

```bash
git checkout -b gh-pages
git push origin gh-pages
```

2. Go to your repository on GitHub
3. Click on "Settings" tab
4. Scroll down to the "GitHub Pages" section
5. Under "Source", select "gh-pages" branch and "/" (root) folder
6. Click "Save"

### 4. Update the GitHub Pages Configuration

1. Edit the `_config_github_pages.yml` file:
   - Change `yourusername` to your actual GitHub username
   - If you used a different repository name, update that as well

2. If you want to test the GitHub Pages configuration locally:

```bash
bundle exec jekyll serve --config _config.yml,_config_github_pages.yml
```

### 5. Setup a Custom Domain (Optional)

1. In your GitHub repository, go to "Settings" > "GitHub Pages"
2. Under "Custom domain", enter your domain name (e.g., mayonicmedical.com)
3. Click "Save"
4. With your domain registrar:
   - If using a subdomain (e.g., www.mayonicmedical.com): Create a CNAME record pointing to `yourusername.github.io`
   - If using an apex domain (e.g., mayonicmedical.com): Create A records pointing to GitHub's IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

5. Create a file named `CNAME` in your repository with your domain name:

```
mayonicmedical.com
```

### 6. Ongoing Maintenance and Updates

To update your site in the future:

1. Make changes locally
2. Commit your changes:

```bash
git add .
git commit -m "Description of changes"
```

3. Push to GitHub:

```bash
git push origin main
```

If using the gh-pages branch approach, you'll need to merge or push changes to that branch as well.

## Troubleshooting

- **Site not appearing**: It may take up to 10 minutes for changes to appear. Check the "Actions" tab on GitHub to see build progress.
- **Build failures**: Check the "Actions" tab on GitHub for error messages.
- **Style issues**: Make sure all CSS paths use relative URLs with the proper baseurl.
- **404 errors**: Check that you've configured the baseurl correctly in the _config_github_pages.yml file.

## Need More Help?

- Read the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Read the [Jekyll on GitHub Pages documentation](https://jekyllrb.com/docs/github-pages/) 