import { db } from "../../../firebase_config";

export const createDB = async (collectionName, Id, Data) => {
  const { doc, setDoc } = await import("firebase/firestore");

  try {
    await setDoc(doc(db, collectionName, Id), Data);
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const updateDB = async (collectionName, Id, Data) => {
  const { doc, updateDoc } = await import("firebase/firestore");
  try {
    const result = await updateDoc(doc(db, collectionName, Id), Data);
    return { success: true };
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const getCollectionDB = async (collectionName) => {
  const { collection, getDocs } = await import("firebase/firestore");
  try {
    const data = await getDocs(collection(db, collectionName));
    const Data = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return { Data };
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const getDB = async (collectionName, documentId) => {
  const { doc, getDoc } = await import("firebase/firestore");
  try {
    const dataDoc = await getDoc(doc(db, collectionName, documentId));
    const data = dataDoc.data();
    return { data };
  } catch (error) {
    return { error };
  }
};
