import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyASV2oqVJTqUySNJgiouaaGPgQmTACIL7w",
  authDomain: "add-data-97302.firebaseapp.com",
  projectId: "add-data-97302",
  storageBucket: "add-data-97302.firebasestorage.app",
  messagingSenderId: "1086001273039",
  appId: "1:1086001273039:web:7b55aeefd4999819e7bfba",
  measurementId: "G-Y94TBGENG5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


window.createAccount = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    });
  } catch (e) {
    console.error("Error adding document:", e);
  }
  window.location.reload()

}


const data = await getDocs(collection(db, "users"))
// console.log("asdalskjd");

const showData = document.getElementById("showData")
data.forEach((element) => {
  showData.innerHTML += `<div class="curd"> ${element.data().name} ${element.data().email}
${element.data().password} <td>${element.data().name, email, password}</div> <button onclick="deleteData('${element.id}')">delete</button> <button onclick="updateData('${element.id}')">update
</button><br/>`
  console.log(element.data());

})
window.deleteData = async (id) => {
  console.log(id);
  const data = await deleteDoc(doc(db, "users", id))
  window.location.reload()
}

window.updateData = async (id) => {
  const updateInputs = document.getElementById("updateInputs")
  updateInputs.innerHTML =
    `<input id="updateName"/>
  <input id="updateEmail"/>
   <input id="updatePassword"/>
  <button onclick="updateUser('${id}')">updateUser</button>`

}
window.updateUser = async (id) => {
  let name = document.getElementById("updateName").value
  let email = document.getElementById("updateEmail").value
  let password = document.getElementById("updatePassword").value

  const data = await updateDoc(doc(db, "users", id), {
    name,
    email,
    password
  })
  window.location.reload()
}
