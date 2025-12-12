import { Colors, SpacingScale } from '@/constants/styles';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  text: string;
  color: string;
};

export default function LoanButton({
  text,
  color,
}: Props) {
  return (
    <Pressable style={styles.button}>
        <Text style={[styles.text, {color: color}]}>
            {text}
        </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: SpacingScale.spaceS,
    borderWidth: 1,
    borderColor: Colors.gray,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center'
  },
});
