import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Inicio() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Viajeros del Mundo</Text>

      <Text style={styles.parrafo}>
        Bienvenido a nuestra aplicación. Explora los mejores destinos, experiencias
        y rutas para organizar tus viajes de forma sencilla y rápida.
      </Text>


      <TouchableOpacity
        style={styles.boton}
        onPress={() => router.push('/contactos')}
      >
        <Text style={styles.textoBoton}>Clic aquí</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  parrafo: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 15,
  },
  imagen: {
    width: 250,
    height: 180,
    marginBottom: 20,
  },
  boton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});