import { NavigationContainer } from '@react-navigation/native';
import Comanda from './screens/comanda';
import Login from './screens/login';
import Produtos from './screens/produtos';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './context/AuthContext';
import SignUp from './screens/signUp';

// Importação do stack navigator do React Native Navigation
const Stack = createNativeStackNavigator();

// Definição do componente principal da aplicação
export default function App() { 
  return (
    <NavigationContainer>
      <AuthProvider>
      <Stack.Navigator screenOptions={ {headerShown: false} }>
        <Stack.Screen name="Home" component={Login}/>
        <Stack.Screen name="Comanda" component={Comanda}/>
        <Stack.Screen name="Produtos" component={Produtos}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
      </Stack.Navigator>
      </AuthProvider>
  </NavigationContainer>
  );
}
