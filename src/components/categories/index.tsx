import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {categories} from '../../constents';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}>
        {categories?.length > 0 &&
          categories?.map((item: categoryType) => {
            let isActive = item?.id === activeCategory;
            let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
            let textClass = isActive
              ? 'font-semibold text-gray-800'
              : 'text-gray-500';
            return (
              <View
                key={item?.id}
                className="flex justify-center items-center mr-6">
                <TouchableOpacity
                  onPress={() => setActiveCategory(item?.id)}
                  className={`p-1 rounded-full shadow bg-gray-200 flex justify-center items-center ${btnClass}`}>
                  <Image
                    source={item?.image}
                    alt="food"
                    style={{width: 45, height: 45}}
                  />
                </TouchableOpacity>
                <Text className={'text-sm' + textClass}>{item?.name}</Text>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Categories;
