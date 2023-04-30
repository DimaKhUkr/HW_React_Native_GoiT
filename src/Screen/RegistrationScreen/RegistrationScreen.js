import {
  ImageBackground,
  TextInput,
  Image,
  Text,
  View,
  StyleSheet,
} from "react-native";
import bg from "../../assets/img/PhotoBG.jpg";
import { Dimensions } from "react-native";
import { useState } from "react";

const { width } = Dimensions.get("window");

export default function RegistrationScreen() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onName = (name) => setName(name);
  const onPassword = (password) => setPassword(password);
  const onMail = (email) => setEmail(email);

  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.photo}>
          <Image
            style={styles.addPhoto}
            source={require("../../assets/img/addPhoto.jpg")}
          />
        </View>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Войти</Text>
        </View>
        <TextInput
          value={name}
          onChangeText={onName}
          placeholder="Login"
          style={styles.input}
        />
        <TextInput
          value={email}
          onChangeText={onMail}
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={onPassword}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 550,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        backgroundColor: "#e9e9e9",
      },
      android: {
        backgroundColor: "#fff",
      },
    }),
  },
  image: {
    height: "100%",
    width: width,
    flex: 1,
    justifyContent: "center",
  },
  titleBox: {
    marginBottom: 30,
    marginTop: 90,
  },
  title: {
    fontFamily: "Roboto_500Medium",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
  },
  input: {
    width: 343,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    backgroundColor: "#f6f6f6",
    marginBottom: 10,
    borderRadius: 8,
    shadowOpacity: 0.25,
    shadowColor: "#000",
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  photo: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateY: -70 }, { translateX: -55 }],
    zIndex: 100,
  },
  addPhoto: {
    position: "absolute",
    width: 25,
    height: 25,
    right: -12.5,
    bottom: 14,
    borderRadius: 13,
  },
});
