# 🚗 CarBrandApp

Aplicativo mobile desenvolvido com **React Native + TypeScript**, que permite ao usuário explorar marcas e modelos de carros de forma simples, rápida e intuitiva. Ideal para quem deseja consultar informações automotivas de forma prática!

## 📱 Funcionalidades

- Listagem de marcas de carros
- Navegação entre marcas e modelos
- Visualização dos modelos por marca
- Autenticação de usuário (login e logout)
- Persistência de dados com AsyncStorage
- Layout responsivo e otimizado para dispositivos móveis

## 🛠️ Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.dev/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/)
- Estilização com `styled-components`

## 🔐 Autenticação

O sistema possui um fluxo de autenticação simples:
- O usuário faz login com suas credenciais.
- Os dados do usuário são armazenados de forma segura usando `AsyncStorage`.
- Ao reiniciar o app, o login é mantido automaticamente.

## 🚀 Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/CarBrandApp.git
   
2. Acesse a pasta do projeto:
   ```bash
   cd CarBrandApp

3. Instale as dependências:
   ```bash
   npm install

4. Inicie o projeto:
   ```bash
   npx expo start

📄 Licença
Este projeto está sob a licença MIT.
