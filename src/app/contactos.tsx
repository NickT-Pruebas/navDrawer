import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Contactos() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  const manejarEnvio = () => {
    if (!nombre.trim() || !correo.trim()) {
      Alert.alert('Atención', 'Por favor ingresa tu nombre y correo.');
      return;
    }
    Alert.alert('¡Éxito!', `Gracias ${nombre}, tu mensaje ha sido enviado.`);
    setNombre('');
    setCorreo('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Contactos</Text>

      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre"
          placeholderTextColor="#94A3B8"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Escribe tu correo"
          placeholderTextColor="#94A3B8"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.botonEnviar} onPress={manejarEnvio}>
          <Text style={styles.textoBoton}>Enviar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.redesContainer}>
        <TouchableOpacity
          style={styles.iconoRed}
          onPress={() => Linking.openURL('https://www.facebook.com')}
        >
          <FontAwesome name="facebook" size={20} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconoRed}
          onPress={() => Linking.openURL('https://www.youtube.com')}
        >
          <FontAwesome name="youtube" size={20} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconoRed}
          onPress={() => Linking.openURL('https://www.instagram.com')}
        >
          <FontAwesome name="instagram" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 10,
  },
  banner: {
    width: 350,
    height: 140,
    marginBottom: 10,
  },
  formulario: {
    width: '100%',
    backgroundColor: '#1E293B', // Reemplaza el color naranja por azul slate elegante
    padding: 20,
    borderRadius: 12,
    marginVertical: 15,
  },
  input: {
    backgroundColor: '#334155',
    color: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
    marginVertical: 6,
    fontSize: 14,
  },
  botonEnviar: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  redesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  iconoRed: {
    backgroundColor: '#1E293B',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 50,
    marginHorizontal: 8,
  },
});