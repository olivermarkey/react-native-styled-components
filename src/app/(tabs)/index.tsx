import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text } from "@/src/components/ui/text"
import { View } from "@/src/components/ui/view"
import { TextInput } from "@/src/components/ui/text-input"
import { Button } from '@/src/components/ui/button';
import Theme from '@/src/constants/theme';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", padding: 20, gap: 10 }}>
        <TextInput
          placeholder="Hello"
        />
        <Button variant="default" size="small">
          <Text style={{ color: "black" }}>Button</Text>
        </Button>
      </View>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
