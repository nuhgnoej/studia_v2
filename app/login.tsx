import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, Button, TextInput, View } from 'react-native';
import { auth } from '../src/lib/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/(tabs)/home');
    } catch (error: any) {
      Alert.alert('Login failed', error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" onChangeText={setEmail} autoCapitalize="none" />
      <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <Button title="Log In" onPress={handleLogin} />
      <Button title="Go to Signup" onPress={() => router.push('/signup')} />
    </View>
  );
}
