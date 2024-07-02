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
        unicorn: `In a hidden glade within the mystical forest of Elarion, there lived a unique unicorn named Lyria. Lyria's horn was not just a symbol of purity, but it also glowed with the colors of the aurora. She was known across the land for her wisdom and gentle spirit. Lyria's best friend was a wise old tortoise named Morwen, who had lived for hundreds of years and had seen the world evolve.

One morning, as the dew sparkled on the grass, a young child named Esme stumbled into the glade. Esme was lost, having wandered far from her village in search of adventure. Lyria approached Esme and spoke in a voice that sounded like a melody, "Do not be afraid, young one. You are safe here."

Esme's eyes widened in surprise, but she felt no fear. Instead, she felt a sense of peace. "I am Esme," she replied. "I'm looking for a way to help my village; the crops have been failing and the river is drying up."

Lyria lowered her head to Esme's level. "Your courage has brought you here. There is a way to help your village, but it involves a journey to the Crystal Mountain. At its peak, you will find the Heart Crystal, which has the power to heal the land."

Morwen, the tortoise, moved slowly towards them. "Remember, Esme, the journey is not just a test of endurance but also of heart. The path to the Crystal Mountain is filled with challenges that will require kindness, bravery, and intelligence."

Determined to save her village, Esme agreed. Lyria and Morwen decided to accompany her, guiding her through the forest. They traveled for days, encountering enchanted beings like the fireflies that could illuminate the darkest paths and the singing river that told stories of ancient times.

One evening, as the sun was setting, they met a mischievous sprite named Kipp who loved riddles. Kipp would only allow them to pass if they solved his riddle: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?"

Esme thought long and hard and then smiled. "An echo!" she exclaimed. Kipp clapped in delight and granted them safe passage.

As they climbed higher, the air became thinner and the path steeper. They reached a cave guarded by a stone golem. The golem awoke and demanded proof of pure intentions. Esme, with Lyria and Morwen by her side, placed her hand on the golem and spoke from her heart about her love for her village and her desire to see it flourish. The golem, sensing the truth in her words, allowed them to pass.

Finally, they reached the peak of Crystal Mountain. The Heart Crystal pulsed with vibrant energy, illuminating the entire mountain top. Esme approached it with reverence. As she touched the crystal, she felt a surge of warmth and love. The crystal's light spread across the land, rejuvenating the rivers and fields. 

Lyria looked at Esme with pride. "You have done it, Esme. You have shown great courage and heart. Your village will thrive once more."

Esme returned to her village with Lyria, Morwen, and a piece of the Heart Crystal. The village celebrated their return, and the land flourished. Esme grew up to be a wise leader, always remembering her friends and the magical journey that taught her the true power of love and courage.

And so, the legend of Esme, Lyria, and Morwen lived on, inspiring generations to come with tales of bravery, friendship, and the magic that lies within the heart.`,

        pirate: `On the shimmering waters of the Azure Sea, there sailed a daring pirate captain named Elena Stormchaser. With her trusty crew aboard the ship, The Whispering Gale, she embarked on thrilling adventures of discovery and plundering the vast ocean. Elena was not an ordinary pirate; she had a map that revealed hidden islands and lost treasure, passed down through her family's generations.

One starry night, while anchored near a mysterious island, Elena dreamt of a hidden city known as Lumaria, a place filled with untold riches and ancient wisdom. Upon waking, she was determined to find this city. Gathering her crew, including her first mate, a clever parrot named Rico, and a skilled navigator named Finn, Elena set sail towards the unknown.

The journey was perilous. They braved fierce storms that made the ship groan, and navigated through treacherous waters guarded by sea monsters. But Elena's courage never wavered. One afternoon, as the sun cast a golden hue over the waves, they sighted an island unlike any other. The island was shrouded in mist, and the air buzzed with a strange energy.

Elena, Rico, and Finn disembarked, eager to explore. As they ventured deeper into the heart of the island, they discovered ancient ruins covered in ivy and symbols that glowed faintly. Rico, with his sharp eyes, noticed a pattern in the symbols. "These symbols form a path," he squawked, flapping his wings excitedly.

Following the symbols, they arrived at a towering gate made of crystal. At its center was a puzzle lock, which required the placing of colored gems in the correct order. Finn, recalling a legend his grandfather had told him, remembered the sequence that would unlock the gate: blue, green, and red.

With a satisfying click, the gate opened, revealing the entrance to Lumaria. The city was a marvel of ancient architecture and technology, with buildings made of crystal and streets paved with gold. At its heart was a majestic temple. They entered the temple and found an altar with the legendary Gem of Lumaria, a jewel said to grant immense knowledge and power.

But as Elena reached for the gem, a guardian spirit appeared. "Only those with pure intentions may claim the Gem of Lumaria," the spirit intoned. Elena, with her hand on her heart, spoke earnestly, "I seek to share the wisdom of Lumaria with the world and safeguard its treasures for future generations."

The spirit, sensing her sincerity, granted her the gem. With the Gem of Lumaria in their possession, Elena and her crew returned to The Whispering Gale. The sea seemed calmer, and the journey back was swift. News of their discovery spread far and wide, and Elena became a legend among pirates.

Elena used the knowledge gained from Lumaria to chart new territories and establish a sanctuary for adventurers and scholars, preserving the gem's power for the greater good. The Whispering Gale continued its voyages, seeking new horizons and untold stories.

Elena's legacy endured, a testament to bravery and discovery. Her adventures inspired countless tales and songs, and the map of Lumaria passed on, ensuring that its wonders would be protected and revered.

And so, Captain Elena Stormchaser's name was etched into the lore of the seas, a symbol of courage, wisdom, and the unquenchable thirst for adventure. The Whispering Gale sailed on, guided by the stars and the promise of new discoveries, its crew united by the spirit of exploration and the magic of Lumaria.`,

        sorcerer: `In the ancient kingdom of Eldoria, magic was woven into the very fabric of life. Among the towering spires and mystical rivers, there lived a young sorcerer named Kael. Gifted in the art of elemental magic, Kael was known for his talent and curiosity. His mentor, the wise Archmage Elira, guided him in mastering his powers.

One evening, as Kael was studying ancient scrolls in the library, he stumbled upon a prophecy that spoke of a great darkness threatening to engulf Eldoria. The key to stopping this darkness lay in the Crystal of Elements, a powerful artifact hidden deep within the Enchanted Forest. Determined to protect his kingdom, Kael set out on a journey to find the crystal.

Elira, sensing the gravity of his quest, entrusted Kael with the Amulet of Ancients, an artifact that could harness the elements. She warned him of the forest's trials and the need for wisdom, courage, and heart. With the amulet hanging around his neck, Kael ventured into the unknown.

The Enchanted Forest was a place of wonder and peril. Trees whispered secrets, and the air was filled with the scent of ancient magic. Kael encountered many enchanted creatures, including a talking owl named Aurelius, who offered to guide him. "The path is fraught with challenges," Aurelius hooted. "But trust in yourself and the elements, and you will prevail."

As they journeyed deeper, Kael faced trials that tested his mastery of the elements. He used fire to fend off ice wolves, water to cross a chasm, and earth to calm a raging storm. His bond with the amulet grew stronger with each challenge, and he learned valuable lessons about balance and harmony.

One night, as they camped by a glowing pond, Aurelius told Kael about the Guardian of the Crystal, an ancient dragon named Draconis. The dragon would only give the crystal to one who proved their worth. With resolve, Kael approached the dragon's lair.

Draconis, with scales that shimmered like molten gold, emerged from the shadows. "Why do you seek the Crystal of Elements?" the dragon rumbled. Kael spoke from his heart, "To protect Eldoria from the darkness foretold in the prophecy and to ensure that magic remains a force for good."

The dragon's eyes gleamed with approval. "Very well, young sorcerer. Show me the strength of your heart and the balance of your mind." In a series of elemental trials, Kael combined his power with the amulet to create harmonious spells, embodying the unity of the elements.

Satisfied with Kael's mastery and sincerity, Draconis granted him the Crystal of Elements. With the crystal in hand, Kael returned to Eldoria, where the darkness had begun to spread. Placing the crystal at the heart of the kingdom, he used his magic to amplify its power, banishing the darkness and restoring light and harmony.

The kingdom rejoiced, and Kael was celebrated as a hero. With Elira's guidance, he continued to study and protect Eldoria, ensuring that the balance of magic was preserved. His journey had not only saved the kingdom but also deepened his understanding of the true nature of his powers.

Kael's bravery became the stuff of legend, inspiring future generations of sorcerers. The Crystal of Elements remained a symbol of unity and strength, a reminder of the power that lies within a balanced heart and mind.

And so, the kingdom of Eldoria thrived, its people living in harmony with the magic that flowed through their land. Kael's name was remembered with reverence, a testament to the enduring spirit of courage, wisdom, and the eternal quest for knowledge that defines the true essence of magic.`,

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