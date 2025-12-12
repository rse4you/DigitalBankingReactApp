import { Colors, FontSizes, SpacingScale } from '@/constants/styles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
type Props = {
  loanName: string;
  totalDue: number;
  dueDate?: string;
  type: string;
  color: string;
};

export default function ActivityLoanCard({ loanName, totalDue, dueDate, type, color }: Props) {

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={{alignItems: 'flex-start', justifyContent: 'space-between'}}>
            <Text style={styles.headerText}>{loanName}</Text>
            <Text style={[styles.type, { backgroundColor: color }]}>{type}</Text>
        </View>
        <View style={{alignItems: 'flex-end', justifyContent: 'space-around'}}>
            <Text style={styles.totalDue}>{formatCurrency(totalDue)}</Text>
            <Text style={styles.subtext}>{dueDate}</Text>  
        </View>
      </View>
    </View>
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
    backgroundColor: Colors.white,
    borderRadius: SpacingScale.spaceBase,
    padding: SpacingScale.spaceBase,
    marginBottom: SpacingScale.spaceBase,
    elevation: 2,
    borderColor: Colors.gray,
    borderWidth: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: FontSizes.fontsizeh6,
    marginBottom: SpacingScale.spaceXS,
  },
  subtext: {
    fontSize: FontSizes.fontsizes,
    color: Colors.gray,
  },
  totalDue: {
    fontSize: FontSizes.fontsizeh6,
    color: Colors.black,
  },
  type: {
    fontSize: FontSizes.fontsizes,
    padding: SpacingScale.spaceXS,
    borderRadius: SpacingScale.spaceS,
    alignSelf: 'flex-start',
    color: Colors.white,
  },
});
