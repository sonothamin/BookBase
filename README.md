<h1 align="center">BookBase</h1>

<p align="left">A web application designed to manage and display a collection of books. This application uses Firebase and Firestore as the backend database for storing book metadata, including titles, authors, cover images, blurbs, and more. The frontend is built using standard web technologies: HTML, CSS, and JavaScript. The application is responsive, allowing it to display properly across various device sizes.</p>

<h2 align="left">Installation & Deployment</h2>

<p align="left">
<strong>Clone the Repository</strong><br>
<br>
```bash
git clone https://github.com/sonothamin/BookBase.git
cd BookBase
```
<br>

<strong>Configure Firebase</strong><br>
<br>
1. **Create a Firebase Project:**<br>
   - Go to [Firebase Console](https://console.firebase.google.com/).<br>
   - Click on "Add Project" and follow the instructions to create a new project.<br>
<br>
2. **Register the App:**<br>
   - In the Firebase Console, go to "Project Settings" > "General" > "Your Apps".<br>
   - Add a new web app and register it.<br>
   - Copy the Firebase configuration keys provided.<br>
<br>
3. **Configure `firebaseConfig.js`:**<br>
   - Open `firebaseConfig.js` in the project.<br>
   - Replace the placeholders with your Firebase configuration.<br>
<br>
   ```javascript
   const firebaseConfig = {
       apiKey: "your-api-key",
       authDomain: "your-project-id.firebaseapp.com",
       projectId: "your-project-id",
       storageBucket: "your-project-id.appspot.com",
       messagingSenderId: "your-messaging-sender-id",
       appId: "your-app-id",
       measurementId: "your-measurement-id"
   };

   firebase.initializeApp(firebaseConfig);
   const db = firebase.firestore();
   ```
</p>

<h3 align="left">Hosting on Firebase</h3>

<p align="left">
1. **Install Firebase CLI:**<br>
<br>
   ```bash
   npm install -g firebase-tools
   ```
<br>
2. **Login to Firebase:**<br>
<br>
   ```bash
   firebase login
   ```
<br>
3. **Initialize Firebase Hosting:**<br>
<br>
   ```bash
   firebase init
   ```
<br>
   - Select "Hosting" when prompted.<br>
   - Choose the project you created.<br>
   - Specify `public` as the directory.<br>
   - Choose `No` for configuring as a single-page app.<br>
<br>
4. **Deploy the App:**<br>
<br>
   ```bash
   firebase deploy
   ```
</p>

<h3 align="left">Hosting on Apache2 (self-hosted)</h3>

<p align="left">
1. **Install Apache2:**<br>
<br>
   On Ubuntu:<br>
<br>
   ```bash
   sudo apt update
   sudo apt install apache2
   ```
<br>
2. **Set Up Your Project Directory:**<br>
<br>
   - Place your project files in the Apache web root directory:<br>
<br>
   ```bash
   sudo cp -r /path-to-your-project/* /var/www/html/
   ```
<br>
3. **Configure Apache2:**<br>
<br>
   - Ensure your Apache configuration allows `index.html` as the default file.<br>
   - Restart Apache to apply changes:<br>
<br>
   ```bash
   sudo systemctl restart apache2
   ```
<br>

<strong>Access Your Application</strong><br>
<br>
- **Firebase Hosting:** Visit the provided Firebase hosting URL after deployment.<br>
- **Apache2:** Visit `http://your-server-ip/` to access your project.
</p>
