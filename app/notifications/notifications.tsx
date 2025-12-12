// app/(tabs)/modal.tsx
import NotificationCard from '@/components/notifications/NotificationCard';
import NotificationOptions from '@/components/notifications/NotificationOptions';
import NotificationsHeader from '@/components/notifications/NotificationsHeader';
import { Colors, FontSizes, SpacingScale } from '@/constants/styles';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function Notifications() {
  return (
    <View >
      <NotificationsHeader/>
      <View style={styles.container}>
        <NotificationOptions/>
        <ScrollView>
            <NotificationCard mainText='Payment Completed' subText='Corn fields (6001)' totalDue={490.2} date='06/26/2025 04:10 PM' color={Colors.notificationBlue}/>
            <NotificationCard mainText='Low APR Tractor loans until Aug 20 2025' iconName='tractor' date='06/26/2025 03:12 PM' color={Colors.notificationYellow}/>
            <NotificationCard mainText='Transfer Cancelled' subText='Apple Orcchards (4840)' totalDue={10000} date='06/25/2025 03:12 PM' color={Colors.notificationBlue}/>
            <NotificationCard mainText='AutoDraft Completed' subText="Richard's Home (9701)" totalDue={1590} date='06/24/2025 03:12 PM' color={Colors.white}/>
            <NotificationCard mainText='June Billing Statement Available' subText='Harverster (2831)' totalDue={1590} date='06/20/2025 09: 12 AM' color={Colors.white}/>
            <NotificationCard mainText='Loan application under review' subText='Tractor Loan (4421)' date='06/24/2025 03:12 PM' color={Colors.white}/>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: SpacingScale.spaceBase,
    paddingHorizontal: SpacingScale.spaceS,
    backgroundColor: Colors.white,
    height: '100%',
    borderRadius: SpacingScale.spaceBase,
    marginHorizontal: SpacingScale.spaceS
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    color: Colors.actionBlue,
    fontSize: FontSizes.fontsizes,
    fontWeight: 'bold'
  }
});
