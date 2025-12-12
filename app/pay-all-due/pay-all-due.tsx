import PayAllDueHeader from '@/components/pay-all-due/PayAllDueHeader';
import { Colors, FontSizes, SpacingScale } from '@/constants/styles';
import { StyleSheet, Text, View } from 'react-native';

export default function PayAllDue() {
  return (
    <View >
        <PayAllDueHeader/>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{alignItems: 'flex-start', justifyContent: 'space-between'}}>
                    <Text style={styles.headerText}>Total Due</Text>
                    <Text style={styles.subtext}>
                        Across 4 loans
                    </Text>
                </View>
                <View style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
                    <Text style={styles.totalDue}>{formatCurrency(123)}</Text>
                    <Text style={styles.subtext}>
                        Latest Due on 2
                    </Text>  
                </View>
            </View>
            <View style={styles.dividerContainer}>
                <View style={styles.line} />
            </View>
            <Text>Select Loans to Pay</Text>
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
  container: {
    padding: SpacingScale.spaceBase,
    backgroundColor: Colors.white,
    height: '100%',
    borderRadius: SpacingScale.spaceBase,
    marginHorizontal: SpacingScale.spaceS
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SpacingScale.spaceM,
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
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.transparentBlue,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SpacingScale.spaceM,
  },
});
