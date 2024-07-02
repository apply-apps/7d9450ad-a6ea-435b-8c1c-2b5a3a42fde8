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
        princess: `Once upon a time in a faraway kingdom, there was a brave princess named Isabella who loved to explore. One sunny morning, Isabella set out on an adventure through the castle gardens. As she wandered, she stumbled upon a hidden door covered in ivy. With a sense of excitement, she pushed the door open and stepped inside.

The door led to a magical garden unlike any she had ever seen. The flowers glowed in vibrant colors, and the trees seemed to whisper stories as the wind rustled their leaves. Isabella marveled at the beauty around her. As she walked deeper into the garden, she encountered a group of talking animals.

A wise old owl greeted her, saying, "Welcome, Princess Isabella. We have been waiting for you." The owl introduced her to a cheerful squirrel, a gentle deer, and a mischievous fox. Together, they led her to a sparkling pond where a majestic unicorn stood drinking.

The unicorn spoke, "Princess, you have a kind heart, and this garden is your reward. Here, you will find adventure, friendship, and the secrets of the past." Isabella spent her days exploring the garden's wonders, uncovering hidden treasures and ancient stories.

One day, Isabella discovered a treasure chest filled with jewels and ancient scrolls. The scrolls revealed the history of the magical garden and the enchanted kingdom it was a part of. Isabella, with her new friends, vowed to protect the garden and its secrets.

As the years passed, Isabella's adventures continued. She became known as the "Protector of the Enchanted Garden." The garden thrived under her care, and the kingdom flourished. And so, Princess Isabella and her friends lived happily ever after, in a world where magic and wonder never ceased to exist.`,

        dragon: `In a land filled with tall mountains and deep valleys, a young boy named Lucas lived in a small village. One day, while exploring the forest near his home, Lucas stumbled upon an abandoned dragon egg. Determined to care for it, he took it home and kept it warm.

Days turned into weeks, and one morning, the egg hatched. Out came a tiny dragon with shimmering green scales and bright blue eyes. Lucas named the dragon Ember. As Ember grew, Lucas discovered that the dragon had a gentle heart and a playful spirit. They soon became inseparable, sharing every moment together.

As the years passed, Ember became a magnificent dragon, strong and wise. Lucas and Ember would fly across the skies, exploring distant lands and discovering hidden places. One day, they learned that their village was in danger. A fierce storm had caused the river to overflow, threatening to flood the village.

Without hesitation, Lucas and Ember took action. Ember flew to the mountains and gathered large boulders, while Lucas organized the villagers to build a wall to protect their homes. Together, they succeeded in diverting the water and saving the village.

Grateful for their heroism, the villagers celebrated with a grand feast. Lucas and Ember were hailed as heroes, and their bond grew stronger. As protectors of the village, they ensured the safety and prosperity of their home. They shared many adventures, facing challenges and discovering new wonders.

And so, Lucas and Ember's legend grew. Their story was told for generations, inspiring young and old alike. Together, they proved that friendship, courage, and a kind heart could overcome any obstacle. Lucas and Ember lived their days filled with joy and excitement, knowing that their bond was unbreakable.`,

        spaceship: `Far above the clouds, in the vastness of space, a little spaceship named Stardust soared through the stars. Inside, a curious astronaut named Alex embarked on a journey of exploration. Stardust was equipped with advanced technology, enabling Alex to visit distant planets and galaxies.

One day, while navigating through a cluster of asteroids, Alex received a signal from an unknown source. Following the signal, Stardust took Alex to a planet covered in vibrant hues of blue and green. Upon landing, Alex was greeted by a friendly alien named Zorin.

Zorin explained that their planet, Lumina, was in need of help. The planet's core was losing energy, and the once-bright lights that illuminated their world were dimming. Moved by their plight, Alex decided to help. Working together with Zorin and the inhabitants of Lumina, Alex discovered that the energy source of their planet was a rare crystal hidden deep within the Lumina caverns.

With determination and courage, Alex and Zorin embarked on a journey to retrieve the crystal. They faced numerous challenges, from navigating treacherous terrain to solving ancient puzzles. Along the way, they encountered glowing plants, mysterious creatures, and hidden passages.

After much effort, they reached the heart of the caverns and found the crystal. Its radiant energy filled the caverns, casting a warm glow. Alex carefully transported the crystal back to the surface, where it was connected to Lumina's core. The planet's lights began to shine once more, and the inhabitants rejoiced.

Grateful for Alex's bravery and kindness, the people of Lumina celebrated with a grand festival. Alex and Zorin shared stories of their journey, and Alex was honored as a hero. With Lumina restored, Alex resumed the journey through space, knowing that there were many more adventures awaiting.

As Stardust continued to soar through the cosmos, Alex cherished the memories of Lumina and the friendships forged. The journey was endless, filled with new discoveries and wonders beyond imagination. And so, Alex and Stardust's exploration continued, guided by the stars and the promise of new horizons.`,

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