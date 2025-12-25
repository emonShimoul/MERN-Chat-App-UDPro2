import { useEffect } from "react";
import { useChartStore } from "../store/useChatStore"


const ChatContainer = () => {
  const {messages, getMessages, isMessagesLoading, selectedUser} = useChartStore();

  useEffect(() => {
    getMessages(selectedUser._id);
  },[selectedUser._id, getMessages]);

  if(isMessagesLoading) return <div>Loading...</div>

  return (
    <div>ChatContainer</div>
  )
}

export default ChatContainer;