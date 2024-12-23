import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import Scoreboard from './components/Scoreboard';

const App = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleScoreChange = (team, change) => {
    if (team === 'A') {
      const newScore = Math.max(0, teamAScore + change);
      setTeamAScore(newScore);
      if (newScore >= 10) setWinner('Tim A');
    } else if (team === 'B') {
      const newScore = Math.max(0, teamBScore + change);
      setTeamBScore(newScore);
      if (newScore >= 10) setWinner('Tim B');
    }
  };

  const resetGame = () => {
    setTeamAScore(0);
    setTeamBScore(0);
    setWinner(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skor Pertandingan Futsal</Text>
      <Scoreboard
        teamName="Tim A"
        score={teamAScore}
        onScoreChange={(change) => handleScoreChange('A', change)}
      />
      <Scoreboard
        teamName="Tim B"
        score={teamBScore}
        onScoreChange={(change) => handleScoreChange('B', change)}
      />
      {winner && (
        <Text style={styles.winner}>🏆 {winner} Menang! 🏆</Text>
      )}
      <Button title="Reset Pertandingan" onPress={resetGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  winner: {
    fontSize: 20,
    color: 'green',
    margin: 20,
    fontWeight: 'bold',
  },
});

export default App;
