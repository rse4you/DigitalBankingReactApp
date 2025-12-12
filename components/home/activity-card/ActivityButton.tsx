import React from 'react';
import { Pressable, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';

type Props = {
  text: string;
  selected: boolean;
  onPress: () => void;
  selectedTextColor?: string;
  unselectedTextColor?: string;
  selectedBackgroundColor?: string;
  unselectedBackgroundColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function ActivityButton({
  text,
  selected,
  onPress,
  selectedTextColor = '#ffffff',
  unselectedTextColor = '#000000',
  selectedBackgroundColor = '#007AFF',
  unselectedBackgroundColor = '#f0f0f0',
  style,
  textStyle,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: selected ? selectedBackgroundColor : unselectedBackgroundColor,
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: selected ? selectedTextColor : unselectedTextColor,
          },
          textStyle,
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
});
