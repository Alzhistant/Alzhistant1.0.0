import firebase from 'firebase/app';
import "firebase/storage";
import "firebase/firestore";


const db = firebase.firestore(firebaseApp);

//Seguir revisando firebase
db.collection("Pacientes").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
