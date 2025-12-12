import { Colors, FontSizes, SpacingScale } from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { LayoutAnimation, Platform, Pressable, StyleSheet, Text, UIManager, View } from 'react-native';
import ActivityLoanCard from './ActivityLoanCard';

type LoanItem = {
  name: string;
  amount: number;
  dueDate?: string;
  type: string;
  color: string;
};

type Props = {
  loans: LoanItem[];
};

export default function ActivityCard({ loans }: Props) {
  const [showRecent, setShowRecent] = useState(true);
  const [showRecurring, setShowRecurring] = useState(false);
  
  if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleRecent = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowRecent(!showRecent);
  };

  const toggleRecurring = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowRecurring(!showRecurring);
  };


  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Activity</Text>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Text style={styles.viewAllText}>View All</Text>
          <Ionicons name="chevron-forward-outline" size={FontSizes.fontsizes} color={Colors.actionBlue}/>
        </View>
      </View>
      
      <View style={styles.buttons}>
        <Pressable
          style={[
            styles.tabButton,
            showRecent ? styles.recentSelected : styles.recentUnselected,
          ]}
          onPress={toggleRecent}
        >
          <View style={styles.tabContent}>
            {showRecent && <Ionicons name="checkmark" size={16} color={Colors.darkGreen} style={styles.icon} />}
            <Text style={[
              styles.tabText,
              showRecent ? styles.recentSelectedText : styles.recentUnselectedText
            ]}>
              Recent
            </Text>
          </View>
        </Pressable>

        <Pressable
          style={[
            styles.tabButton,
            showRecurring ? styles.recurringSelected : styles.recurringUnselected,
          ]}
          onPress={toggleRecurring}
        >
          <View style={styles.tabContent}>
            {showRecurring && <Ionicons name="checkmark" size={16} color={Colors.darkPurple} style={styles.icon} />}
            <Text style={[
              styles.tabText,
              showRecurring ? styles.recurringSelectedText : styles.recurringUnselectedText
            ]}>
              Recurring
            </Text>
          </View>
        </Pressable>
      </View>

      {loans.map((loan, index) => (
        <ActivityLoanCard
          key={index}
          totalDue={loan.amount}
          loanName={loan.name}
          type={loan.type}
          color={loan.color}
          dueDate={loan.dueDate}
        />
      ))}
    </View>
  );
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
  viewAllText: {
    fontSize: FontSizes.fontsizeh6,
    color: Colors.actionBlue,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SpacingScale.spaceBase,
    gap: SpacingScale.spaceS
  },
  tabButton: {
  flex: 1,
  paddingVertical: SpacingScale.spaceS,
  borderRadius: SpacingScale.spaceBase,
  alignItems: 'center',
  justifyContent: 'center',
},

  tabContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabText: {
    fontSize: FontSizes.fontsizeh6,
  },

  icon: {
    marginRight: SpacingScale.spaceS,
  },

  // Recent Styles
  recentSelected: {
    backgroundColor: Colors.lightGreen,
    borderWidth: 1.25,
    borderColor: Colors.lightGreen,
  },
  recentUnselected: {
    backgroundColor: Colors.white,
    borderWidth: 1.25,
    borderColor: Colors.gray,
  },
  recentSelectedText: {
    color: Colors.darkGreen,
  },
  recentUnselectedText: {
    color: Colors.gray,
  },

  // Recurring Styles
  recurringSelected: {
    backgroundColor: Colors.lightPurple,
    borderWidth: 1.25,
    borderColor: Colors.lightPurple
  },
  recurringUnselected: {
    backgroundColor: Colors.white,
    borderWidth: 1.25,
    borderColor: Colors.darkGreen,
  },
  recurringSelectedText: {
    color: Colors.darkPurple,
  },
  recurringUnselectedText: {
    color: Colors.darkGreen,
  },

});
