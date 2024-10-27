import { Image, StyleSheet, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/Logo_XHAW.png')}
          style={styles.headerImage}
        />
      }>
      
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        
        {/* Welcome Section */}
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome to Empowering the Nation</ThemedText>
          <HelloWave />
        </ThemedView>

        <ThemedView style={styles.introContainer}>
          <ThemedText>
            Empowering essential skills for a brighter future through training and community upliftment.
          </ThemedText>
        </ThemedView>

        {/* About Us Section */}
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">About Us</ThemedText>
          <ThemedText>
            Empowering the Nation offers practical skills training for domestic workers and gardeners in Johannesburg, building self-sufficiency and employability.
          </ThemedText>
        </ThemedView>

        {/* Featured Courses Section */}
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="title">Featured Courses</ThemedText>
        </ThemedView>

        {/* Course Preview Cards */}
        <ThemedView style={styles.cardContainer}>
          <ThemedView style={styles.courseCard}>
            <ThemedText type="subtitle">First Aid Training</ThemedText>
            <ThemedText>
              Learn essential first aid skills to ensure safety in various situations.
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.courseCard}>
            <ThemedText type="subtitle">Landscaping Skills</ThemedText>
            <ThemedText>
              Gain knowledge to transform outdoor spaces and pursue a career in landscaping.
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.courseCard}>
            <ThemedText type="subtitle">Professional Cooking</ThemedText>
            <ThemedText>
              Develop culinary skills to succeed in the hospitality industry.
            </ThemedText>
          </ThemedView>
        </ThemedView>

        {/* Mission and Vision Section */}
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">Our Mission</ThemedText>
          <ThemedText>
            To provide accessible, high-quality training that empowers individuals and strengthens communities.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">Our Vision</ThemedText>
          <ThemedText>
            We envision a world where every person has the skills to build a secure and prosperous future.
          </ThemedText>
        </ThemedView>
        
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  introContainer: {
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  sectionContainer: {
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  headerImage: {
    height: 300,
    width: 415,
    bottom: 0,
    left: 0,
    top: 0,
    position: 'absolute',
  
  },
  cardContainer: {
    flexDirection: 'column',
    gap: 12,
    paddingHorizontal: 16,
  },
  courseCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 10,
  },
});
