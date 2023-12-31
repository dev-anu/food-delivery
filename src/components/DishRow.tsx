import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import {useDispatch, useSelector} from 'react-redux';
import {addItem} from '../redux/slices/Cart';

const DishRow = ({item}: any) => {
  const dispatch = useDispatch();
  const {items} = useSelector((state: any) => state?.Cart);

  const handleData = (data: any) => {
    dispatch(addItem(data));
  };
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image className="rounded-3xl h-[100px] w-[100px]" source={item?.image} />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item?.name}</Text>
          <Text className="text-gray-700">{item?.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold">
            ${item?.price}
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              className="p-1 rounded-full bg-orange"
              onPress={() => {
                handleData(item);
              }}>
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={'white'}
              />
            </TouchableOpacity>
            <Text className="px-3">{2}</Text>
            <TouchableOpacity
              className="p-1 rounded-full bg-orange"
              onPress={() => {
                dispatch(addItem(item));
              }}>
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={'white'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
