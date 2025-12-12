import { Colors, FontSizes, SpacingScale } from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
type LoanItem = {
  id: string;
  name: string;
  amount: number;
  dueDate?: string;
  pastDue?: boolean;
};

type Props = {
  totalDue: number;
  loanCount: number;
  latestDue: string;
  loans: LoanItem[];
};

export default function LoanSummaryCard({ totalDue, loanCount, latestDue, loans }: Props) {
  const [expanded, setExpanded] = useState(true);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={{alignItems: 'flex-start', justifyContent: 'space-between'}}>
          <Text style={styles.headerText}>Total Due</Text>
          <Text style={styles.subtext}>
            Across {loanCount} loans
          </Text>
        </View>
        <View style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
          <Text style={styles.totalDue}>{formatCurrency(totalDue)}</Text>
          <Text style={styles.subtext}>
            Latest Due on {latestDue}
          </Text>  
        </View>
      </View>

      {!expanded && (
        <TouchableOpacity onPress={() => setExpanded(true)} style={styles.dividerContainer}>
          <View style={styles.line} />
          <Ionicons name="chevron-down-outline" size={FontSizes.fontsizel} color={Colors.transparentBlue} />
          <View style={styles.line} />
        </TouchableOpacity>
      )}

      {expanded && (
        <>
          <View style={styles.loanList}>
            {loans.map((item) => (
              <View key={item.id} style={styles.loanItem}>
                <View style={styles.loanLeft}>
                  <Text style={styles.loanName}>{item.name}</Text>
                  {item.pastDue && (<Text style={styles.pastDueSymbol}>Past Due</Text>)}
                </View>
                <View style={styles.loanRight}>
                  <Text style={[styles.amount, item.pastDue && styles.pastDue]}>
                    {formatCurrency(item.amount)}
                  </Text>
                  {item.dueDate && <Text style={[styles.dueDate, item.pastDue && styles.pastDueDate]}>Due on {item.dueDate}</Text>}
                </View>
              </View>
            ))}
          </View>

          <TouchableOpacity onPress={() => setExpanded(false)} style={styles.dividerContainer}>
            <View style={styles.line} />
            <Ionicons name="chevron-up-outline" size={FontSizes.fontsizel} color={Colors.transparentBlue} />
            <View style={styles.line} />
          </TouchableOpacity>
        </>
      )}

      <TouchableOpacity style={styles.payButton} onPress={() => router.navigate('/pay-all-due/pay-all-due')}>
        <Text style={styles.payText}>Pay all due</Text>
      </TouchableOpacity>
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
    marginBottom: SpacingScale.spaceXS,
    color: Colors.darkGreen,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SpacingScale.spaceS,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.transparentBlue,
    marginHorizontal: 8,
  },
  loanItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SpacingScale.spaceBase,
  },
  loanLeft: {
    flex: 1,
  },
  loanRight: {
    alignItems: 'flex-end',
  },
  loanName: {
  },
  amount: {
    fontSize: FontSizes.fontsizebase,
  },
  pastDue: {
    color: Colors.darkRed,
  },
  dueDate: {
    color: Colors.gray,
    fontSize: FontSizes.fontsizexs,
  },
  pastDueDate: {
    color: Colors.darkRed,
    fontSize: FontSizes.fontsizexs,
  },
  pastDueSymbol: {
    color: Colors.darkRed,
    backgroundColor: Colors.lightRed,
    padding: SpacingScale.spaceS,
    borderRadius: SpacingScale.spaceBase,
    alignSelf: 'flex-start',
    fontWeight: 'bold'
  },
  payButton: {
    backgroundColor: Colors.darkGreen,
    paddingVertical: SpacingScale.spaceS,
    borderRadius: SpacingScale.spaceS,
    alignItems: 'center',
  },
  payText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  loanList: {
    marginBottom: SpacingScale.spaceS,
  },
});
