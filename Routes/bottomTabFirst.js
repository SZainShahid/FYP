import * as React from 'react';
import { BottomNavigation} from 'react-native-paper';
import SignUp from '../components/signInsignUp/signup';
import SignIn from '../components/signInsignUp/signin';
import { View } from 'react-native';

const RegisterRoute = () => <SignUp />;

const LoginRoute = () => <SignIn />;

export default function BottomTabFirst(ifsigned2) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'signUp', title: 'Register', icon: 'account-plus-outline' },
    { key: 'signIn', title: 'Login', icon: 'account-circle-outline' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    signUp: RegisterRoute,
    signIn: LoginRoute
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      ></ BottomNavigation>
  );
};