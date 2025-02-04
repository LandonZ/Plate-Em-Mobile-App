import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './welcomeScreen';
import LoginScreen from './loginScreen';
// import OnboardingScreen from './OnboardingScreen';
import login from './Login';
import ProfileForm from './SetupProfile/ProfileForm'
import AgeSelector from './SetupProfile/AgeSelector'
import GetName from './SetupProfile/GetName';
import GetSex from './SetupProfile/getSex';
import GetWeight from './SetupProfile/getWeight';
import GetHeight from './SetupProfile/getHeight';
import GetHealthGoal from './SetupProfile/GetHealthGoal';
import GetDietaryRestrictions from './SetupProfile/GetDietaryRestrictions';
import GetWorkoutFrequency from './SetupProfile/GetWorkoutFreq';
import ConfirmationPage from './SetupProfile/ConfirmationPage';
import BreakfastScreen from './BreakfastScreen';
import LunchScreen from './LunchScreen';
import DinnerScreen from './DinnerScreen';
import HomeScreen from './HomeScreen';
import AIChatBotScreen from './AIChatBotScreen';
import ProfilePage from './ProfilePage';
import J2MenuPage from './J2MenuPage';


const Stack = createNativeStackNavigator();

export default function App() {

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="ProfileForm">
          {props => <ProfileForm {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>
        <Stack.Screen name="AgeSelector">
          {props => <AgeSelector {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>
        <Stack.Screen name="GetSex">
          {props => <GetSex {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>
        <Stack.Screen name="GetWeight">
          {props => <GetWeight {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>
        <Stack.Screen name="GetHeight">
          {props => <GetHeight {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>
        <Stack.Screen name="GetHealthGoal">
          {props => <GetHealthGoal {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>
        <Stack.Screen name="GetDietaryRestrictions">
          {props => <GetDietaryRestrictions {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>
        <Stack.Screen name="GetWorkoutFrequency">
          {props => <GetWorkoutFrequency {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>
        <Stack.Screen name="ConfirmationPage">
          {props => <ConfirmationPage {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>
        <Stack.Screen name="BreakfastScreen">
          {props => <BreakfastScreen {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>
        <Stack.Screen name="LunchScreen">
          {props => <LunchScreen {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>
        <Stack.Screen name="DinnerScreen">
          {props => <DinnerScreen {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>
        <Stack.Screen
          name="HomeScreen"
        >
          {props => <HomeScreen {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>

        <Stack.Screen
          name="AIChatBotScreen"
        >
          {props => <AIChatBotScreen {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>

        <Stack.Screen
          name="ProfilePage"
        >
          {props => <ProfilePage {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>

        <Stack.Screen
          name="J2MenuPage"
        >
          {props => <J2MenuPage {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
