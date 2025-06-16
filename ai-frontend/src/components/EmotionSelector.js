import { useState } from "react";

export default function EmotionSelector({ onGenerate }) {
  const allEmotions = [
    { mood: "Happy", emoji: "😊" },
    { mood: "Sad", emoji: "😢" },
    { mood: "Romantic", emoji: "❤️" },
    { mood: "Energetic", emoji: "⚡" },
    { mood: "Calm", emoji: "🌿" },
    { mood: "Dreamy", emoji: "💭" },
    { mood: "Angry", emoji: "😠" },
    { mood: "Chill", emoji: "😎" },
    { mood: "Excited", emoji: "🤩" },
    { mood: "Lonely", emoji: "🥺" },
    { mood: "Inspired", emoji: "🌟" },
    { mood: "Confused", emoji: "😕" },
    { mood: "Hopeful", emoji: "🙏" },
    { mood: "Bored", emoji: "🥱" },
    { mood: "Motivated", emoji: "🔥" },
    { mood: "Grateful", emoji: "💖" },
    { mood: "Heartbroken", emoji: "💔" },
    { mood: "Peaceful", emoji: "🕊️" },
    { mood: "Playful", emoji: "😜" },
    { mood: "Anxious", emoji: "😬" },
    { mood: "Surprised", emoji: "😮" },
    { mood: "Determined", emoji: "🏋️" },
    { mood: "Melancholy", emoji: "🎻" },
    { mood: "Nostalgic", emoji: "📻" },
    { mood: "Powerful", emoji: "💪" },
  ];

  const [filter, setFilter] = useState("");

  const filteredEmotions = allEmotions.filter((e) =>
    e.mood.toLowerCase().includes(filter.toLowerCase())
  );

  const handleClick = (emotion) => {
    onGenerate(emotion);
  };

  return (
    <div className="bg-white  rounded-2xl p-10 w-full max-w-6xl mx-auto mb-10">
        <p className="text-center text-gray-600 text-lg mb-8">
        Pick a mood and let AI create lyrics tailored to how you feel.
        </p>


      <input
        type="text"
        placeholder="Filter moods..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-8 w-full px-5 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <div className="flex flex-wrap justify-center gap-5">
        {filteredEmotions.map(({ mood, emoji }) => (
          <button
            key={mood}
            onClick={() => handleClick(mood)}
            className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full text-lg font-medium flex items-center gap-2 hover:bg-purple-200 transition-all shadow-sm"
          >
            <span className="text-xl">{emoji}</span>
            <span>{mood}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
