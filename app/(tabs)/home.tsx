import ActivityCard from '@/components/home/activity-card/ActivityCard';
import PastDueCard from '@/components/home/PastDueCard';
import LoanSummaryCard from '@/components/shared-ui/LoanSummaryCard';
import { SpacingScale } from '@/constants/styles';
import { useLoanStore } from '@/services/loanStore';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet
} from 'react-native';

export default function HomeScreen() {
  const {
    pastDue,
    loanSummary,
    activity,
    fetchPastDue,
    fetchLoanSummary,
    fetchActivity,
    reset,

  } = useLoanStore();

  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    setRefreshing(true);
    await Promise.all([fetchPastDue(), fetchLoanSummary(), fetchActivity()]);
    setRefreshing(false);
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
      setRefreshing(false);
    }, [])
  );

  const onRefresh = async () => {
    setRefreshing(true);
    reset();
    await loadData();
    setRefreshing(false);
  };

  const isLoading = !pastDue || !loanSummary || !activity;

  if (isLoading) {
    return <ActivityIndicator size="large" color="#ffffff" />;
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <PastDueCard {...pastDue} />
      <LoanSummaryCard {...loanSummary} />
      <ActivityCard loans={activity} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SpacingScale.spaceBase,
    backgroundColor: 'transparent',
  },
});
