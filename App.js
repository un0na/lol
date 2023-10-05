import { Text, View, StatusBar } from 'react-native';
import Cat from './components/Cat'

const App = () => {
  return (
    <View>
      <Text>Catcafe:</Text>
      <Cat name="Vasya" hunger={0.5} thirst={0.5} />
      <Cat name="Fedya" hunger={0.4} thirst={0.6} />
      <Cat name="Masha" hunger={0.6} thirst={0.4} />
      <StatusBar hidden></StatusBar>
    </View>
  )
}

export default App