import { Stack } from "expo-router";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Linking } from "react-native";

export default function BusinessLayout() {
  const router = useRouter();
  //   useEffect(() => {
  //     const handleDeepLink = (event) => {
  //       console.log("event >>>>>>>", event);
  //       const url = event.url;
  //       const path = url.split("/business/")[1];

  //       // Redirect /business/qr/TCQR1 to /business/TCQR1
  //       if (path.startsWith("qr/")) {
  //         const id = path.split("qr/")[1];
  //         router.push(`/business/${id}`);
  //       }
  //     };

  //     // Listen to deep links
  //     const subscription = Linking.addEventListener("url", handleDeepLink);

  //     return () => subscription.remove();
  //   }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" />
      <Stack.Screen name="qr/[id]" />
    </Stack>
  );
}
