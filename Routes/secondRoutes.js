import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '../components/loggedIn/home';
import Profile from '../components/loggedIn/profile';
import Location from '../components/loggedIn/location';
import Settings from '../components/loggedIn/settings';
import HowTo from '../components/loggedIn/howTo';

const HomeRoute = () => <Home />;

const LocationRoute = () => <Location />;

const HowToRoute = () => <HowTo />;

const ProfileRoute = () => <Profile />;

const SettingsRoute = () => <Settings/>;

const SecondRoutes = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home'},
    { key: 'location', title: 'Location', icon: 'map-marker-radius-outline' },
    { key: 'howTo', title: 'How to...', icon: 'comment-question-outline' },
    { key: 'profile', title: 'Profile', icon: 'tooltip-account'},
    { key: 'settings', title: 'Settings', icon: 'cog-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    location: LocationRoute,
    howTo: HowToRoute,
    settings: SettingsRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      // style={{ borderColor: '#d649b7' }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default SecondRoutes;