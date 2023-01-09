import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Attractions,
  Avatar,
  Hotels,
  Restaurants,
  SearchIcon,
} from "../assets";
import { TextInput } from "react-native";
import axios from "axios";
import MenuContainer from "../components/MenuContainer";

const Discover = () => {
  const navigation = useNavigation();

  //triggered when UI changes
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [response, setResponse] = useState({});
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState(0.0);
  const [lon, setLon] = useState(0.0);

  const locationHandler = (loc) => {
    setLocation(loc);
  };

  const getResponse = async () => {
    try {
      const res = await axios.get(
        "https://api.openweathermap.org/geo/1.0/direct?q=" +
          location +
          "&limit=5&appid=3579448aa87abd3a412b4ffb1a7357a1"
      );

      const data = res.data;

      setResponse(data);

      setLat(response[0].lat);
      setLon(response[0].lon);
    } catch (err) {
      console.log(err);
    }
  };

  const [type, setType] = useState("restaurants");

  return (
    <SafeAreaView className="flex-1 bg-white  relative">
      <View className="flex-row items-center justify-between p-8">
        <View>
          <Text className="text-[#0b646b] text-[30px] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[26px]">the beauty today</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 items-center justify-center rounded-md shadow-lg">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>
      <View
        className="flex-row items-center justify-between bg-white mx-4 rounded-lg py-1 px-4 h-12"
        style={styles.shadow}
      >
        <TextInput
          placeholder="Search"
          onChangeText={locationHandler}
          value={location}
          className="flex-1 text-[20px] font-semibold text-[#0b646b]"
        />
        <TouchableOpacity onPress={getResponse}>
          <Image source={SearchIcon} className="w-5 h-5" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View className="flex-row items-center justify-between px-4 mt-8">
          <MenuContainer
            key={"hotel"}
            title="Hotels"
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={"attractions"}
            title="Attractions"
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={"restaurants"}
            title="Restaurants"
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 5,
    shadowRadius: 10,

    elevation: 5,
  },
});

export default Discover;
