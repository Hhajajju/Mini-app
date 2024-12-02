<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD4sNBSwJEDnjlD938YJ9f43-Sv-il-PBE",
    authDomain: "earncash-9dbb5.firebaseapp.com",
    projectId: "earncash-9dbb5",
    storageBucket: "earncash-9dbb5.firebasestorage.app",
    messagingSenderId: "277935191297",
    appId: "1:277935191297:web:c59f072773acb70c7d5700",
    measurementId: "G-0CWQW3MKM5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
