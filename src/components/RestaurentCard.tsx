import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';

const RestaurentCard = ({item, index}: any) => {
  const navigation: any = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Restaurents', {...item})}>
      <View className="mr-6 bg-white rounded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl" source={item?.image} />
        <View className="px-3 pb-2 space-y-2">
          <Text className="text-lg font-bold pt-2">{item?.name}</Text>
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
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width="15" height="15" />
            <Text className="text-gray-700 text-xs">
              NearBy . {item?.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurentCard;
