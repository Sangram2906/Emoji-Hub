import React, { useState } from "react";
import EmojiPicker, { Emoji } from "emoji-picker-react";

// const URL = 'https://emojihub.yurace.pro/api/all';
const App = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("");

  function onClick(emojiData) {
    setSelectedEmoji(emojiData.unified);
  }
  useState(() => {
    async function getByText(){
      const response = await fetch(URL);
      const data = await response.json();
      setSelectedEmoji(data);
    }

    getByText();
  })

  return (
    <div>
      <h2>Emoji Hub</h2>
      <div>
        {selectedEmoji ? <Emoji unified={selectedEmoji} size={62} /> : null}
      </div>

      <EmojiPicker onEmojiClick={onClick} />
    </div>
  );
};

export default App;
