import React from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function SixMonthScreen() {
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
        <ThemedText type="title">Six-Month Courses</ThemedText>
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText>
          Dive deep into skill-building with our extensive six-month training programs.
        </ThemedText>
      </ThemedView>

      <ScrollView style={styles.courseContainer}>
        <ThemedView style={styles.courseCard}>
          <ThemedText type="subtitle">Professional Cooking</ThemedText>
          <ThemedText>
            Master the art of cooking with hands-on training in culinary techniques and recipes. 
            This course covers everything from basic knife skills to gourmet plating, allowing you 
            to create a variety of delicious dishes.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.courseCard}>
          <ThemedText type="subtitle">Child Minding</ThemedText>
          <ThemedText>
            Learn essential skills for caring for children, focusing on safety, development, 
            and fun activities. This course includes practical sessions on nutrition, emergency 
            first aid for kids, and engaging children in educational play.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.courseCard}>
          <ThemedText type="subtitle">Sewing & Tailoring</ThemedText>
          <ThemedText>
            From basic sewing techniques to advanced tailoring, create beautiful garments and textiles. 
            You'll learn how to operate a sewing machine, work with different fabrics, and construct 
            custom-fit clothing.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.courseCard}>
          <ThemedText type="subtitle">Housekeeping & Hospitality</ThemedText>
          <ThemedText>
            Gain skills in cleaning, organization, and customer service to excel in hospitality roles. 
            This course covers effective cleaning techniques, guest interaction, and managing hospitality 
            tasks efficiently.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.courseCard}>
          <ThemedText type="subtitle">First Aid Essentials</ThemedText>
          <ThemedText>
            Learn critical first aid skills to provide immediate assistance in emergencies. 
            This course includes CPR, wound care, and handling common medical emergencies, ensuring 
            you’re prepared to help in any situation.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.courseCard}>
          <ThemedText type="subtitle">Garden Maintenance</ThemedText>
          <ThemedText>
            Develop green thumb skills, from planting to maintenance, to keep gardens thriving. 
            You'll learn about plant care, pest management, and landscaping principles, enabling you 
            to create beautiful outdoor spaces.
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
