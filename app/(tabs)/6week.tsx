import React from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function SixWeekScreen() {
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
        <ThemedText type="title">Six-Week Courses</ThemedText>
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText>
          Quick and intensive courses designed to equip you with essential skills in a short time.
        </ThemedText>
      </ThemedView>

      <ScrollView style={styles.courseContainer}>
        <ThemedView style={styles.courseCard}>
          <ThemedText type="subtitle">Basic Cooking Skills</ThemedText>
          <ThemedText>
            Learn fundamental cooking techniques and recipes to prepare delicious meals. 
            This course covers knife skills, cooking methods, and how to create a variety of 
            dishes, ensuring you can cook with confidence.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.courseCard}>
          <ThemedText type="subtitle">Introduction to Gardening</ThemedText>
          <ThemedText>
            Discover the basics of gardening, including planting, maintenance, and harvesting. 
            You'll learn about soil preparation, choosing the right plants, and seasonal care to 
            cultivate your own garden successfully.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.courseCard}>
          <ThemedText type="subtitle">Child Care Essentials</ThemedText>
          <ThemedText>
            Acquire necessary skills and knowledge for effective child care and safety. 
            This course includes child development principles, nutrition, and engaging activities to 
            promote learning and safety for children of various ages.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.courseCard}>
          <ThemedText type="subtitle">Basic Sewing Techniques</ThemedText>
          <ThemedText>
            Get started with sewing by learning basic stitches and projects. 
            You'll work on simple patterns, fabric selection, and machine operation, 
            enabling you to create your own simple garments and crafts.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.courseCard}>
          <ThemedText type="subtitle">Household Management</ThemedText>
          <ThemedText>
            Master the art of organizing and managing household tasks efficiently. 
            This course covers budgeting, cleaning schedules, meal planning, and time management 
            techniques to streamline your home life.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.courseCard}>
          <ThemedText type="subtitle">First Aid Basics</ThemedText>
          <ThemedText>
            Learn essential first aid skills for emergencies and safety at home. 
            This course includes CPR, wound care, and how to respond to common medical emergencies, 
            ensuring you feel prepared to handle emergencies confidently.
          </ThemedText>
        </ThemedView>
      </ScrollView>

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
  courseContainer: {
    paddingHorizontal: 16,
  },
  courseCard: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
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
