import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { usePathname, useRouter } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Linking } from "react-native";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();
  console.log("pathname >>>>>>>", pathname);
  const router = useRouter();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const linking = {
    prefixes: [
      "https://deep-linking-tawny.vercel.app",
      "https://staging-fe.mytwocents.io",
    ],
    config: {
      screens: {
        "check-in": "check-in",
        business: {
          path: "business/:id",
          parse: {
            id: (id: string) => `${id}`,
          },
        },
      },
    },
  };

  // useEffect(() => {
  //   const handleDeepLink = (url) => {
  //     if (!url) return;
  //     console.log("Deep Link URL >>>>>>>", url);
  //     const path = url.split("/business/")[1];

  //     // Redirect /business/qr/TCQR1 to /business/TCQR1
  //     if (path?.startsWith("qr/")) {
  //       const id = path.split("qr/")[1];
  //       router.push(`/business/${id}`);
  //     }
  //   };

  //   // Handle initial deep link (cold start)
  //   const checkInitialURL = async () => {
  //     const initialUrl = await Linking.getInitialURL();
  //     console.log("initialUrl >>>>>>>", initialUrl);
  //     handleDeepLink(initialUrl);
  //   };

  //   checkInitialURL();

  //   // Listen to deep links when app is already open (warm start)
  //   const subscription = Linking.addEventListener("url", (event) =>
  //     handleDeepLink(event.url)
  //   );

  //   return () => subscription.remove();
  // }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack linking={linking}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="business" options={{ headerShown: false }} />
        <Stack.Screen name="braze" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
