import { Colors, FontSizes, SpacingScale } from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  totalDue: number;
  loanCount: number;
};

export default function TotalBalanceCard({ totalDue, loanCount}: Props) {

  return (
    <BlurView intensity={50} tint="regular" experimentalBlurMethod='dimezisBlurView' style={styles.card} blurReductionFactor={1}>
      <View style={styles.header}>
        <View style={{alignItems: 'flex-start', justifyContent: 'space-between'}}>
          <Text style={styles.headerText}>Total Balance</Text>
          <Text style={styles.subtext}>
            Across {loanCount} loans
          </Text>
        </View>
        <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
          <Text style={styles.totalDue}>{formatCurrency(totalDue)}</Text>
        </View>
      </View>
      <TouchableOpacity  style={styles.dividerContainer}>
            <View style={styles.line} />
            <Ionicons name="chevron-down-outline" size={FontSizes.fontsizel} color={Colors.white} />
            <View style={styles.line} />
        </TouchableOpacity>
      </BlurView>
  );
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'transparent',
    borderRadius: SpacingScale.spaceBase,
    padding: SpacingScale.spaceBase,
    marginBottom: SpacingScale.spaceBase,
    overflow: 'hidden',
    elevation: 2
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SpacingScale.spaceS,
  },
  headerText: {
    fontSize: FontSizes.fontsizeh4,
    marginBottom: SpacingScale.spaceXS,
    color: Colors.white,
  },
  subtext: {
    color: Colors.white,
  },
  totalDue: {
    fontSize: FontSizes.fontsizeh3,
    fontWeight: 'bold',
    marginBottom: SpacingScale.spaceXS,
    color: Colors.white,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.white,
    marginHorizontal: 8,
  },
});
