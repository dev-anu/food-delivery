import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import {getItem, removeItem} from '../redux/slices/Cart';
import {SafeAreaView} from 'react-native-safe-area-context';

const Cart = () => {
  const state = useSelector((state: any) => state?.Cart);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [deleteData, setDelete] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getItem());
  }, [deleteData]);

  console.log(state);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View className="flex-row justify-center">
        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">
            {state?.length > 0 && state[0]?.name}
          </Text>
        </View>
      </View>
      <View className="py-5 absolute top-5">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="flex justify-center items-center rounded-full bg-orange h-10 w-10 ml-2">
          <Icon.ArrowLeft strokeWidth={3} stroke={'white'} />
        </TouchableOpacity>
      </View>
      <View className="bg-[#FFBE6D] mt-5 flex-row px-4 state-center">
        <Image
          source={require('../assets/images/bikeGuy.png')}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4 pt-7 font-bold">
          Deliver in 20-30 minutes
        </Text>
        <TouchableOpacity>
          <Text className="font-bold text-orange mt-7">Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="bg-white pt-5">
        {state?.length > 0 &&
          state?.map((item: any, index: any) => {
            return (
              <View
                key={index}
                className="flex-row items-center spaxe-x-3 py-2 px-4 bg-white rounded-sm">
                <Text className="font-bold text-orange mr-2">2 x</Text>
                <Image
                  className="h-14 w-14 rounded-full mr-2"
                  source={item?.image}
                />
                <Text className="flex-1 font-bold text-gray-500">
                  {item?.name}
                </Text>
                <Text className="font-semibold text-base">${item?.price}</Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(removeItem(item?.id));
                  }}
                  className="ml-2 p-1 rounded-full bg-orange">
                  <Icon.Minus
                    strokeWidth={2}
                    height={20}
                    width={20}
                    stroke="white"
                  />
                </TouchableOpacity>
              </View>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
