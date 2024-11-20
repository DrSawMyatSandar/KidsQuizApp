import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const questions = [
  {
    question: "What is the color of the sky?",
    options: ["Blue", "Green", "Red", "Yellow"],
    answer: "Blue",
  },
  {
    question: "How many legs does a spider have?",
    options: ["6", "8", "4", "10"],
    answer: "8",
  },
  {
    question: "Which animal says 'Meow'?",
    options: ["Dog", "Cat", "Cow", "Bird"],
    answer: "Cat",
  },
  {
    question: "Which animal lives in water?",
    options: ["Dog", "Cat", "Duck", "Bird"],
    answer: "Duck",
  },
  {
    question: "Which animal flies on the Sky?",
    options: ["Dog", "Cat", "Cow", "Bird"],
    answer: "Bird",
  },
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <View style={styles.container}>
      {/* Logo and Title Section */}
      <View style={styles.header}>
        <Image
          source={require("./assets/logo.png")} // Replace with your logo path
          style={styles.logo}
        />
        <Text style={styles.title}>Kids Quiz App</Text>
        <Text style={styles.Text}>Developed by DrSMSD 2024</Text>
      </View>

      {/* Quiz Content */}
      {showScore ? (
        <View style={styles.scoreSection}>
          <Text style={styles.scoreText}>
            You scored {score} out of {questions.length}!
          </Text>
          <TouchableOpacity onPress={restartQuiz} style={styles.button}>
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.quizSection}>
          <Text style={styles.question}>
            {questions[currentQuestion].question}
          </Text>
          {questions[currentQuestion].options.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => handleAnswer(option)}
              style={styles.option}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  header: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100, // Adjust size as needed
    height: 100, // Adjust size as needed
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  quizSection: {
    width: "80%",
    alignItems: "center",
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    width: "100%",
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: "center",
  },
  optionText: {
    color: "#fff",
    fontSize: 16,
  },
  scoreSection: {
    alignItems: "center",
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
