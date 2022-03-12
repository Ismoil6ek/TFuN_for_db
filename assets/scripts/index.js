// TODO: Replace with your app's Firebase project configuration
let text = "Malades toy bola";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9L-xoKXYBCgneW2ODGz8q7lccAELfNbk",
    authDomain: "auth-ad1da.firebaseapp.com",
    databaseURL: "https://auth-ad1da-default-rtdb.firebaseio.com",
    projectId: "auth-ad1da",
    storageBucket: "auth-ad1da.appspot.com",
    messagingSenderId: "927440792801",
    appId: "1:927440792801:web:574d32d03e02a7e30e9ba0",
    measurementId: "G-4MNQMR913Z"
};

firebase.initializeApp(firebaseConfig);

function Send() {

    let inputs = document.querySelectorAll("input");

    let obj = {
        location: inputs[0].value,
        place_name: inputs[1].value,
        tags: inputs[2].value,
        overview: inputs[3].value,
        fullimg: inputs[4].value,
        foodimg: inputs[5].value,
        img3: inputs[6].value,
        img4: inputs[7].value,
        best_time_to_visit: inputs[8].value,
        entry_price: inputs[9].value,
        tour_day_price: inputs[10].value,
        is_halal: inputs[11].value,
    };

    var isFilled = false

    for (let j = 0; j < inputs.length; j++) {
        if (inputs[j].value != "") {
            isFilled = true;
        } else {
            isFilled = false;
        }
    }

    if (isFilled) {
        firebase.database().ref(`places/${obj.location}`).set(obj);

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        };

        window.alert(text);
    }

}