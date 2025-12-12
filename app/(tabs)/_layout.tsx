import { CustomTabButton } from '@/components/shared-ui/CustomTabButton';
import MainHeader from '@/components/shared-ui/MainHeader';
import { SpacingScale } from '@/constants/styles';
import { BlurView } from 'expo-blur';
import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
import { StyleSheet } from 'react-native';

export default function Layout() {
  return (
    <Tabs>
      <MainHeader />
      <TabSlot />
          <TabList asChild>
            <BlurView style={styles.tabList} blurReductionFactor={1} intensity={5} tint="regular" experimentalBlurMethod='dimezisBlurView'>
              <TabTrigger name="home" href="/home" asChild>
                <CustomTabButton label="Home" iconName="home"/>
              </TabTrigger>
              <TabTrigger name="loans" href="/loans" asChild>
                <CustomTabButton label="Loans" iconName="document-text-outline"/>
              </TabTrigger>
              <TabTrigger name="transactions" href="/transactions" asChild>
                <CustomTabButton label="Transactions" iconName="list-circle-outline"/>
              </TabTrigger>
              <TabTrigger name="docs" href="/docs" asChild>
                <CustomTabButton label="Docs" iconName="folder-outline"/>
              </TabTrigger>
            </BlurView>

          </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF20',
    margin: SpacingScale.spaceS,
    borderRadius: SpacingScale.spaceXL,
    padding: SpacingScale.spaceS,
    overflow: 'hidden'
  },
});
