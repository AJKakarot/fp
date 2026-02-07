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
4. **Clear overrides** in Settings → Build & Development Settings:
   - Turn OFF any override for Install Command or Build Command
   - Let `vercel.json` handle everything
5. Click **Deploy**

### Vercel build config (in vercel.json)

| Step | Command |
|------|---------|
| **Install** | `pip install -r requirements.txt --break-system-packages` |
| **Build** | `python3 manage.py migrate --noinput && python3 manage.py collectstatic --noinput` |

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
vercel --prod
```

## Adding or editing projects

Edit `portfolio_app/projects_data.py` and add/update entries in `BEGINNER_PROJECTS`, `INTERMEDIATE_PROJECTS`, and `ADVANCED_PROJECTS` lists. Redeploy to see changes.

## Troubleshooting

| Error | Fix |
|-------|-----|
| `externally-managed-environment` | Already handled – we use `--break-system-packages` |
| `command not found` (pip/python) | Clear Install/Build Command overrides in Vercel Settings |
| `uv pip install` exited 1 | Removed – we use pip with `--break-system-packages` |
| 500 errors | Check Vercel function logs in the dashboard |
| Static files 404 | Ensure `collectstatic` runs in build (it does) |
