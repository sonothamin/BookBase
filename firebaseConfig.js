// Firebase configuration
const firebaseConfig = {
    apiKey: "your-api-key",                  // Replace with your API key
    authDomain: "your-project-id.firebaseapp.com",  // Replace with your Auth Domain
    projectId: "your-project-id",            // Replace with your Project ID
    storageBucket: "your-project-id.appspot.com",   // Replace with your Storage Bucket
    messagingSenderId: "your-messaging-sender-id",  // Replace with your Messaging Sender ID
    appId: "your-app-id",                    // Replace with your App ID
    measurementId: "your-measurement-id"     // (Optional) Replace with your Measurement ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore and assign it to the `db` variable
const db = firebase.firestore();
