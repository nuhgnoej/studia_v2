import { useRouter } from 'expo-router';
import { signOut } from 'firebase/auth';
import { Button, Text, View } from 'react-native';
import { auth } from '../../src/lib/firebase';

export default function Home() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    router.replace('/login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text>Welcome, {auth.currentUser?.email}</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}
