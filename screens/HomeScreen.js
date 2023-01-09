import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const navigation = useNavigation();

  //triggered when UI changes
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <View>
          <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
        </View>
      </View>

      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3c6072] text-[35px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[33px] font-bold">
          Good Moments
        </Text>
        <Text className="text-[#3c6072] text-base">
          Nostrud sint voluptate dolore excepteur esse magna.
        </Text>
      </View>

      <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-24 -right-44" />
      <View className="w-[400px] h-[400px] bg-[#e99265] rounded-full absolute -bottom-40 -left-40" />

      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-5"
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center"
        >
          <Animatable.View
            animation="pulse"
            easing="ease-in-out"
            iterationDelay={300}
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className="text-green-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
