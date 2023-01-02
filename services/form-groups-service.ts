import { onValue, ref } from "firebase/database";
import { database } from "../firebase";
import { mapFirebaseData } from "../utilities/service-utility";

export const findAll = () =>
  new Promise((resolve) => {
    onValue(ref(database, "form-groups"), (snapshot) => {
      const value = snapshot.val();

      resolve(value ? mapFirebaseData(value) : []);
    });
  });
