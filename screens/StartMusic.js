import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Animated,
  Easing,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

import GlobalStyles from "../contants/GlobalStyles";
import { getSong } from "../api/musicApi";

function StartMusic({ route }) {
  const navigation = useNavigation();
  const [isPlay, setIsPlay] = useState(false);
  const animation = useState(new Animated.Value(0))[0];
  const [sound, setSound] = useState(null);

  const CallAnimation = () => {
    animation.setValue(0);
    Animated.timing(animation, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start(() => CallAnimation());
  };
  useEffect(() => {
    CallAnimation();
  }, []);
  const RotateData = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  async function playSound() {
    setIsPlay(true);
    await sound.playAsync();
  }

  async function stopSound() {
    setIsPlay(false);
    await sound.pauseAsync();
  }

  function changeHandlerSound() {
    if (isPlay) {
      stopSound();
    } else {
      playSound();
    }
  }

  async function replaySound() {
    await sound.replayAsync();
  }

  function goBackHandler() {
    async function clean() {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
      }
    }
    clean();
    navigation.goBack();
  }

  useEffect(() => {
    async function loadData() {
      const response = await getSong(route.params.idSong);
      const { sound } = await Audio.Sound.createAsync({
        uri: response.data.data["128"],
      });

      setSound(sound);
      setIsPlay(true);
      await sound.playAsync();
    }

    loadData();
  }, []);

  return (
    <View style={styles.rootContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.songDescription}>
          <View style={styles.title}>
            <Text style={styles.nameSong}>{route.params.title}</Text>
            <Text style={styles.nameSinger}>{route.params.author}</Text>
          </View>
          <Pressable style={[styles.viewBtn]} onPress={goBackHandler}>
            <Ionicons name="arrow-back" size={30} color="#fff" />
          </Pressable>
        </View>
        <View style={styles.toolMuic}>
          <Animated.Image
            source={{ uri: route.params.image }}
            style={[
              styles.image,
              isPlay && { transform: [{ rotate: RotateData }] },
            ]}
          />
          <View style={styles.toolButton}>
            <Ionicons name="play-back-circle-outline" size={40} color="#fff" />
            <Ionicons
              name={isPlay ? "pause-circle-outline" : "play-circle-outline"}
              size={60}
              color="#fff"
              onPress={changeHandlerSound}
            />
            <Ionicons
              name="play-forward-circle-outline"
              size={40}
              color="#fff"
            />
          </View>
          <View style={styles.toolPlay}>
            <Text style={{ color: "#fff" }}>0:00</Text>
            <View style={styles.toolPlayWidth}></View>
            <Text style={{ color: "#fff" }}>5.07</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.primaryBackground,
  },
  container: {
    flex: 1,
    marginTop: 44,
    marginHorizontal: 16,
  },
  songDescription: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameSong: {
    color: "#fff",
    fontSize: 18,
  },
  nameSinger: {
    color: "#fff",
    opacity: 0.7,
  },
  toolMuic: {
    flex: 1,
    alignItems: "center",
    marginTop: 160,
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 140,
  },

  toolButton: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 220,
  },

  toolPlay: {
    flexDirection: "row",
    marginTop: 4,
    alignItems: "center",
  },
  toolPlayWidth: {
    width: 180,
    height: 2,
    backgroundColor: "#fff",
    marginHorizontal: 8,
  },
});

export default StartMusic;
