import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import DishRow from '../components/DishRow';
import CartIcon from '../components/CartIcon';

const Restaurents = () => {
  const {params} = useRoute();
  const navigation = useNavigation();
  let item: any = params;

  return (
    <View>
      <CartIcon />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-52" source={item?.image} />
          <TouchableOpacity
            onPress={() => navigation?.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
            <Icon.ArrowLeft strokeWidth={3} stroke={'orange'} />
          </TouchableOpacity>
        </View>
        <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}>
          <View className="px-5 pt-2 pb-2">
            <Text className="text-3xl font-bold">{item?.name}</Text>
            <View className="flex-row items-center space-x-1">
              <Image
                source={require('../assets/images/fullStar.png')}
                className="h-4 w-4"
              />
              <Text className="text-xs">
                <Text className="text-green-700">{item?.stars}</Text>
                <Text className="text-gray-700">
                  {item.reviews}.{' '}
                  <Text className="font-semibold">{item?.category}</Text>
                </Text>
              </Text>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width="15" height="15" />
                <Text className="text-gray-700 text-xs">
                  NearBy . {item?.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item?.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {item?.dishes?.map((dish: any, index: any) => (
            <DishRow item={{...dish}} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Restaurents;
