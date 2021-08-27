export interface Config{
    port: string,
    host: string,
    url: string,
    firebaseConfig: {
        apiKey: string,
        authDomain: string,
        databaseURL: string,
        projectId: string,
        storageBucket: string,
        messagingSenderId: string,
        appId: string
    }
}