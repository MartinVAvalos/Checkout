import firebase from "firebase"
import { config } from "../utils/config";

export
const db = firebase.initializeApp(config.firebaseConfig);