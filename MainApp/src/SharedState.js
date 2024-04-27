import { useState } from "react";

const useSharedState = () => {
  const [sharedData, setSharedData] = useState("Initial Data");
  return { sharedData, setSharedData };
};

export default useSharedState;
