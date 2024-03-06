import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "../constants/icons";
import { useRouter } from "expo-router";
import { FONT } from "../constants/theme";

const NavBar = ({ activePage, style }) => {
  const router = useRouter();

  const handleNotify = () => {
      router.push('/notifycation')
  }

  const handleHome = () => {
      router.push('/home')
  }

  const handleUser = () => {
      router.push('/user')
  }
  
  return (
    <View style={[styles.container, style]}>
        <TouchableOpacity onPress={handleHome}>
          <View style={styles.iconContainer}>
              <Image
                source={activePage === "home" ? icons.homeActive : icons.home}
                style={styles.icon}
              />
              <Text style= {styles.text}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNotify}>
      <View style={styles.iconContainer}>
          <Image
            source={activePage === "notification" ? icons.bellActive : icons.bell}
            style={styles.icon}
          />
          <Text style= {styles.text}>Notification</Text>
      </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleUser}>
      <View style={styles.iconContainer}>
          <Image
            source={activePage === "user" ? icons.userActive : icons.user}
            style={styles.icon}
          />
          <Text style= {styles.text}>User</Text>
      </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff", // Add your desired background color
    paddingVertical: 10,
  },
  iconContainer: {
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 8,
  },
  text: {
    fontFamily: FONT.regular,
    fontSize: 16,
  }
};

export default NavBar;
