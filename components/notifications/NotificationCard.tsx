import { Colors, FontSizes, SpacingScale } from '@/constants/styles';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type BaseProps = {
  mainText: string;
  date: string;
  color: string;
};

type Payment = BaseProps & {
  totalDue: number;
  subText: string;
};

type Message = BaseProps & {
  iconName: keyof typeof FontAwesome6.glyphMap;
};

type Review = BaseProps & {
  subText: string;
}

type NotificationCardProps = Payment | Message | Review;

export default function NotificationCard(props: NotificationCardProps) {
  const { mainText, date, color } = props; 
  
  
const isPayment = (p: NotificationCardProps): p is Payment =>
    'totalDue' in p && 'subText' in p;

  const isMessage = (p: NotificationCardProps): p is Message =>
    'iconName' in p;

  const isReview = (p: NotificationCardProps): p is Review =>
    'subText' in p && !('totalDue' in p);

  return (
        <View style={[styles.card, {backgroundColor: color}]}>
            <View style={styles.header}>
              {isPayment(props) && (
                <>
                  <View style={{alignItems: 'flex-start', justifyContent: 'space-between' ,  minWidth: '50%', maxWidth: '50%'}}>
                    <Text style={styles.headerText}>{mainText}</Text>
                    <Text style={styles.subtext}>{props.subText}</Text>
                  </View>
                  <View style={{alignItems: 'flex-end', justifyContent: 'space-around', maxWidth: '40%'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: SpacingScale.spaceS}}>
                      <View style={{alignItems: 'flex-end', justifyContent: 'space-around'}}>
                        <Text style={styles.totalDue}>{formatCurrency(props.totalDue)}</Text>
                        <Text style={styles.subtext}>{date}</Text>  
                      </View>
                      <Ionicons name="chevron-forward-outline" size={FontSizes.fontsizexs} color={Colors.black}/>
                    </View>
                  </View>
                </>
              )}
              
              {isMessage(props) && (
                <>
                  <View style={{alignItems: 'flex-start', justifyContent: 'space-between', minWidth: '45%', maxWidth: '45%'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap:SpacingScale.spaceS}}>
                      <FontAwesome6 name={props.iconName} size={FontSizes.fontsizeh3} color={Colors.darkGreen}/>
                      <Text style={styles.headerText}>{mainText}</Text>
                    </View>
                  </View>  
                  <View style={{alignItems: 'flex-end', justifyContent: 'space-around', maxWidth: '40%'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: SpacingScale.spaceS}}>
                      <Text style={styles.subtext}>{date}</Text>  
                      <Ionicons name="chevron-forward-outline" size={FontSizes.fontsizexs} color={Colors.black}/>
                    </View>
                  </View>
                </>
              )}

              {isReview(props) && (
                <>
                  <View style={{alignItems: 'flex-start', justifyContent: 'space-between',  maxWidth: '40%'}}>
                    <Text style={styles.headerText}>{mainText}</Text>
                    <Text style={styles.subtext}>{props.subText}</Text>
                  </View>
                  <View style={{alignItems: 'flex-end', justifyContent: 'space-around', maxWidth: '40%'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: SpacingScale.spaceS}}>
                      <Text style={styles.subtext}>{date}</Text>  
                      <Ionicons name="chevron-forward-outline" size={FontSizes.fontsizexs} color={Colors.black}/>
                    </View>
                  </View>
                </>
              )}
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
    backgroundColor: Colors.transparentBlue,
    borderRadius: SpacingScale.spaceS,
    padding: SpacingScale.spaceBase,
    marginBottom: SpacingScale.spaceBase,
    borderColor: 'transparent'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: FontSizes.fontsizeh6,
    marginBottom: SpacingScale.spaceXS,
    fontWeight: 'bold'
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
