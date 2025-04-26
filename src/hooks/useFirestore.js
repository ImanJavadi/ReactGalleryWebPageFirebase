import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../firebase/config";

export const useFirestore = (collectionName) => {

    const [docs, setDocs] = useState();
    useEffect(() => {
        const q = query(collection(db, collectionName), orderBy('createddate', 'desc'));
        const unsub = onSnapshot(q, (snapshot) => {
            let documents = [];
            snapshot.forEach(doc => {
                documents.push({ id: doc.id, ...doc.data() });
            });
            setDocs(documents);
        })
        return () => unsub()
    }, [collectionName]);
    return { docs };

}