alert("JS Loaded");
// 🔥 Firebase import
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// ⚠️ 👉 এখানে তোমার Firebase config বসাও
const firebaseConfig = {
  apiKey: "AIzaSyD8hjtF2sg09QpbomvPAzPXhkhPj1KNUJs",
  authDomain: "fast-copy-24054.firebaseapp.com",
  projectId: "fast-copy-24054",
  storageBucket: "fast-copy-24054.firebasestorage.app",
};

// init
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);



onSnapshot(collection(db, "categories"), (snapshot) => {
  menuDiv.innerHTML = "";

  snapshot.forEach(doc => {
    const data = doc.data();
    console.log(data);

menuDiv.innerHTML += `
  <div class="card">
    <img src="${data.image || 'https://picsum.photos/200'}"
         onerror="this.src='https://picsum.photos/200'">
    <h3>${data.name}</h3>
  </div>
`;
  });
});




// 👉 Admin function
alert("Button Clicked");
window.addCategory = async function () {
  const name = document.getElementById("name").value;
  const file = document.getElementById("image").files[0];

  if (!name || !file) {
    alert("Fill all fields");
    return;
  }

  const reader = new FileReader();

  reader.onload = async function () {
    const base64 = reader.result;

    await addDoc(collection(db, "categories"), {
      name: name,
      image: base64
    });

    alert("Added!");
  };

  reader.readAsDataURL(file);
};


// 👉 User realtime menu
const menuDiv = document.getElementById("menu");

onSnapshot(collection(db, "categories"), (snapshot) => {
  menuDiv.innerHTML = "";

  snapshot.forEach(doc => {
    const data = doc.data();

    menuDiv.innerHTML += `
      <div class="card">
        <img src="${data.image}">
        <h3>${data.name}</h3>
      </div>
    `;
  });
});