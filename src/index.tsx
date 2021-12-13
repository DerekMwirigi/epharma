import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { PharmacyList } from './screens/pharmacies/List';
import { HelpIndex } from './screens/help/Index';
import { UserProfile } from './screens/profile/Index';
import { SignUp } from './screens/auth/SignUp';
import { SignIn } from './screens/auth/SignIn';
import { Splash } from './screens/splash/Splash';
import { theme } from './core/theme';
import { PharmacyDetails } from './screens/pharmacies/Details';

const StarpupStack = createStackNavigator({
  // splash 
  Splash: {
    screen: Splash,
    navigationOptions: {
      headerShown: false
    }
  }
});

const AuthStack = createStackNavigator({
  // signup 
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerShown: false
    }
  },
   // signin 
   SignIn: {
    screen: SignIn,
    navigationOptions: {
      headerShown: false
    }
  },
}, {
  initialRouteName: 'SignUp',
});

const AppStack = createStackNavigator(
  {
    // pharmacy list 
    PharmacyList: {
      screen: PharmacyList,
      navigationOptions: {
        headerShown: true,
        title: 'Pharmacies',
        headerTintColor: theme.colors.white,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
      }
    },
    // pharmacy details 
    PharmacyDetails: {
      screen: PharmacyDetails,
      navigationOptions: {
        headerShown: true,
        title: 'Pharmacy Info',
        headerTintColor: theme.colors.white,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
      }
    },
    // help
    HelpIndex: { screen: HelpIndex, navigationOptions: { title: 'Help' } },
    // user profile
    UserProfile: {
      screen: UserProfile, navigationOptions: {
        headerShown: true,
        title: 'Profile',
        headerTintColor: theme.colors.white,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTransparent: true
      }
    },
  }, {
    initialRouteName: 'PharmacyList',
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Starpup: StarpupStack,
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'Starpup',
    },
  ),
);