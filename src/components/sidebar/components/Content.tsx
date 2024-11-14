'use client';
// chakra imports
import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { IoMdPerson } from 'react-icons/io';
import { MdOutlineManageAccounts } from 'react-icons/md';
import Image from 'next/image';
import Logo from '../components/assets/Logo.jpg';
import importedCourses from './api.json'; // Renomeado para evitar conflito

// Atualiza o tipo Course para aceitar 'contexto' em vez de 'description'
interface Course {
  name: string;
  link: string;
  contexto: string; // Usando 'contexto' conforme está no JSON
}

interface SidebarContentProps {
  routes?: any[];
  setApiKey?: (key: string) => void;
  handleCoursePresentation: (contexto: string) => void; // Adiciona a função como prop
}

function SidebarContent(props: SidebarContentProps) {
  const [cursos, setCursos] = useState<Course[]>([]);
  const gray = useColorModeValue('gray.500', 'white');

  useEffect(() => {
    setCursos(importedCourses); // Define o JSON no estado cursos
  }, []);

  return (
    <Box>
      <a href="https://apps.projetodesenvolve.online/authn/login">
        <Image src={Logo} alt="Logo" style={{ maxWidth: "200px", margin: 25 }} />
      </a>

      <Flex align="center" marginTop={10}>
        <Icon as={IoMdPerson} width="24px" height="24px" color="black" me="12px" opacity="0.9" />
        <a href="https://apps.projetodesenvolve.online/learner-dashboard/">
          <Text color="black" fontWeight="500" fontSize="sm" opacity="0.9">
            Página Inicial
          </Text>
        </a>
      </Flex>

      <Flex align="center" w="100%" marginTop={5}>
        <Icon as={MdOutlineManageAccounts} width="24px" height="24px" color="black" me="12px" opacity="0.9" />
        <a href="https://apps.projetodesenvolve.online/account/">
          <Text color="black" fontWeight="500" fontSize="sm" opacity="0.9">
            Configurar Perfil
          </Text>
        </a>
      </Flex>
      <Box>
      {cursos.map((course, index) => (
        <Flex key={index} mb="3">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width="100%" fontSize="sm">
              {course.name}
            </MenuButton>
            <MenuList>
              <MenuItem as="a" href={course.link} target="_blank" rel="noopener noreferrer">
                Ir para o curso
              </MenuItem>
              <MenuItem onClick={() => props.handleCoursePresentation(course.contexto)}>
                Apresentação Curso
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ))}
      </Box>

    </Box>
  );
}

export default SidebarContent;
