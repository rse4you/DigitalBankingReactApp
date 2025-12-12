// app/(tabs)/modal.tsx
import { Colors, FontSizes, SpacingScale } from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

type Notification = {
    type: string;
    mainText?: string;
    subText?: string;
    totalDue: number;
    date: string;
    color: string;
};

export default function NotificationOptions() {
  return (
    <View>
        <View style={styles.header}>
            <View style={styles.header}>
                <Ionicons name="options" size={FontSizes.fontsizes} color={Colors.actionBlue} style={{marginRight: SpacingScale.spaceS}} />
                <Text style={styles.headerText}>Filter: All</Text>
            </View>
            <Text style={styles.headerText}>Dismiss all</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SpacingScale.spaceS
  },
  headerText: {
    color: Colors.actionBlue,
    fontSize: FontSizes.fontsizes,
    fontWeight: 'bold'
  }
});
