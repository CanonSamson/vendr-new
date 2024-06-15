import { useEffect, useRef } from "react";
import { Alert } from "react-native";
import io from "socket.io-client";

const useSocketConnection = () => {
  const socket = useRef<any>(null);

  const networkId = Math.floor(Math.random() * 1000).toString();
  
  useEffect(() => {
    socket.current = io("https://vendr-backend.onrender.com", {
      query: { networkId },
    });

    if (socket.current) {
      socket.current?.emit("join", networkId);
      socket.current.on("network-poor", (data: { message: string }) => {
        Alert.alert(data.message);
      });
    }

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, [networkId]);
};

export default useSocketConnection;
