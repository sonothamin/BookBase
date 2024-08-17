BookBase
========

A web application designed to manage and display a collection of books. This application uses Firebase and Firestore as the backend database for storing book metadata, including titles, authors, cover images, blurbs, and more. The frontend is built using standard web technologies: HTML, CSS, and JavaScript. The application is responsive, allowing it to display properly across various device sizes.

Installation & Deployment
-------------------------

**Clone the Repository**  
  
```
git clone https://github.com/sonothamin/BookBase.git
cd BookBase
```
  
**Configure Firebase**  
  
1\. **Create a Firebase Project:**  
\- Go to [Firebase Console](https://console.firebase.google.com/).  
\- Click on "Add Project" and follow the instructions to create a new project.  
  
2\. **Register the App:**  
\- In the Firebase Console, go to "Project Settings" > "General" > "Your Apps".  
\- Add a new web app and register it.  
\- Copy the Firebase configuration keys provided.  
  
3\. **Configure \`firebaseConfig.js\`:**  
\- Open \`firebaseConfig.js\` in the project.  
\- Replace the placeholders with your Firebase configuration.  
  
```
const firebaseConfig = {   apiKey: "your-api-key",
                           authDomain: "your-project-id.firebaseapp.com",
                           projectId: "your-project-id",
                           storageBucket: "your-project-id.appspot.com",
                           messagingSenderId: "your-messaging-sender-id",
                           appId: "your-app-id",   measurementId: "your-measurement-id"   };

firebase.initializeApp(firebaseConfig);   const db = firebase.firestore();
```

### Hosting on Firebase

1\. **Install Firebase CLI:**  
  
```
npm install -g firebase-tools
```
  
2\. **Login to Firebase:**  
  
```
firebase login
```

3\. **Initialize Firebase Hosting:**  
  
```
firebase init
```
  
\- Select "Hosting" when prompted.  
\- Choose the project you created.  
\- Specify \`public\` as the directory.  
\- Choose \`No\` for configuring as a single-page app.  
  
4\. **Deploy the App:**  
  
```
firebase deploy
```

### Hosting on Apache2 (self-hosted)

1\. **Install Apache2:**  
  
On Ubuntu:  
  
```
sudo apt update   sudo apt install apache2
```
  
2\. **Set Up Your Project Directory:**  
  
\- Place your project files in the Apache web root directory:  
  
```
sudo cp -r /path-to-your-project/* /var/www/html/
```
  
3\. **Configure Apache2:**  
  
\- Ensure your Apache configuration allows \`index.html\` as the default file.  
\- Restart Apache to apply changes:  
  
```
sudo systemctl restart apache2
```
  
**Access Your Application**  
  
\- **Firebase Hosting:** Visit the provided Firebase hosting URL after deployment.  
\- **Apache2:** Visit \`http://your-server-ip/\` to access your project.

Live Demo
---------

Visit the live demo of the application at: [https://bookbase.web.app](https://bookbase.web.app)

Screenshots
-----------

**Home**  
![Home Page Screenshot](https://github.com/sonothamin/BookBase/blob/main/img/home.preview.png?raw=true)

**Catalogue**  
![Catalogue Screenshot](https://github.com/sonothamin/BookBase/blob/main/img/catalogue.preview.png?raw=true)

**Book Details**  
![Book Details Screenshot](https://github.com/sonothamin/BookBase/blob/main/img/book.preview.png?raw=true)

**Authentication**  
![Authentication Page Screenshot](https://github.com/sonothamin/BookBase/blob/main/img/auth.preview.png?raw=true)

Contributing
------------

Contributions are welcome! Please follow these steps to contribute:  
  
1\. Fork the repository.  
2\. Create a new branch: ```git checkout -b feature-branch-name``` 
3\. Make your changes and commit them: ```git commit -m 'Add some feature'```  
4\. Push to the branch: ```git push origin feature-branch-name```  
5\. Submit a pull request.

License
-------
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
