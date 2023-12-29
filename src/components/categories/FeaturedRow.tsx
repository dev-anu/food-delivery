import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import RestaurentCard from '../RestaurentCard';

const FeaturedRow = ({title, restaurants, description}: any) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-orange font-semibold">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
        className="overflow-visible py-5">
        {restaurants?.map((item: any, index: any) => (
          <RestaurentCard item={item} index={index} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
