import { Text, View, StatusBar } from 'react-native';
import Cat from './components/Cat'
import Hamster from './components/Hamster'

const App = () => {
  return (
    <View>
      <Text>Catcafe:</Text>
      <Cat name="Vasya" isHungry />
      <Cat name="Fedya" isHungry />
      <Cat name="Masha" isHungry />
      <Hamster name="Sanya" isHungry color="green" />
      <Hamster name="Petya" isHungry color="red" />
      <Hamster name="Gosha" isHungry color="blue" />
      <StatusBar hidden></StatusBar>
    </View>
  )
}

export default App