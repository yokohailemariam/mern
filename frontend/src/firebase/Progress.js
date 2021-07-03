import { useEffect } from "react";
import useStorage from "../hooks/useStorage";
const Progress = ({ file, setImage }) => {
  const { url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setImage(url);
    }
  }, [url, setImage]);

  return <div></div>;
};

export default Progress;
