'use client';
/*eslint-disable*/

import {
  Flex,
  List,
  ListItem,
  Text,
  useColorModeValue,
  IconButton,
  Box,
} from '@chakra-ui/react';
import Link from '@/components/link/Link';
import { FiHelpCircle } from 'react-icons/fi'; // Ícone de suporte
import { useState, useRef } from 'react';
import { motion } from 'framer-motion'; // Importando framer-motion para animações
import Chatbot from '../Chatbot/Chatbot';

export default function Footer() {
  const textColor = useColorModeValue('gray.500', 'white');
  
  // Estado para controlar a visibilidade do chatbot
  const [isChatbotVisible, setChatbotVisible] = useState(false);

  // Referência do botão de ajuda
  const buttonRef = useRef(null);

  // Função para alternar a visibilidade do chatbot
  const toggleChatbot = () => {
    setChatbotVisible((prev) => !prev);
  };

  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: 'column',
        xl: 'row',
      }}
      alignItems="center"
      justifyContent="space-between"
      px={{ base: '30px', md: '50px' }}
      pb="30px"
    >
      <Text
        color={textColor}
        fontSize={{ base: 'xs', md: 'sm' }}
        textAlign={{
          base: 'center',
          xl: 'start',
        }}
        fontWeight="500"
        mb={{ base: '10px', xl: '0px' }}
      >
        &copy; {new Date().getFullYear()}
        <Text as="span" fontWeight="500" ms="4px">
          Projeto Desenvolve Coach, todos os direitos reservados.
        </Text>
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: '10px',
            md: '44px',
          }}
        >
          
        </ListItem>
      </List>

      {/* Botão para abrir/fechar o chatbot no canto inferior direito */}
      <IconButton
        style={{background: 'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF'}} // Cor de fundo do botão
        ref={buttonRef} // Referência ao botão de ajuda
        icon={<FiHelpCircle />}
        aria-label="Abrir Suporte"
        onClick={toggleChatbot}
        colorScheme="blue"
        size="lg"
        isRound
        position="fixed"  // Fixa o botão na tela
        bottom="20px"     // Define a posição do botão a partir da base da tela
        right="20px"      // Define a posição do botão a partir do lado direito da tela
        zIndex="20"       // Garante que o botão ficará acima de outros elementos
      />

      {/* Renderiza o chatbot apenas se isChatbotVisible for true */}
      {isChatbotVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }} // Começa com opacidade 0 e deslocado
          animate={{ opacity: 1, y: 0 }}   // Finaliza com opacidade 1 e posição correta
          exit={{ opacity: 0, y: 20 }}    // Quando o chatbot sai, ele volta para baixo
          transition={{ duration: 0.5 }}  // Transição suave de 0.5 segundos
        >
          <Box
            position="fixed"
            bottom="80px"   // Posiciona o chatbot logo acima do botão de suporte
            right="20px"
            width="300px"    // Largura do chatbot
            maxHeight="400px" // Altura do chatbot
            bg="white"
            borderRadius="md"
            boxShadow="lg"
            overflow="hidden"
            zIndex="10"       // Fica abaixo do botão
          >
            <Chatbot />
          </Box>
        </motion.div>
      )}
    </Flex>
  );
}
