import React from 'react';
import { ScrollView, Text, Image, StyleSheet, View } from 'react-native';

export default function Nosotros() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Nosotros</Text>

      <View style={styles.card}>
        <Text style={styles.parrafo}>
          Somos una comunidad apasionada por conectar personas y lugares.
          Nuestra misión es compartir guías detalladas para que tus viajes sean inolvidables.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.parrafo}>
          Contamos con experiencia en el sector turístico, ofreciendo información
          actualizada sobre alojamiento, transporte y gastronomía local.
        </Text>
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
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginVertical: 8,
    width: '100%',
  },
  parrafo: {
    fontSize: 14,
    lineHeight: 22,
    color: '#334155',
    textAlign: 'center',
  },
  imagen: {
    width: 180,
    height: 140,
    marginVertical: 10,
  },
});