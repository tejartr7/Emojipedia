import React from "react";
import Entry from "./Entry";
import emojipedia from "../emoji";
import Footer from "./footer";
import Header from "./header";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      <h1>
        <span>Emojipedia😉</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
      <Footer />
    </div>
  );
}

export default App;
