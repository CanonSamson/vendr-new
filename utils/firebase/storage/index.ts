import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase_config";

interface UploadImageParams {
  uri: string;
  path: string;
  fileType: string;
  setProgress: (progress: number) => void;
}

interface UploadImageResult {
  fileType: string;
  url: string;
}

export const uploadImage = async ({
  uri,
  path,
  fileType,
  setProgress,
}: UploadImageParams): Promise<UploadImageResult> => {
  const response = await fetch(uri);
  const blob = await response.blob();

  const storageRef = ref(storage, `${path}/` + new Date().getTime());
  const uploadTask = uploadBytesResumable(storageRef, blob);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(parseFloat(progress.toFixed()));
      },
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          resolve({ fileType, url: downloadURL });
        });
      }
    );
  });
};
