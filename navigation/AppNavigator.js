import React from 'react';
import { Platform } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TabBarIcon from '../components/TabBarIcon';

// export default createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator
// });

const AppNavigator = () => {
  return(
    <Router>
      <Scene key="root">
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
          hideNavBar
        >
          <Scene key="hm" 
            title="Home" 
            icon={({ focused }) => (
              <TabBarIcon
                focused={focused}
                name={
                  Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
                }
              />
            )} 
            hideNavBar>
            <Scene 
                key="home"
                component={HomeScreen}
                title="Home"
              />

              <Scene
                key="modal"
                direction="vertical"
                component={SettingsScreen}
                title="Modal"
                hideNavBar
              />

          </Scene>

          <Scene key="st" title="Settings" 
          icon={({ focused }) => (
            <TabBarIcon
              focused={focused}
              name={
                Platform.OS === 'ios'
                  ? `ios-options${focused ? '' : '-outline'}`
                  : 'md-options'
              }
            />
          )} 
          hideNavBar>
            <Scene
              key="settings"
              component={SettingsScreen}
              title="Settings"
            />
          </Scene>
        </Scene>
      </Scene>
    </Router>);
}

export default AppNavigator;