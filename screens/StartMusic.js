import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";

import GlobalStyles from "../contants/GlobalStyles";
import { getSong } from "../api/musicApi";

function StartMusic({ route }) {
  const navigation = useNavigation();

  const [song, setSong] = useState();
  const [sound, setSound] = useState();

  async function playSound() {
    await sound.playAsync();
  }

  async function stopSound() {
    await sound.pauseAsync();
  }

  async function replaySound() {
    await sound.replayAsync();
  }

  function buttonGoBackHandler() {
    navigation.goBack();
  }

  useEffect(() => {
    (async () => {
      await getSong(route.params.idSong).then((respone) => {
        (async function () {
          const { sound } = await Audio.Sound.createAsync({
            uri: respone.data.data[128],
          });
          setSound(sound);
        })();
      });

      return sound
        ? () => {
            sound.unloadAsync();
          }
        : undefined;
    })();

    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, []);

  useEffect(() => {}, []);

  return (
    <View style={styles.rootContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.songDescription}>
          <View style={styles.title}>
            <Text style={styles.nameSong}>Ai là người thương em</Text>
            <Text style={styles.nameSinger}>Quân A.P</Text>
          </View>
          <View style={styles.viewBtn}>
            <Button title="Trở lại" onPress={buttonGoBackHandler} />
          </View>
        </View>
        <View style={styles.toolMuic}>
          <Image />
        </View>
      </SafeAreaView>
      <Pressable onPress={playSound} style={{ flex: 1 }}>
        <Text style={{ color: "#fff", fontSize: 40 }}>Phát nhạc</Text>
      </Pressable>

      <Pressable onPress={stopSound} style={{ flex: 1 }}>
        <Text style={{ color: "#fff", fontSize: 40 }}>Dưng nhac</Text>
      </Pressable>

      <Pressable onPress={replaySound} style={{ flex: 1 }}>
        <Text style={{ color: "#fff", fontSize: 40 }}>Phát lại</Text>
      </Pressable>
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
});

export default StartMusic;
