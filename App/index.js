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

As the years passed, Isabella's adventures continued. She became known as the "Protector of the Enchanted Garden." The garden thrived under her care, and the kingdom flourished. But, the kingdom’s prosperity drew the eyes of a greedy neighboring king who sought to conquer the enchanted garden.

On a stormy night, Isabella was alerted by the owl that the neighboring king's army was approaching. With a brave heart, she gathered her loyal friends and devised a plan. The talking animals, with their unique abilities, helped in creating defenses and traps. The unicorn, with its magic, enchanted the surrounding forest to protect against intruders.

When the enemy army arrived, they were met with an enchanted forest that misled and confused them. The animals worked together, outsmarting the invaders without a single life lost. The neighboring king, realizing the futility of his conquest, retreated in defeat.

After the battle, the kingdom and the enchanted garden celebrated their victory. Stories of Princess Isabella's bravery spread far and wide. She continued to protect the garden, forging alliances with other kingdoms and ensuring peace.

Isabella's legacy lived on for centuries. The enchanted garden became a symbol of unity, magic, and the triumph of good over greed. And so, Princess Isabella and her friends lived happily ever after, in a world where magic and wonder never ceased to exist.`,

        dragon: `In a land filled with tall mountains and deep valleys, a young boy named Lucas lived in a small village. One day, while exploring the forest near his home, Lucas stumbled upon an abandoned dragon egg. Determined to care for it, he took it home and kept it warm.

Days turned into weeks, and one morning, the egg hatched. Out came a tiny dragon with shimmering green scales and bright blue eyes. Lucas named the dragon Ember. As Ember grew, Lucas discovered that the dragon had a gentle heart and a playful spirit. They soon became inseparable, sharing every moment together.

As the years passed, Ember became a magnificent dragon, strong and wise. Lucas and Ember would fly across the skies, exploring distant lands and discovering hidden places. One day, they learned that their village was in danger. A fierce storm had caused the river to overflow, threatening to flood the village.

Without hesitation, Lucas and Ember took action. Ember flew to the mountains and gathered large boulders, while Lucas organized the villagers to build a wall to protect their homes. Together, they succeeded in diverting the water and saving the village.

Grateful for their heroism, the villagers celebrated with a grand feast. Lucas and Ember were hailed as heroes, and their bond grew stronger. As protectors of the village, they ensured the safety and prosperity of their home. They shared many adventures, facing challenges and discovering new wonders.

One day, an old hermit visited the village. He told Lucas and Ember of a powerful artifact hidden deep within the mountains that could bring peace and prosperity to the entire region. Intrigued, they decided to seek out the artifact. Their journey was arduous; they faced snowstorms, treacherous paths, and mysterious creatures.

During their quest, Lucas and Ember found themselves in an ancient cave. The walls were covered with glowing runes, and at its heart was the artifact – a crystal pulsating with immense energy. As Lucas approached, a guardian spirit emerged, testing their worthiness with a series of challenges. Together, Lucas and Ember showed their courage, wisdom, and compassion.

Having proved themselves, they were granted the crystal. As they returned, they used the crystal's power to ensure abundant harvests, clear skies, and harmony among the tribes and creatures of the land.

Lucas and Ember’s village flourished, becoming a beacon of hope and unity. They were loved and respected not just in their village, but across the entire region. Legends of their deeds spread far and wide, inspiring generations to come.

Lucas and Ember's bond remained unbreakable. They continued their quest for knowledge, exploring far-off lands, and making new friends and allies. They lived long and fulfilling lives, always together, always seeking new horizons.

And so, their legend grew, a testament to the power of friendship, courage, and kindness. Lucas and Ember lived their days filled with joy and excitement, knowing that their bond was forged in the fires of adventure and tempered by the love of their people.`,

        spaceship: `Far above the clouds, in the vastness of space, a little spaceship named Stardust soared through the stars. Inside, a curious astronaut named Alex embarked on a journey of exploration. Stardust was equipped with advanced technology, enabling Alex to visit distant planets and galaxies.

One day, while navigating through a cluster of asteroids, Alex received a signal from an unknown source. Following the signal, Stardust took Alex to a planet covered in vibrant hues of blue and green. Upon landing, Alex was greeted by a friendly alien named Zorin.

Zorin explained that their planet, Lumina, was in need of help. The planet's core was losing energy, and the once-bright lights that illuminated their world were dimming. Moved by their plight, Alex decided to help. Working together with Zorin and the inhabitants of Lumina, Alex discovered that the energy source of their planet was a rare crystal hidden deep within the Lumina caverns.

With determination and courage, Alex and Zorin embarked on a journey to retrieve the crystal. They faced numerous challenges, from navigating treacherous terrain to solving ancient puzzles. Along the way, they encountered glowing plants, mysterious creatures, and hidden passages.

After much effort, they reached the heart of the caverns and found the crystal. Its radiant energy filled the caverns, casting a warm glow. Alex carefully transported the crystal back to the surface, where it was connected to Lumina's core. The planet's lights began to shine once more, and the inhabitants rejoiced.

Grateful for Alex's bravery and kindness, the people of Lumina celebrated with a grand festival. Alex and Zorin shared stories of their journey, and Alex was honored as a hero. With Lumina restored, Alex resumed the journey through space, knowing that there were many more adventures awaiting.

As Stardust continued to soar through the cosmos, Alex cherished the memories of Lumina and the friendships forged. The journey was endless, filled with new discoveries and wonders beyond imagination.

One day, Alex discovered an ancient star map aboard Stardust. The map led to an uncharted galaxy, rumored to hold the secrets of the universe. Intrigued, Alex set a course, venturing into the unknown. The journey was perilous, with cosmic storms and gravitational anomalies testing Stardust's resilience.

Upon reaching the galaxy, Alex was greeted by an advanced civilization known as the Celestians. They were beings of pure light, with knowledge spanning eons. The Celestians revealed that Alex had been chosen to share the wisdom of the stars with all beings. Alex spent years learning from the Celestians, understanding the balance of the universe and the interconnectedness of all life.

With newfound knowledge, Alex returned to known space, sharing the teachings of the Celestians. Planets and civilizations benefited from the wisdom, ushering in an era of peace and prosperity. Alex's journey became a beacon of hope, inspiring explorers and dreamers across the cosmos.

As the years passed, Alex continued to explore, always seeking new horizons and forging new friendships. Stardust became a legend, known throughout the galaxy as a symbol of adventure, knowledge, and unity. Alex's name was immortalized among the stars, a reminder of the endless possibilities that await those who dare to explore.

And so, Alex and Stardust's exploration continued, guided by the stars and the promise of new horizons. Their bond grew stronger with each journey, an unbreakable connection forged in the crucible of the cosmos. Together, they ventured into the unknown, knowing that the universe held infinite wonders and stories yet to be discovered. And thus, their legacy lived on, a testament to the power of curiosity, courage, and the enduring spirit of exploration.`,
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