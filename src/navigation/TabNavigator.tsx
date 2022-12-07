import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile, Feed, Home, Settings, Search } from '../screens';
import { RouteName } from './RouteName';
import { RootStackParamList } from './RootStackParamList';

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={RouteName.Home} component={Home} />
      <Tab.Screen name={RouteName.Profile} component={Profile} />
      <Tab.Screen name={RouteName.Feed} component={Feed} />
      <Tab.Screen name={RouteName.Settings} component={Settings} />
      <Tab.Screen name={RouteName.Search} component={Search} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
