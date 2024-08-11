import { View,Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link } from "expo-router"

const Signup = () => {
  return (
    <SafeAreaView>
        <View>
          <Link href={"/"}>
            <Text>Sign in Now</Text>
          </Link>
            
        </View>
    </SafeAreaView>
  )
}

export default Signup