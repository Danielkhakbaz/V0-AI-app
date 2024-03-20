"use client";

import { useChat } from "ai/react";
import { Input } from "components/input/input";
import { Button } from "components/button/button";

const AskAIPage = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <form className="grid gap-4 md:gap-6" onSubmit={handleSubmit}>
        <Input
          id="question"
          placeholder="Type something..."
          value={input}
          onChange={handleInputChange}
        />
        <Button type="submit">Ask AI</Button>
      </form>
      <div className="p-4">
        <ul>
          {messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === "user" ? "User: " : "AI: "}
              {m.content}
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default AskAIPage;
