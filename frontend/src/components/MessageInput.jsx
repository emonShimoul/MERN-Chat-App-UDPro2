import React, { useRef, useState } from 'react'
import { useChatStore } from '../store/useChatStore';

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const {sendMessage} = useChatStore();

  const handleImageChange = () => {};

  const removeImage = () => {};

  const handleSendMessage = () => {};
  
  return (
    <div>MessageInput</div>
  )
}

export default MessageInput