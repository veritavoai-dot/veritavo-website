# 🚀 How to Upload to GitHub

## Step 1: Download the ZIP file
1. Click the **"Files"** button (top-right of this chat)
2. Find `veritavo-website-github.zip`
3. Download it to your computer

---

## Step 2: Extract the ZIP
1. Right-click the ZIP file
2. Select **"Extract All"** or **"Unzip"**
3. You'll get a folder called `nextjs_space`

---

## Step 3: Create GitHub Repository

### Option A: Using GitHub Website
1. Go to **https://github.com/new**
2. Name your repo: `veritavo-website`
3. Make it **Private** (recommended)
4. Click **"Create repository"**

### Option B: Using GitHub Desktop
1. Open **GitHub Desktop**
2. Click **"Create New Repository"**
3. Name: `veritavo-website`
4. Choose location
5. Click **"Create Repository"**

---

## Step 4: Upload Your Files

### Option A: Using GitHub Website (Easiest)
1. On your new repo page, click **"uploading an existing file"**
2. Drag the entire `nextjs_space` folder
3. Add commit message: "Initial commit - Veritavo website"
4. Click **"Commit changes"**

### Option B: Using Git Command Line
```bash
cd nextjs_space

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit - Veritavo website"

# Connect to GitHub
git remote add origin https://github.com/YOUR_USERNAME/veritavo-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option C: Using GitHub Desktop
1. Open **GitHub Desktop**
2. Click **"Add"** → **"Add Existing Repository"**
3. Choose the `nextjs_space` folder
4. Click **"Publish repository"**
5. Make it **Private** (recommended)
6. Click **"Publish Repository"**

---

## Step 5: Verify Upload

1. Go to your GitHub repo
2. You should see all folders:
   - `app/`
   - `components/`
   - `public/`
   - `lib/`
   - `README.md`
   - etc.

---

## 📝 Important Notes

1. **Private vs Public:**
   - Make it **Private** if you want to keep it secret
   - Make it **Public** if you want to share it

2. **Large Files:**
   - Videos in `/public/assets/` are large (160MB total)
   - GitHub may warn about file sizes over 50MB
   - This is normal and won't break anything

3. **Environment Variables:**
   - `.env` file is NOT uploaded (for security)
   - You'll need to add Stripe keys manually if you clone later

4. **.gitignore:**
   - Already included in the ZIP
   - Automatically excludes `node_modules`, `.env`, etc.

---

## 🔄 How to Clone Later

```bash
# Clone your repo
git clone https://github.com/YOUR_USERNAME/veritavo-website.git

# Go into folder
cd veritavo-website

# Install dependencies
yarn install

# Run development server
yarn dev
```

---

## 🆘 Need Help?

- **GitHub Desktop Download:** https://desktop.github.com/
- **Git Download:** https://git-scm.com/downloads
- **GitHub Guides:** https://guides.github.com/

---

**That's it! Your website is now on GitHub! 🎉**
