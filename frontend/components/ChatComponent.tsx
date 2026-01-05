import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import AttachButton from "./buttons/AttachButton";

const ChatComponent = ({
  handleSend,
}: {
  handleSend: (message: string, file: File | null) => void;
}) => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };
  const handleSendMessage = () => handleSend(message, file);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        // className="bg-white
      >
        <div className="mb-4">
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              const textarea = e.target as HTMLTextAreaElement;
              textarea.style.height = "auto"; // Reset height before recalculating
              textarea.style.height = `${textarea.scrollHeight}px`;
            }}
            onInput={(e) => {
              const textarea = e.target as HTMLTextAreaElement;
              textarea.style.height = "auto"; // Reset height before recalculating
              textarea.style.height = `${textarea.scrollHeight}px`;
            }}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
            style={{ minHeight: "48px", maxHeight: "300px", overflowY: "auto" }}
            className="w-full h-auto p-4 rounded-2xl bg-white backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-gray-800 placeholder-gray-500 resize-none font-sans"
            rows={1}
          />
        </div>

        <AttachButton
          fileName={fileName}
          handleFileChange={handleFileChange}
          setFile={setFile}
          setFileName={setFileName}
        />
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSendMessage}
          disabled={!message.trim() && !file}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          <span>Send</span>
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </motion.button>
      </motion.div>
      s
    </div>
  );
};

export default ChatComponent;
