// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
    ScrollView,
} from 'react-native';

const StoryGenerator = (topic) => {
    const stories = {
        princess: `Once upon a time in a faraway kingdom, there was a brave princess who loved to explore. One day, she discovered a hidden door in the castle that led to a magical garden. There, she met talking animals and found a treasure chest full of jewels. The princess and her new friends had many adventures and lived happily ever after.`,
        dragon: `In a land filled with tall mountains and deep valleys, a young boy found an abandoned dragon egg. He took care of it, and soon a friendly dragon hatched. The dragon grew quickly and they became best friends. They flew across the skies and protected the village from any harm. The dragon and the boy shared many wonderful adventures together.`,
        spaceship: `Far above the clouds, in the vastness of space, a little spaceship soared through the stars. Inside, a curious astronaut named Alex explored different planets. One day, Alex landed on a planet made entirely of candy. He met gummy bear creatures and marshmallow trees. Alex shared stories about Earth and learned about the candy planet's sweet customs before continuing his journey among the stars.`
    };

    return stories[topic.toLowerCase()] || `Once upon a time, in a place not too far away, there was a wonderful adventure that began with the topic of ${topic}. The story unfolded with unexpected twists and delightful moments, leaving everyone with a heartwarming tale to remember.`;
};

export default function App() {
    const [topic, setTopic] = useState('');
    const [story, setStory] = useState('');

    const generateStory = () => {
        setStory(StoryGenerator(topic));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bedtime Story Generator</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter a story topic"
                value={topic}
                onChangeText={setTopic}
            />
            <Button title="Generate Story" onPress={generateStory} />
            {story ? (
                <ScrollView style={styles.storyContainer}>
                    <Text style={styles.storyText}>{story}</Text>
                </ScrollView>
            ) : null}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: '100%',
        marginBottom: 20,
    },
    storyContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        width: '100%',
    },
    storyText: {
        fontSize: 16,
        lineHeight: 22,
    },
});