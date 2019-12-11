import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import PreviewScreen from '../screens/PreviewScreen';

const ComicsNavigator = createStackNavigator(
  {
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
          title: 'XKCD App',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }),
    },
    PreviewScreen: {
        screen: PreviewScreen,
        navigationOptions: ({ navigation }) => ({
          title: `${navigation.getParam('title')}`,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }),
    }
  }
);

export default createAppContainer(ComicsNavigator);

