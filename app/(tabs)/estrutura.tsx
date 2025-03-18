import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">estrutura do projeto</ThemedText>
      </ThemedView>
      <ThemedText>- **expo**: Pode conter configurações específicas do Expo.</ThemedText>
      <ThemedText>  **app**: Provavelmente o diretório principal onde o código do aplicativo reside, incluindo telas e navegação.</ThemedText>
      <ThemedText>- **assets**: Armazena recursos estáticos como imagens, ícones e fontes.</ThemedText>
      <ThemedText>- **components**: Contém componentes reutilizáveis da interface do usuário.</ThemedText>
      <ThemedText>- **constants**: Armazena valores constantes, como strings ou configurações que não mudam frequentemente.</ThemedText>
      <ThemedText>- **hooks**: Contém hooks personalizados do React para reutilização de lógica.</ThemedText>
      <ThemedText>- **node_modules**: Contém todas as dependências do projeto instaladas via npm ou yarn.</ThemedText>
      <ThemedText>- **scripts**: Pode conter scripts personalizados para automatizar tarefas.</ThemedText>
      <ThemedText>- **.gitignore**: Especifica quais arquivos e diretórios o Git deve ignorar.</ThemedText>
      <ThemedText>- **app.json**: Configurações do aplicativo para o Expo.</ThemedText>
      <ThemedText>- **expo-env.d.ts**: Arquivo de definição de tipos para ambiente Expo.</ThemedText>
      <ThemedText>- **package-lock.json**: Mantém o controle exato das versões das dependências instaladas.</ThemedText>
      <ThemedText>- **package.json**: Contém metadados do projeto e lista de dependências.</ThemedText>
      <ThemedText>- **README.md**: Documentação do projeto, geralmente com instruções de uso.</ThemedText>
      <ThemedText>- **tsconfig.json**: Configurações do TypeScript para o projeto.</ThemedText>
 
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
