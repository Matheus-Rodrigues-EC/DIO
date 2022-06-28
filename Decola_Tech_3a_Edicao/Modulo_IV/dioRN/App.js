import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, SafeAreaView} from 'react-native';

const colorGitHub = '#010409';
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/68609506?v=4';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Content}>
        <StatusBar style="auto" backgroundColor={colorGitHub} barStyle="light-content" />
        <Image source={{uri: imageProfileGitHub}} style={styles.Avatar} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // column
    flex: 1, // expandir para a tela interia
    backgroundColor: colorGitHub, // define  a cor de fundo
    justifyContent: 'center',
    //flexDirection: 'row', // Seleciona a direção de organização da tela
  },
  Content: {
    alignItems: 'center',
  },
  Avatar: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 100,
    borderWidth: 3,
    borderColor:'white',
  },

});
