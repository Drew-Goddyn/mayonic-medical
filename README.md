# Mayonic Medical

A professional, responsive website for Mayonic Medical clinic. Built with Jekyll for easy deployment on GitHub Pages.

## Features

- Responsive design with modern CSS
- Patient-focused content structure
- Built with Jekyll for easy static site generation
- Ready for GitHub Pages deployment
- Pre-configured for blogging functionality
- Clean, medical-themed design with customizable color scheme

## Local Development

### Prerequisites

- Ruby (2.5.0 or higher)
- RubyGems
- GCC and Make (for systems that don't have them)

### Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/mayonic-medical.git
   cd mayonic-medical
   ```

2. Install Jekyll and Bundler:
   ```
   gem install jekyll bundler
   ```

3. Install dependencies:
   ```
   bundle install
   ```

4. Run the local development server:
   ```
   bundle exec jekyll serve
   ```

5. View the site at [http://localhost:4000](http://localhost:4000)

## Deployment to GitHub Pages

1. Push the site to a GitHub repository:
   ```
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. In the GitHub repository settings, navigate to "Pages" and select the branch you want to deploy (typically `main` or `master`).

3. Your site will be available at `https://yourusername.github.io/mayonic-medical/` (or at your custom domain if configured).

## Customization

### Site Configuration

Edit `_config.yml` to customize:
- Site title, description and contact information
- Social media links
- Opening hours
- Other site-wide settings

### Adding Blog Posts

Add new Markdown files to the `_posts` directory with the naming convention:
```
YYYY-MM-DD-title-of-post.md
```

Include front matter at the top of each post:
```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS +0000
categories: [category1, category2]
---
```

### Styling

The site styling uses SCSS variables for easy customization:
- Edit `assets/css/main.scss` to change colors, fonts, and other design elements
- Primary colors and other variables are defined at the top of the file

## License

[MIT License](LICENSE)

## Credits

- Built with [Jekyll](https://jekyllrb.com/)
- Default theme based on [Minima](https://github.com/jekyll/minima)
- Inspired by [Mercer Clinic](https://mercerclinic.ca/) 