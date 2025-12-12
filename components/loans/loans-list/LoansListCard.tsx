import { Colors, FontSizes, SpacingScale } from '@/constants/styles';
import { FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoanButton from './LoanButtons';
type Props = {
    loanName: string;
    subText: string,
    status: string,
    amountDue: number,
    dueDate: string,
    ionIconName?: keyof typeof Ionicons.glyphMap;
    FA6IconName?: keyof typeof FontAwesome6.glyphMap;
    MCIIconName?: keyof typeof MaterialCommunityIcons.glyphMap;
    color: string,
    iconColor: string,
    flipIcon?: boolean,
    transferFunds?: number,
    autoDraftDate?: string,
};

export default function LoanListCard({ loanName, subText, status, amountDue, dueDate, ionIconName, FA6IconName, MCIIconName, iconColor, color, flipIcon, transferFunds, autoDraftDate}: Props) {
    const isPastDue = status.trim().toLowerCase() === 'past due';
    const noTransferFundsButton = transferFunds === undefined;
    const noAutoDraftDate = autoDraftDate === undefined;
    return (
        <View style={styles.card}>
            <View style={[styles.topHalf, {backgroundColor: color}]}>
                <View style={styles.header}>
                    <View style={{alignItems: 'flex-start', justifyContent: 'space-between', maxWidth: '65%'}}>
                        <Text style={styles.headerText}>{loanName}</Text>
                        <Text style={styles.subtext}>{subText}</Text>
                    </View>
                    <View style={{flexDirection: 'row', gap: SpacingScale.spaceXS, alignItems: 'center', maxWidth: '30%'}}>
                        <Text style={{color: Colors.white}}>View Details</Text>
                        <Ionicons name='chevron-forward' color={Colors.white}/>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', gap:SpacingScale.spaceXS, alignItems: 'center' }}>
                        <Text style={isPastDue ? styles.pastDueSymbol : styles.defaultSymbol}>{status}</Text>
                        {ionIconName ? (
                            <Ionicons name={ionIconName} size={48} color={iconColor} />
                        ) : FA6IconName ? (
                            <FontAwesome6 name={FA6IconName} size={36} color={iconColor} />
                        ) : MCIIconName ? (
                            <View style={flipIcon ? { transform: [{ rotateY: '180deg' }] } : null}>
                            <MaterialCommunityIcons name={MCIIconName} size={48} color={iconColor} />
                            </View>
                        ) : null}
                    </View>
                    <View style={{alignItems: 'flex-end'}}>
                        <Text style={styles.amountDue}>{formatCurrency(amountDue)}</Text>
                        <Text style={styles.subtext}>Due on {dueDate}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomHalf}>
                    {noTransferFundsButton ?
                    (
                    <View style={styles.buttons}>
                        <View style={{flex: 1}}>                            
                        <LoanButton
                        text='Pay'
                        color={Colors.darkGreen}
                        />
                        {noAutoDraftDate ? (
                            <Text style={{flex: 1, alignSelf: 'center', color: Colors.gray, marginTop: SpacingScale.spaceXS, textAlign: 'center'}}>
                                AutoDraft Not Setup
                            </Text>
                        ) : (
                            <Text style={{flex: 1, alignSelf: 'center', color: Colors.gray, marginTop: SpacingScale.spaceXS, textAlign: 'center'}}>
                                AutoDraft on {autoDraftDate}
                            </Text>
                        )}
                        </View>
                        
                    </View>
                    ) :
                    (
                    <View style={styles.buttons}>
                        <View style={{flex: 1}}>  
                            <LoanButton
                            text='Transfer Funds'
                            color={Colors.darkGreen}/>
                            <Text style={{flex: 1, alignSelf: 'center', color: Colors.gray, marginTop: SpacingScale.spaceXS, textAlign: 'center'}}>
                                Available: {formatCurrency(transferFunds)}
                            </Text>
                        </View>
                        <View style={{flex: 1}}>  
                            <LoanButton
                            text='Pay'
                            color={Colors.darkGreen}/>
                            {noAutoDraftDate ? (
                                <Text style={{flex: 1, alignSelf: 'center', color: Colors.gray, marginTop: SpacingScale.spaceXS, textAlign: 'center'}}>
                                    AutoDraft Not Setup
                                </Text>
                            ) : (
                                <Text style={{flex: 1, alignSelf: 'center', color: Colors.gray, marginTop: SpacingScale.spaceXS, textAlign: 'center'}}>
                                    AutoDraft on {autoDraftDate}
                                </Text>
                            )}
                        </View>
                    </View>
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
    marginBottom: SpacingScale.spaceBase,
    overflow: 'hidden'
    },
    topHalf: {
    backgroundColor: 'white',
    borderTopLeftRadius: SpacingScale.spaceBase,
    borderTopRightRadius: SpacingScale.spaceBase,
    paddingLeft: SpacingScale.spaceBase,
    paddingRight: SpacingScale.spaceBase,
    paddingTop: SpacingScale.spaceBase,
    paddingBottom: SpacingScale.spaceXS,
    },
    bottomHalf: {
    backgroundColor: Colors.white,
    borderBottomLeftRadius: SpacingScale.spaceBase,
    borderBottomRightRadius: SpacingScale.spaceBase,
    paddingTop: SpacingScale.spaceM,
    padding: SpacingScale.spaceBase
    },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SpacingScale.spaceS
  },
  headerText: {
    fontSize: FontSizes.fontsizeh5,
    marginBottom: SpacingScale.spaceXS,
    color: Colors.white
  },
  subtext: {
    fontSize: FontSizes.fontsizes,
    color: Colors.white,
  },
  amountDue: {
    fontSize: FontSizes.fontsizeh3,
    color: Colors.white,
  },
  pastDueSymbol: {
    fontSize: FontSizes.fontsizexs,
    color: Colors.darkRed,
    backgroundColor: Colors.lightRed,
    padding: SpacingScale.spaceXS,
    borderRadius: SpacingScale.spaceBase,
    fontWeight: 'bold'
  },
  defaultSymbol: {
    fontSize: FontSizes.fontsizexs,
    color: Colors.darkGreen,
    backgroundColor: Colors.white,
    padding: SpacingScale.spaceXS,
    borderRadius: SpacingScale.spaceM,
    fontWeight: 'bold'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SpacingScale.spaceBase
  },

});
