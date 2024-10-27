import React from 'react';
import { Image, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ContactScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/Logo_XHAW.png')}
          style={styles.headerImage}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Contact Information</ThemedText>
      </ThemedView>

      <ThemedView style={styles.infoContainer}>
        <ThemedText type="subtitle">Get in Touch</ThemedText>
        <ThemedText>
          We would love to hear from you! Please reach out with any questions or feedback.
        </ThemedText>

        <ThemedText type="subtitle">Phone:</ThemedText>
        <ThemedText>(+27) 834 414 720</ThemedText>

        <ThemedText type="subtitle">Email:</ThemedText>
        <ThemedText>info@empoweringthenation.org</ThemedText>

        <ThemedText type="subtitle">Address:</ThemedText>
        <ThemedText>456 Empower Lane, Johannesburg, South Africa</ThemedText>
      </ThemedView>

      <ThemedView style={styles.formContainer}>
        <ThemedText type="subtitle">Contact Us</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Your Message"
          multiline
          numberOfLines={4}
        />
        <Button title="Send Message" onPress={() => alert('Message sent!')} />
      </ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  infoContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  formContainer: {
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },



  headerImage: {
    height: 300,
    width: 415,
    bottom: 0,
    left: 0,
    top: 0,
    position: 'absolute',
  
  },
});