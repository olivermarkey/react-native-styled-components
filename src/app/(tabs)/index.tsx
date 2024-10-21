import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text } from "@/src/components/ui/text"
import { View } from "@/src/components/ui/view"
import { TextInput } from "@/src/components/ui/text-input"
import { Button } from '@/src/components/ui/button';
import Theme from '@/src/constants/theme';
import { Card } from '@/src/components/ui/card';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Card style={{ width: "90%", gap: 10 }}>
          <TextInput
            placeholder="Hello"
          />
          <Button variant="default" size="small">
            <Text style={{ color: "black" }}>Button</Text>
          </Button>
      </Card>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
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
