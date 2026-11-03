import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: true,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Inicio',
            title: 'Inicio',
            drawerIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color="red" />
            ),
          }}
        />
        <Drawer.Screen
          name="nosotros"
          options={{
            drawerLabel: 'Nosotros',
            title: 'Nosotros',
            drawerIcon: ({ color }) => (
              <FontAwesome name="envelope" size={24} color="blue" />
            ),
          }}
        />
        <Drawer.Screen
          name="contactos"
          options={{
            drawerLabel: 'Contactos',
            title: 'Contactos',
            drawerIcon: ({ color }) => (
              <FontAwesome name="comment" size={24} color="pink" />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}