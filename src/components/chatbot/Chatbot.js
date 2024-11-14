import React, { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react"; // Importando os componentes do Chakra UI
import '../Chatbot/Chatbot.css';


function Chatbot() {
  const [messages, setMessages] = useState([
    { text: <strong><h1>Olá! Como posso te ajudar hoje PDev?</h1></strong>, sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: "bot" },
      ]);
    }, 1000); // 1000ms 
  };

  const getBotResponse = (message) => {
    
    const lowerMessage = message.toLowerCase();

    
    if (lowerMessage.includes("olá") || lowerMessage.includes("oi")) {
      return "Oi! Como posso te ajudar?";
    } else if (lowerMessage.includes("ajuda")) {
      return <a>Claro! Em que posso te ajudar? Se você precisar de informações ou tiver dúvidas mas pessoais/técnicas, entre em contato com o nosso suporte pelo <strong><a href='https://ajuda-projetodesenvolve.freshdesk.com/support/login'>LINK.</a></strong></a>;
    } else if (lowerMessage.includes("quem é você") || lowerMessage.includes("quem é")) {
      return "Eu sou um chatbot criado para te ajudar com informações e dúvidas. Como posso te ajudar hoje?";
    } else if (lowerMessage.includes("tempo") || lowerMessage.includes("clima")) {
      return "Infelizmente, não consigo acessar informações sobre o tempo, mas você pode verificar a previsão no seu aplicativo de clima favorito!";
    } else if (lowerMessage.includes("problema")) {
      return "Lamento que você esteja enfrentando problemas. Pode me contar mais sobre o que está acontecendo para que eu possa tentar ajudar?";
    } else if (lowerMessage.includes("tchau") || lowerMessage.includes("adeus")) {
      return "Foi um prazer conversar com você! Até logo!";
    } else if (lowerMessage.includes("como você está")) {
      return "Eu sou um bot, então não tenho sentimentos, mas obrigado por perguntar! E você, como está?";
    } else {
      return "Desculpe, não entendi bem. Você poderia reformular a pergunta ou ser mais específico?";
    }
  };

  return (
    <Box className="chatbot-container" p="4" boxShadow="md" borderRadius="md">
      <Box className="chatbox" mb="4">
        {messages.map((msg, index) => (
          <Box key={index} className={msg.sender} p="2" mb="2" bg={msg.sender === "user" ? "blue.100" : "gray.200"} borderRadius="md">
            {msg.text}
          </Box>
        ))}
      </Box>
      <Box display="flex" alignItems="center">
        <Input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && handleSend()} // Usando onKeyDown ao invés de onKeyPress
          placeholder="Digite sua mensagem..."
          size="sm"
          mr="2"
          style={{borderColor: 'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF'}}
        />
        <Button style={{fontSize: 13 ,background: 'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF'}} onClick={handleSend} colorScheme="blue" size="sm">Enviar</Button>
      </Box>
    </Box>
  );
}

export default Chatbot;
