import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  Image,
  Pressable, 
  View, 
  SafeAreaView, 
  Linking
} from 'react-native';

const colorGitHub = '#010409';
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/68609506?v=4';
const linkGitHub = 'https://github.com/Matt-Rodrigues-EC';

export default function App() {

  const hadlePressGoToGitHub = async () => {
    console.log('verificando link');
    const res = await Linking.canOpenURL(linkGitHub);
    if(res){
      console.log('Link Aprovado');
      console.log('Abrindo o link');
      await Linking.openURL(linkGitHub);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <StatusBar style="auto" backgroundColor={colorGitHub} barStyle="light-content" />
        <Image 
          accessibilityLabel='Foto de perfil de Matt Rodrigues'
          source={{uri: imageProfileGitHub}} 
          style={styles.avatar} 
        />
        <Text 
          accessibilityLabel='Nome: Matt Rodrigues'
          style={[styles.defaultText, styles.name]}>
          Matt Rodrigues
        </Text>
        <Text
          accessibilityLabel='Nickname: Matt-Rodrigues-EC'
          style={[styles.defaultText, styles.nickname]}>
          Matt-Rodrigues-EC
        </Text>
        <Text 
          accessibilityLabel='Description: | Developer | JavaScript, ReactJS, PostgreSQL |'
          style={[styles.defaultText, styles.description]}>
          | Developer | JavaScript, ReactJS, PostgreSQL |
        </Text>
      </View>
      <Pressable onPress={hadlePressGoToGitHub}>
        <View style={styles.button}>
          <Text style={[styles.defaultText, styles.textButton]}>
            Open in GitHub!
          </Text>
        </View>
      </Pressable>
        
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
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 100,
    borderWidth: 3,
    borderColor:'white',
  },
  defaultText:{
    color: 'white',
  },
  name:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  nickname:{
    fontSize: 18,
    color: 'gray',
  }, 
  description:{
    fontSize: 14,
  },
  button: {
    backgroundColor: 'gray',
    borderRadius: 10, 
    padding: 20,
    alignItems:'center',
  },
  textButton:{
    fontSize: 14,
    fontWeight: 'bold',
  },

});
