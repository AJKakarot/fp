# Deploy Django Portfolio on Vercel

**Zero config** – No database, no env vars needed. Just import and deploy.

## Prerequisites

1. **GitHub account** – Push your code to [GitHub](https://github.com)
2. **Vercel account** – Sign up at [vercel.com](https://vercel.com)

## Step 1: Push to GitHub

```bash
cd Portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Step 2: Deploy on Vercel

### Option A: Deploy via Vercel dashboard (recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. **Import** your GitHub repository
3. **Root Directory:** Set to `Portfolio` (if the repo has other folders) or leave blank if Portfolio is the root
4. **Don't override** Build/Install Command – `vercel.json` already configures them with `pip3`/`python3`
5. If build fails with "command not found", clear any custom Build Command in Settings and redeploy

### Environment variables (optional – none required)

| Variable | Value | Notes |
|----------|-------|-------|
| `SECRET_KEY` | Random string | Optional – has default |
| `DEBUG` | `False` | Optional – defaults to True |
| `EMAIL_HOST_PASSWORD` | Gmail app password | Optional – without it, contact messages go to Vercel logs |

### Option B: Deploy via Vercel CLI

```bash
npm i -g vercel
cd Portfolio
vercel
# Follow prompts, add env vars
vercel --prod
```

## Adding or editing projects

Edit `portfolio_app/projects_data.py` and add/update entries in `BEGINNER_PROJECTS`, `INTERMEDIATE_PROJECTS`, and `ADVANCED_PROJECTS` lists. Redeploy to see changes.

## Important notes

1. **No database:** Projects are hardcoded. SQLite is used only for Django's internal tables (created during build).
2. **Static files:** Whitenoise is configured. `collectstatic` runs during build.
3. **Contact form:** Requires `EMAIL_HOST_PASSWORD` env var for Gmail.
4. **Cold starts:** Serverless functions may have 1–3 second cold starts on first request.

## Troubleshooting

- **500 errors:** Check Vercel function logs in the dashboard
- **Static files 404:** Ensure `collectstatic` runs in the build command
