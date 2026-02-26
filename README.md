# 🚀 Jincy Varghese Portfolio

This is your professional portfolio website, built with React, Tailwind CSS, and Framer Motion.

## 📁 Project Structure

- `src/portfolioData.ts`: **The main configuration file.** This is where you update your name, mission, projects, and links.
- `src/App.tsx`: The main code for the website's layout and animations.
- `public/`: (Create this folder) Put your images and videos here.

## 🖼️ How to add your own Photos & Videos

1. **Create a `public` folder** in the root of this project (next to `package.json`).
2. **Move your files** (e.g., `my-profile.jpg`, `project-video.mp4`) into the `public` folder.
3. **Update `src/portfolioData.ts`**:
   - For an image in `public/my-profile.jpg`, use: `profileImage: "/my-profile.jpg"`
   - For a video, you can add a `video` field to your project objects in `portfolioData.ts` and update `App.tsx` to handle it.

## 🌐 How to Publish on GitHub Pages

1. **Create a new repository** on GitHub.
2. **Push your code** to that repository.
3. **Install the `gh-pages` package**:
   ```bash
   npm install gh-pages --save-dev
   ```
4. **Add these scripts to `package.json`**:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
5. **Add a `homepage` field** to `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/<your-repo-name>"
   ```
6. **Deploy**:
   ```bash
   npm run deploy
   ```

## 🛠️ Customization

- **Colors**: Edit `src/index.css` or the Tailwind classes in `src/App.tsx`.
- **Content**: Everything is driven by `src/portfolioData.ts`.
