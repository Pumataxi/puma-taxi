import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';

// Основной экран приложения "Puma Taxi"
const App = () => {
  const [status, setStatus] = useState('Ожидание');

  return (
    <SafeAreaView style={styles.container}>
      {/* Шапка с логотипом */}
      <View style={styles.header}>
        <Text style={styles.logoText}>PUMA TAXI</Text>
        <Image 
          source={{ uri: 'https://img.icons8.com/color/96/puma.png' }} 
          style={styles.logoImage} 
        />
      </View>

      {/* Центральная часть с картой (заглушка) */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>Карта загружается...</Text>
        <Text style={styles.statusText}>Статус: {status}</Text>
      </View>

      {/* Кнопки управления */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#00A86B' }]} 
          onPress={() => setStatus('Поиск машины...')}
        >
          <Text style={styles.buttonText}>ЗАКАЗАТЬ ПУМУ</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#FF8C00', marginTop: 10 }]} 
          onPress={() => setStatus('Ожидание')}
        >
          <Text style={styles.buttonText}>ОТМЕНА</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C', // Графитовый фон, как ты любишь
  },
  header: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoText: {
    color: '#00A86B', // Изумрудный цвет
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 10,
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  mapPlaceholder: {
    flex: 1,
    margin: 20,
    backgroundColor: '#2D2D2D',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3D3D3D',
  },
  mapText: {
    color: '#888',
    fontSize: 18,
  },
  statusText: {
    color: '#00BFFF', // Ярко-голубой статус
    marginTop: 10,
    fontSize: 16,
  },
  buttonContainer: {
    padding: 20,
  },
  button: {
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
