import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase_config";

export const uploadImage = async ({ uri, path, fileType, setProgress }) => {
  const response = await fetch(uri);
  const blob = await response.blob();

  const storageRef = ref(storage, `${path}/` + new Date().getTime());
  const uploadTask = uploadBytesResumable(storageRef, blob);

  return new Promise((resolve, reject) => {
    // listen for events
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress.toFixed());
      },
      (error) => {
        // handle error
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          // save record
          resolve({ fileType, url: downloadURL });
        });
      }
    );
  });
};
