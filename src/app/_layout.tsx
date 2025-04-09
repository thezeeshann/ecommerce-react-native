import { Stack } from "expo-router";
import "../../global.css"

function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

export default Layout;
