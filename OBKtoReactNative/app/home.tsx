// app/home.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://your-image-link.com/home-banner' }}
        style={styles.banner}
      />
      <Text style={styles.title}>Witamy w Roadside Stall</Text>
      <Text style={styles.description}>
        Produkty rolne od rolnika blisko Ciebie. Najlepsza aplikacja do kupowania świeżej żywności bezpośrednio od lokalnych rolników.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Dodaj Stoisko Przydrożne</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  banner: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
