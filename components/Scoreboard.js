import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Scoreboard = ({ teamName, score, onScoreChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => onScoreChange(1)} />
        <Button title="-" onPress={() => onScoreChange(-1)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 32,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default Scoreboard;
