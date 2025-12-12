import { Colors, FontSizes, SpacingScale } from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
type Props = {
  loanName: string;
  totalDue: number;
  dueDate: string;
};

export default function PastDueCard({ loanName, totalDue, dueDate }: Props) {

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={{alignItems: 'flex-start', justifyContent: 'space-between', maxWidth: '55%'}}>
          <Text style={styles.headerText}>{loanName}</Text>
          <Text style={styles.pastDueSymbol}>Past Due</Text>
        </View>
        <View style={{alignItems: 'flex-end', justifyContent: 'space-around', maxWidth: '40%'}}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Text style={styles.totalDue}>{formatCurrency(totalDue)}</Text>
            <Ionicons name="chevron-forward-outline" size={FontSizes.fontsizel} color={Colors.darkRed} />
          </View>
          <Text style={styles.subtext}>
            Due on {dueDate}
          </Text>  
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SpacingScale.spaceS,
  },
  headerText: {
    fontSize: FontSizes.fontsizeh4,
    marginBottom: SpacingScale.spaceXS,
  },
  subtext: {
    color: Colors.gray,
  },
  totalDue: {
    fontSize: FontSizes.fontsizeh3,
    fontWeight: 'bold',
    color: Colors.darkRed,
  },
  pastDueSymbol: {
    color: Colors.darkRed,
    backgroundColor: Colors.lightRed,
    padding: SpacingScale.spaceS,
    borderRadius: SpacingScale.spaceS,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
});
