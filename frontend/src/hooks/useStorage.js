import { useEffect, useState } from "react";
import { projectStorage } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //refrencec
    const storageRef = projectStorage.ref(file.name);

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(error);
      },
      async () => {
        // get uploaded image url
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file, error]);

  return { progress, url, error };
};

export default useStorage;
