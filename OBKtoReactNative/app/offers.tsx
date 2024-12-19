// app/offers.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function OfferScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oferty</Text>
      <TextInput
        style={styles.input}
        placeholder="Kraj"
      />
      <TextInput
        style={styles.input}
        placeholder="Miasto"
      />
      <TextInput
        style={styles.input}
        placeholder="Kategoria"
      />
          <TextInput
        style={styles.input}
        placeholder="Filtruj"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Szukaj</Text>

      </TouchableOpacity>
  
      <Text style={styles.noResults}>Pokazuje 0 rezultatów</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 100,
},
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  noResults: {
    marginTop: 20,
    fontSize: 16,
    color: '#999999',
  },
});
