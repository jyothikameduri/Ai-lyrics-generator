import { useState } from "react";
import EmotionSelector from "../components/EmotionSelector";
import { generateLyrics } from "../api/openai";

export default function HomePage() {
  const [lyrics, setLyrics] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async (emotion) => {
    setSelectedMood(emotion);
    setLyrics(""); // clear previous lyrics
    setError("");  // clear previous error
    setLoading(true);

    const result = await generateLyrics(emotion);
    console.log("Generated lyrics:", result);

    if (result.startsWith("API Error") || result.startsWith("Oops")) {
      setError(result);
      setLyrics("");
    } else {
      setLyrics(result);
    }

    setLoading(false);
  };

  const moodClassMap = {
    Happy: "happy-bg animated-bg",
    Sad: "sad-bg animated-bg",
    Romantic: "romantic-bg animated-bg",
    Energetic: "energetic-bg animated-bg",
    Calm: "calm-bg animated-bg",
    Dreamy: "dreamy-bg animated-bg",
    Angry: "angry-bg animated-bg",
    Chill: "chill-bg animated-bg",
    Excited: "excited-bg animated-bg",
    Lonely: "lonely-bg animated-bg",
    Inspired: "inspired-bg animated-bg",
    Confused: "confused-bg animated-bg",
    Hopeful: "hopeful-bg animated-bg",
    Bored: "bored-bg animated-bg",
    Motivated: "motivated-bg animated-bg",
    Grateful: "grateful-bg animated-bg",
    Heartbroken: "heartbroken-bg animated-bg",
    Peaceful: "peaceful-bg animated-bg",
    Playful: "playful-bg animated-bg",
    Anxious: "anxious-bg animated-bg",
    Surprised: "surprised-bg animated-bg",
    Determined: "determined-bg animated-bg",
    Melancholy: "melancholy-bg animated-bg",
    Nostalgic: "nostalgic-bg animated-bg",
    Powerful: "powerful-bg animated-bg",
  };

  const backgroundClass = moodClassMap[selectedMood] || "bg-white";

  return (
    <div className={`min-h-screen transition-all duration-700 ${backgroundClass}`}>
      <div className="text-center px-4 py-8">
        <EmotionSelector onGenerate={handleGenerate} />

        <div className="mt-6 bg-gray-100 p-4 rounded-md max-w-2xl mx-auto shadow-lg">
          <h3 className="text-lg font-semibold mb-2">🎼 Your Song is Ready</h3>

          {loading ? (
            <p className="text-purple-500 animate-pulse">
              ✨ Generating lyrics for "<strong>{selectedMood}</strong>"...
            </p>
          ) : error ? (
            <p className="text-red-500 whitespace-pre-wrap">{error}</p>
          ) : (
            <p className="text-gray-700 whitespace-pre-wrap">
              {lyrics || "🎵 Select a mood to get started!"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
