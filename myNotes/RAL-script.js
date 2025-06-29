import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAnM5WNhE7bZ0pX8eLnLYeR1XM2G6oPAdU",
    authDomain: "personal-workspace-d39d0.firebaseapp.com",
    projectId: "personal-workspace-d39d0",
    appId: "1:452604878835:web:58eca163a927aa6d16fc86"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (!user) {
    window.location.href = "login.html"; // Redirect if not logged in
    }
});

window.logout = () => {
    signOut(auth).then(() => {
    window.location.href = "login.html";
    });
};