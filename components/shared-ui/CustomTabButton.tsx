import { Colors, FontSizes, SpacingScale } from '@/constants/styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TabTrigger, TabTriggerSlotProps } from 'expo-router/ui';
import * as React from "react";
import { Pressable, StyleSheet, Text, View } from 'react-native';

type TabTriggerProps = React.ComponentProps<typeof TabTrigger>;

interface CustomTabButtonProps extends React.PropsWithChildren, TabTriggerSlotProps {
	label: string;
  iconName: keyof typeof Ionicons.glyphMap;
}

export const CustomTabButton = React.forwardRef<View, CustomTabButtonProps>(
	(props, ref) => {
  return (
    <Pressable ref={ref} {...props} style={styles.button}>
      <View style={styles.inner}>
        <View style={props.isFocused ? styles.selectedIcon : styles.unselectedIcon}>
        <Ionicons
          name={props.iconName}
          size={FontSizes.fontsizexl}
          color={props.isFocused ? Colors.darkGreen : Colors.white}
        />
        </View>
        <Text style={styles.text}>{props.label}</Text>
      </View>
    </Pressable>
  );
}
);

CustomTabButton.displayName = "CustomTabButton";


const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    flex: 1,
  },
  inner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.white,
    fontSize: FontSizes.fontsizes,
  },
  selectedIcon: {
    backgroundColor: Colors.lightGreen,
    paddingVertical: SpacingScale.spaceXS,
    paddingHorizontal: SpacingScale.spaceM,
    borderRadius: SpacingScale.spaceBase
  },
  unselectedIcon: {
    paddingVertical: SpacingScale.spaceXS,
    paddingHorizontal: SpacingScale.spaceM,
  }
});
