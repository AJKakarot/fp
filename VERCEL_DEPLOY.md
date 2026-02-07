# Deploy Django Portfolio on Vercel

**No external database required** – Projects are hardcoded in `portfolio_app/projects_data.py`

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
4. **Build Command:**
   ```bash
   pip install -r requirements.txt && python manage.py migrate --noinput && python manage.py collectstatic --noinput
   ```
5. **Install Command:** `pip install -r requirements.txt`

### Environment variables (optional)

| Variable | Value | Notes |
|----------|-------|-------|
| `SECRET_KEY` | Random string | Recommended for production |
| `DEBUG` | `False` | Recommended for production |
| `EMAIL_HOST_PASSWORD` | Gmail app password | Needed for contact form to send email |

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
