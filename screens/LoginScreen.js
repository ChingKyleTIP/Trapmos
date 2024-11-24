import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Icon from "react-native-vector-icons/FontAwesome";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      // Sign in user with Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      navigation.replace("Home");
    } catch (error) {
      alert(`Login Failed: ${error.message}`);
    }
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={require("../images/trapmosLogin.png")} style={styles.logo} />
      </View>
      <View style={styles.formSection}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={styles.tabTextActive}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab} onPress={handleSignUp}>
            <Text style={styles.tabTextInactive}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="#a5a5a5" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#a5a5a5"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#a5a5a5" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#a5a5a5"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b2a38",
  },
  topSection: {
    height: "25%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  formSection: {
    flex: 1,
    backgroundColor: "#1b2a38",
    alignItems: "center",
    paddingTop: 20,
  },
  tabContainer: {
    flexDirection: "row",
    width: "80%",
    marginBottom: 30,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#dedede",
  },
  activeTab: {
    backgroundColor: "#3ca25f",
  },
  tabTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  tabTextInactive: {
    color: "#1b2a38",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#324a5e",
    borderRadius: 25,
    height: 50,
    width: "80%",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    paddingLeft: 40,
    color: "#fff",
  },
  inputIcon: {
    position: "absolute",
    left: 10,
  },
  loginButton: {
    backgroundColor: "#d3d3d3",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginVertical: 15,
  },
  loginButtonText: {
    color: "#1b2a38",
    fontWeight: "bold",
  },
});

