import React from "react";
import { Button, Text, View, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/user";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
// function User() {
//   const user = useSelector((state) => state.user.value)
//   const dispatch = useDispatch();

//   return (
//     <View>
//         <Text>
//             user name {user.name}
//         </Text>
//         <Text>
//             user age {user.age}
//         </Text>
//         <Text>
//             user email {user.email}
//         </Text>
//         <Button title='login' onPress={()=>{dispatch(login({name:"abc",age:20,email:"email"}))}}></Button>
//         <Button title='logout' onPress={()=>{dispatch(logout())}}></Button>
//     </View>
//   )
// }

const Stack = createStackNavigator();

function User() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureResponseDistance: 100,
        // headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="NewsScreen"
    >
      <Stack.Screen name="UserScreen" component={UserScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

function UserScreen({ navigation }) {
  const user = useSelector((state) => state.user.value);
  return (
    <View>
      <Text>User Screen</Text>
      <Text>{user.name}</Text>
      <Text>{user.age}</Text>
      <Text>{user.email}</Text>
      <Button
        title="login"
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      ></Button>
    </View>
  );
}
function LoginScreen({ navigation }) {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="login"
        onPress={() => {
          dispatch(login({ name: "Hieu", age: 20, email: "email" }));
        }}
      ></Button>
      <Button
        title="logout"
        onPress={() => {
          dispatch(logout());
        }}
      ></Button>
      <Button
        title="sign Up"
        onPress={() => {
          navigation.navigate("SignUpScreen");
        }}
      ></Button>
    </View>
  );
}
function SignUpScreen({ navigation }) {
  return (
    <View>
      <Text>Sign Up Screen</Text>
    </View>
  );
}

export default User;
