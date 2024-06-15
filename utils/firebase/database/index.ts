import { db } from "@/firebase_config";
import { doc, setDoc, updateDoc, collection, getDocs, getDoc } from "firebase/firestore";

interface FirestoreData {
  [key: string]: any;
}

export const createDB = async (collectionName: string, Id: string, Data: FirestoreData): Promise<void | Error> => {
  try {
    await setDoc(doc(db, collectionName, Id), Data);
  } catch (err) {
    console.error(err);
    return err as Error;
  }
};

export const updateDB = async (collectionName: string, Id: string, Data: FirestoreData): Promise<{ success: boolean } | Error> => {
  try {
    await updateDoc(doc(db, collectionName, Id), Data);
    return { success: true };
  } catch (err) {
    console.error(err);
    return err as Error;
  }
};

export const getCollectionDB = async (collectionName: string): Promise<{ Data: FirestoreData[] } | Error> => {
  try {
    const data = await getDocs(collection(db, collectionName));
    const Data = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return { Data };
  } catch (err) {
    console.error(err);
    return err as Error;
  }
};

export const getDB = async (collectionName: string, documentId: string): Promise<{ data: FirestoreData | undefined } | { error: Error }> => {
  try {
    const dataDoc = await getDoc(doc(db, collectionName, documentId));
    const data = dataDoc.data();
    return { data };
  } catch (error) {
    return { error: error as Error };
  }
};
