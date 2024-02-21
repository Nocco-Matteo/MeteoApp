import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native';
import HomeComponent from '../Views/Home/HomeComponent';
import { DetailsComponent } from '../Views/Details/DetailsComponent';
import { Badge } from '../Models/MeteoModel';
import { RootStackParamList } from '../Models/NavigatorModel';



const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
    return (
        <NavigationContainer>
                <Stack.Navigator initialRouteName="HomeComponent" screenOptions={{headerShown: false}}>
                        <Stack.Screen name="HomeComponent" component={HomeComponent} />
                        <Stack.Screen name="DetailsComponent" component={DetailsComponent} />
                </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;