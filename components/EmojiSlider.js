import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Slider } from 'react-native-elements';

const EmojiSlider = () => {
  const [value, setValue] = useState(0);

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const getEmojiOpacity = (index) => {
    return value === index ? 1 : 0.3;
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: 'bold', color: '#2071B2' }}>Share your experience in scaling:</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        {[0, 1, 2, 3, 4].map((index) => (
          <Text key={index} style={{ opacity: getEmojiOpacity(index) }}>
            {index === 0 ? '😡' : index === 1 ? '😠' : index === 2 ? '😐' : index === 3 ? '😊' : '😄'}
          </Text>
        ))}
      </View>
      <Slider
        value={value}
        minimumValue={0}
        maximumValue={4}
        step={1}
        onValueChange={handleValueChange}
        minimumTrackTintColor="#105955"
        maximumTrackTintColor="#A5E0DD"
        thumbTintColor="#105955"
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

export default EmojiSlider;
