import React from 'react'
// import MultiChatSocket , MultiChatWindow , useMultiChatLogin from react-chat-engine-advanced
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

function ChatsPage(props) {
  const chatProps = useMultiChatLogic(  'd9d44b6a-2fa6-4fc0-9089-64462cbafec8'  , props.user.username, props.user.secret)
  return (
    <div style={{height  :'100vh' }}   >
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps}  style={{height:'100%'}}   />
    </div>
  )
}

export default ChatsPage