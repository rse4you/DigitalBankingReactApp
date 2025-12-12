import { Colors, FontSizes, SpacingScale } from '@/constants/styles';
import { FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoanListCard from './LoansListCard';

type LoanItem = {
  loanName: string;
  subText: string;
  status: string;
  amountDue: number;
  dueDate: string;
  ionIconName?: keyof typeof Ionicons.glyphMap;
  FA6IconName?: keyof typeof FontAwesome6.glyphMap;
  MCIIconName?: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
  iconColor: string;
  flipIcon?: boolean;
  transferFunds?: number;
  autoDraftDate?: string;
};

type Props = {
  loans: LoanItem[];
};

export default function ActivityCard({ loans }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.buttons}>
        <Pressable style={styles.tabButton}>
          <View style={styles.tabContent}>
            <Ionicons name="options" />
            <Text style={{ color: Colors.darkGreen }}> Filter: Active Loans </Text>
          </View>
        </Pressable>

        <Pressable style={styles.tabButton}>
          <View style={styles.tabContent}>
            <FontAwesome name="sort" />
            <Text style={{ color: Colors.darkGreen }}> Sort: Due Date </Text>
          </View>
        </Pressable>
      </View>

      {loans.map((loan, index) => (
        <LoanListCard
          key={index}
          loanName={loan.loanName}
          subText={loan.subText}
          status={loan.status}
          amountDue={loan.amountDue}
          dueDate={loan.dueDate}
          ionIconName={loan.ionIconName}
          FA6IconName={loan.FA6IconName}
          MCIIconName={loan.MCIIconName}
          color={loan.color}
          iconColor={loan.iconColor}
          flipIcon={loan.flipIcon}
          transferFunds={loan.transferFunds}
          autoDraftDate={loan.autoDraftDate}
        />
      ))}

      <Text style={{ alignSelf: 'center', fontSize: FontSizes.fontsizebase, marginBottom: SpacingScale.spaceS }}>Closed Loans (4)</Text>

      <TouchableOpacity style={styles.dividerContainer}>
                  <View style={styles.line} />
                  <Ionicons name="chevron-down-outline" size={FontSizes.fontsizel} color={Colors.transparentBlue} />
                  <View style={styles.line} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F7FAFCB2',
    overflow: 'hidden',
    borderRadius: SpacingScale.spaceBase,
    padding: SpacingScale.spaceBase,
    marginBottom: SpacingScale.spaceBase,
    elevation: 2,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SpacingScale.spaceBase,
    gap: SpacingScale.spaceBase,
  },
  tabButton: {
    flex: 1,
    paddingVertical: SpacingScale.spaceS,
    borderRadius: SpacingScale.spaceS,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  tabContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SpacingScale.spaceXS,
  },
  tabText: {
    fontSize: FontSizes.fontsizeh6,
  },
  icon: {
    marginRight: SpacingScale.spaceS,
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
});
