import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Alert } from 'react-native';

// List of all courses with their prices
const courses = [
  // Six-Month Courses
  { id: '1', title: 'Professional Cooking', price: 10000 },
  { id: '2', title: 'Advanced Child Minding', price: 6500 },
  { id: '3', title: 'Sewing & Tailoring', price: 7500 },
  { id: '4', title: 'Housekeeping & Hospitality', price: 6000 },
  { id: '5', title: 'Landscaping & Gardening', price: 8500 },
  

  // Six-Week Courses
  { id: '6', title: 'First Aid Essentials', price: 1000 },
  { id: '7', title: 'Basic Child Minding', price: 1500 },
  { id: '8', title: 'Intro to Sewing', price: 1200 },
  { id: '9', title: 'Home Cooking Skills', price: 2000 },
  { id: '10', title: 'Garden Maintenance', price: 1400 },
 
];

export default function FeeCalculator() {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const toggleCourseSelection = (courseId: string) => {
    if (!selectedCourses.includes(courseId)) {
      setSelectedCourses([...selectedCourses, courseId]); // Add to selectedCourses
    }
  };

  const calculateTotal = () => {
    return selectedCourses.reduce((total, courseId) => {
      const course = courses.find(course => course.id === courseId);
      return total + (course ? course.price : 0);
    }, 0);
  };

  const handleSubmit = () => {
    if (selectedCourses.length === 0) {
      Alert.alert('No courses selected', 'Please select at least one course.');
    } else {
      Alert.alert('Submitted', 'Your courses have been submitted successfully!');
      // Optionally reset selections after submission
      setSelectedCourses([]);
    }
  };

  const handleClearChoices = () => {
    setSelectedCourses([]); // Clear the selected courses
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Courses</Text>
      <ScrollView style={styles.courseList}>
        {courses.map(course => (
          <View key={course.id} style={styles.courseItem}>
            <Button
              title={`${course.title} - R${course.price.toLocaleString()}`}
              onPress={() => toggleCourseSelection(course.id)}
              color={selectedCourses.includes(course.id) ? 'green' : 'grey'} // Change to grey for unselected
              disabled={selectedCourses.includes(course.id)} // Disable button if already selected
            />
          </View>
        ))}
      </ScrollView>
      <Text style={styles.total}>
        Total: R{calculateTotal().toLocaleString()}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} color="#2196F3" /> {/* Submit button color */}
        <Button title="Clear Choices" onPress={handleClearChoices} color="#2196F3" /> {/* Clear Choices button color */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  courseList: {
    marginBottom: 20,
  },
  courseItem: {
    marginBottom: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Arrange buttons side by side
    marginTop: 20,
  },
});