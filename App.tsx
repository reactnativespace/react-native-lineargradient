import React from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const gradients = [
  { name: 'Sunset', colors: ['#ff7e5f', '#feb47b'] },
  { name: 'Instagram', colors: ['#feda75', '#fa7e1e', '#d62976', '#962fbf', '#4f5bd5'] },
  { name: 'Ocean Blue', colors: ['#2193b0', '#6dd5ed'] },
  { name: 'Purple Love', colors: ['#cc2b5e', '#753a88'] },
  { name: 'Aqua Marine', colors: ['#1A2980', '#26D0CE'] },
  { name: 'Bloody Mary', colors: ['#FF512F', '#DD2476'] },
  { name: 'Mojito', colors: ['#1D976C', '#93F9B9'] },
  { name: 'Flare', colors: ['#f12711', '#f5af19'] },
  { name: 'Green Beach', colors: ['#02AAB0', '#00CDAC'] },
  { name: 'Grapefruit Sunset', colors: ['#e96443', '#904e95'] },
  { name: 'Shifter', colors: ['#bc4e9c', '#f80759'] },
  { name: 'Emerald Water', colors: ['#348F50', '#56B4D3'] },
  { name: 'Cool Blues', colors: ['#2193b0', '#6dd5ed'] },
  { name: 'MegaTron', colors: ['#C6FFDD', '#FBD786', '#f7797d'] },
  { name: 'Pink Paradise', colors: ['#e1eec3', '#f05053'] },
  { name: 'Cherry', colors: ['#EB3349', '#F45C43'] },
  { name: 'Sky', colors: ['#76b852', '#8DC26F'] },
  { name: 'Purple Bliss', colors: ['#360033', '#0b8793'] },
  { name: 'Steel Gray', colors: ['#485563', '#29323c'] },
  { name: 'Peach', colors: ['#ED4264', '#FFEDBC'] },
];

export default function App() {
  return (
      <ScrollView contentContainerStyle={styles.container}>
        {gradients.map((gradient, index) => (
            <TouchableOpacity key={index} activeOpacity={0.8} style={styles.buttonWrapper}>
              <LinearGradient
                  // @ts-ignore
                  colors={gradient.colors}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.button}>
                <Text style={styles.buttonText}>{gradient.name}</Text>
              </LinearGradient>
            </TouchableOpacity>
        ))}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 50,
    alignItems: 'center',
  },
  buttonWrapper: {
    width: '100%',
    marginBottom: 14,
  },
  button: {
    borderRadius: 16,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
