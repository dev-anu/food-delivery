import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const CartIcon = () => {
  const navigation: any = useNavigation();
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity className="bg-orange flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow">
        <View className="rounded-full bg-white">
          <Text className="p-2 px-4">3</Text>
        </View>
        <Text
          className="flex-1 text-center font-extrabold text-white text-lg"
          onPress={() => navigation?.navigate('Cart')}>
          View Cart
        </Text>
        <Text className="font-extrabold text-white text-lg">${23}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
