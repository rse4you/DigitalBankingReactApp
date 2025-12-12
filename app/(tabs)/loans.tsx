import LoansList from '@/components/loans/loans-list/LoansList';
import TotalBalanceCard from '@/components/loans/TotalBalanceCard';
import LoanSummaryCard from '@/components/shared-ui/LoanSummaryCard';
import { Colors, SpacingScale } from '@/constants/styles';
import { useLoanStore } from '@/services/loanStore'; // Zustand store
import { FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, RefreshControl, ScrollView, StyleSheet } from 'react-native';

const allLoans = [
  {
    loanName: 'FIELD TRACTOR (2421)',
    subText: 'Active | $39,090.04 | 6.30%',
    status: 'Past Due',
    amountDue: 790.04,
    dueDate: '06/24/2025',
    FA6IconName: 'tractor' as keyof typeof FontAwesome6.glyphMap,
    color: Colors.loanBackgroundBlue,
    iconColor: Colors.loanIconBlue,
  },
  {
    loanName: 'RF CONSTRUCTIONS (8320)',
    subText: 'Active | $850,000.00 | 2.30%',
    status: 'Coming Due',
    amountDue: 5490.16,
    dueDate: '06/28/2025',
    MCIIconName: 'excavator' as keyof typeof MaterialCommunityIcons.glyphMap,
    color: Colors.loanBackgroundGray,
    iconColor: Colors.loanIconGray,
    flipIcon: true,
    transferFunds: 250000,
  },
  {
    loanName: 'RICHARD FARMS (8320)',
    subText: 'Active | $850,000.00 | 2.30%',
    status: 'Coming Due',
    amountDue: 5490.16,
    dueDate: '06/28/2025',
    MCIIconName: 'barn' as keyof typeof MaterialCommunityIcons.glyphMap,
    color: Colors.loanBackgroundGreen,
    iconColor: Colors.loanIconGreen,
    transferFunds: 250000,
  },
  {
    loanName: "RICHARD'S HOME (9701)",
    subText: 'Active | $450,000.00 | 4.25%',
    status: 'AutoDraft',
    amountDue: 790.04,
    dueDate: '06/24/2025',
    ionIconName: 'home' as keyof typeof Ionicons.glyphMap,
    color: Colors.loanBackgroundCyan,
    iconColor: Colors.loanIconCyan,
    autoDraftDate: '07/05/2025',
  },
];
export default function LoansScreen() {
  const {
    loanSummary,
    fetchLoanSummary,
    reset,
  } = useLoanStore();

  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    setRefreshing(true);
    await fetchLoanSummary();
    setRefreshing(false);
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
      setRefreshing(false);
    }, [])
  );

  const isLoading = !loanSummary;

  const onRefresh = async () => {
    setRefreshing(true);
    reset(); // Clear cache
    await loadData(); // Fetch fresh data
    setRefreshing(false);
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#ffffff" />;
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <TotalBalanceCard totalDue={2253000.21} loanCount={6} />
      <LoanSummaryCard {...loanSummary} />
      <LoansList loans={allLoans} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SpacingScale.spaceBase,
    backgroundColor: 'transparent',
  },
});

