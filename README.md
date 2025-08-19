# TSA Tech Bowl Application

A comprehensive web application for TSA (Technology Student Association) Tech Bowl competitions, featuring practice modes, quiz modes, and specialized BTS TSA challenges.

## 🌐 Live Demo

**Your application will be available at:** `https://YOUR_USERNAME.github.io/REPO_NAME`

*Replace `YOUR_USERNAME` with your GitHub username and `REPO_NAME` with your repository name*

## 🚀 Features

### **Practice Mode**
- Study with digital flashcards by subject and difficulty
- Subjects: Science, Technology, Engineering, Mathematics
- Difficulties: Easy (6th Grade), Medium (8th Grade), Hard (10th Grade)

### **Quiz Mode**
- 20 randomly selected questions from all subjects and difficulties
- Real-time scoring and timing
- Visual feedback with color-changing outline (green to red after 10 seconds)
- Multiple choice with randomized answer positions

### **BTS TSA Mode**
- Special 3-question quiz format
- Questions from 3 different disciplines
- 2 easy questions, 1 medium question
- Randomized subject selection

## 🔐 Login

**Password:** `M0n7R0ckTSAT3c#B0wl`

*Username can be anything - only password matters*

## 📁 File Structure

```
TSA-TechBowl/
├── index.html          # Main application file
├── styles.css          # TSA-themed styling (Red, White, Blue)
├── script.js           # Application logic and functionality
├── questionBank.js     # Question database (120 questions)
├── README.md           # This file
└── test.html           # Simple test page
```

## 🎨 Design Features

- **Patriotic TSA Theme**: Red, White, and Blue color scheme
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Gradient backgrounds, smooth animations, hover effects
- **Professional Appearance**: Perfect for educational competitions

## 📚 Question Bank

Currently includes **120 questions** across all S.T.E.M. categories:
- **Science**: 30 questions (10 per difficulty)
- **Technology**: 30 questions (10 per difficulty)  
- **Engineering**: 30 questions (10 per difficulty)
- **Mathematics**: 30 questions (10 per difficulty)

*Target: Expand to 2400 questions (600 per subject, 200 per difficulty)*

## 🚀 Hosting on GitHub Pages

### **Quick Setup:**
1. Create a new **public** repository on GitHub
2. Upload all files to the repository
3. Go to Settings → Pages → Source: Deploy from branch
4. Select `main` branch and `/(root)` folder
5. Your site will be live in a few minutes!

### **Custom Domain (Optional):**
- Purchase a domain (e.g., `tsatechbowl.com`)
- In repository Settings → Pages → Custom domain
- Add your domain and follow DNS setup instructions

## 🛠️ Customization

### **Adding More Questions:**
1. Edit `questionBank.js`
2. Follow the existing structure:
   ```javascript
   {
       question: "Your question here?",
       answer: "Correct answer",
       wrongAnswers: ["Wrong 1", "Wrong 2", "Wrong 3"]
   }
   ```

### **Changing Colors:**
- Edit `styles.css` to modify the TSA color scheme
- Current colors: Blue (#1E3A8A), Red (#DC143C), White (#FFFFFF)

### **Modifying Features:**
- Edit `script.js` to change functionality
- Edit `index.html` to modify page structure

## 🌍 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (limited support)

## 📱 Mobile Support

- Fully responsive design
- Touch-friendly interface
- Optimized for mobile browsers

## 🔧 Troubleshooting

### **Common Issues:**

1. **Page not loading**: Check if GitHub Pages is enabled in repository settings
2. **Styling issues**: Ensure all CSS files are properly linked
3. **Questions not showing**: Verify `questionBank.js` is loaded before `script.js`
4. **Login not working**: Check browser console for JavaScript errors

### **Debug Mode:**
- Open browser Developer Tools (F12)
- Check Console tab for error messages
- Check Network tab for file loading issues

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review browser console for error messages
3. Ensure all files are properly uploaded to GitHub
4. Verify GitHub Pages is enabled and configured correctly

## 📄 License

This project is open source and available for educational use.

---

**Built for TSA Tech Bowl Competitions** 🏆

*Red, White, and Blue - Supporting Technology Student Association*
