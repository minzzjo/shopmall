# Shoppy Project - Soir
---

## framework
<br/>

|*Program*|*Version*|
|:--|:--|
|<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white">|<img src=" https://img.shields.io/badge/Yarn-v4.2.2-2C8EBB?logo=yarn&logoColor=2C8EBB">|
|<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black">|<img src=" https://img.shields.io/badge/Javascript-ES14--2023-F7DF1E?logo=javascript&logoColor=F7DF1E">|
|<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">|<img src=" https://img.shields.io/badge/React-v18.3.1-61DAFB?logo=react&logoColor=61DAFB">|
|<img src="https://img.shields.io/badge/Create--React--App-52e0c4?style=for-the-badge&logo=Create%20React%20App&logoColor=black">|<img src=" https://img.shields.io/badge/Create--React--App-v18.3.1-52e0c4?logo=createreactapp&logoColor=52e0c4">|
|<img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=React%20Router&logoColor=white">|<img src=" https://img.shields.io/badge/React--Router-v6.23.1-CA4245?logo=reactrouter&logoColor=CA4245">|
|<img src="https://img.shields.io/badge/React--Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">|<img src=" https://img.shields.io/badge/@tanstack/React--Query-v5.40.0-FF4154?logo=createreactapp&logoColor=FF4154">|
|<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black">|<img src=" https://img.shields.io/badge/Firebase-v18.3.1-FFCA28?logo=firebase&logoColor=FFCA28">|
|<img src="https://img.shields.io/badge/Tailwindcss-06B6D4?style=for-the-badge&logo=Tailwindcss&logoColor=white">|<img src=" https://img.shields.io/badge/Tailwind%20CSS-v3.4.3-06B6D4?logo=tailwindcss&logoColor=06B6D4">|

<br/>

## Libraries
<br/>

|*Program*|*Version*|
|:--|--|
|<img src="https://img.shields.io/badge/React%20Icons-e91e63?style=for-the-badge&logo=React&logoColor=white">|<img src=" https://img.shields.io/badge/React--Icons-v5.2.1-e91e63?logo=react&logoColor=e91e63">|
|<img src="https://img.shields.io/badge/@tailwindcss%20line--clamp-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">|<img src=" https://img.shields.io/badge/@tailwindcss/line--clamp-v0.4.4-06B6D4?logo=tailwindcss&logoColor=06B6D4">|
|<img src="https://img.shields.io/badge/Uuid-7fa9cf?style=for-the-badge&logo=SecurityScorecard&logoColor=white">|<img src=" https://img.shields.io/badge/uuid-v4-7fa9cf?logo=securityscorecard&logoColor=7fa9cf">|
<br/>

## Package Install
<br/>

<img src=" https://img.shields.io/badge/React--Router-v6.23.1-CA4245?logo=reactrouter&logoColor=CA4245">

```
yarn add react-router-dom
```
<br/>
<img src=" https://img.shields.io/badge/@tanstack/React--Query-v5.40.0-FF4154?logo=createreactapp&logoColor=FF4154">

```
yarn add @tanstack/react-query
```
<br/>
<img src=" https://img.shields.io/badge/Firebase-v18.3.1-FFCA28?logo=firebase&logoColor=FFCA28">

```
yarn add firebase
```
<br/>
<img src=" https://img.shields.io/badge/Tailwind%20CSS-v3.4.3-06B6D4?logo=tailwindcss&logoColor=06B6D4">

```
yarn add -D tailwindcss
yarn tailwindcss init
```
<br/>
<img src=" https://img.shields.io/badge/@tailwindcss/line--clamp-v0.4.4-06B6D4?logo=tailwindcss&logoColor=06B6D4">

```
yarn add -D @tailwindcss/line-clamp
```
<br/>
<img src=" https://img.shields.io/badge/uuid-v4-7fa9cf?logo=securityscorecard&logoColor=7fa9cf">

```
yarn add uuid
import { v4 as uuid } from 'uuid';
```
<br/>
<img src=" https://img.shields.io/badge/React--Icons-v5.2.1-e91e63?logo=react&logoColor=e91e63">

```
yarn add react-icons
```
<br/>

## Trouble Shooting
---
#### ERR : Permission Denied (in Promise)
[참고자료]("https://velog.io/@aocl333/Firebase-PERMISSIONDENIED-Permission-denied-error")

Firebase Project Console 페이지에서,

Console Menu > Realtime Database > Rules > false를 true로 변경

```
{
  "rules": {
    ".read": true,
    ".write": true,
  }
}
```
<br/>

## Firebase API Network Setting
[Official Docs]("https://firebase.google.com/docs?authuser=0")
<br/>
#### 1. Authentication - Google Sign-in

  <details>
  <summary> view full code</summary>
  <div markdown='1'>

  ```
  import { initializeApp } from "firebase/app";
  import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

  const firebaseConfig = {
    apiKey: [my apiKey],
    authDomain: "[projectId].firebase.com",
    databaseURL: "https://[projectId]-default-rtdb.[my database location].firebasedatabase.app",
    projectId: [my ProjectID],
  }

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const provider = new GoogleAuthProvider

  onAuthStateChanged(auth, (user) => {
    if(user) {
      // User is signed in
    } else {
      // User is signed out
    }
  })

  signInWithPopup(auth, provider)
    .then((res) => {
      const user = res.user;
    }) .catch(console.error);

  signOut(auth).then(() => {
    // Sign-out successful
  }) .catch(console.error)
  ```

  </div>
  </details>

<br/>

#### 2. Realtime Database - Firebase CRUD
  <details>
    <summary>view Full Code</summary>
    <div markdown='1'>
    
    ```
    import { initializeApp } from "firebase/app";
    import { getDatabase } from "firebase/database";

    const app = initializeApp(firebaseConfig)
    const database = getDatabase(app)

    // Read - get once
    get(ref(database, '[Object Key]'))
      .then((snapshot) => {
        if(snapshot.exists()) {
          return Object.value(snapshot.val())
        } else {
          console.log("No Data Available")
        }
      }).catch(console.error);

    // Add or Update
    function writeUserData(userId, name, email, imageUrl) {
      return set(ref( database, '[Object Key]'), {
        username: name,
        email: email,
        profile_picture: imageUrl
      })
    }

    // Delete
    remove(ref(database, '[Object Key]'))


    ```
    </div>
  </details>
