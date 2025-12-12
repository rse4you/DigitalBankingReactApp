import { Colors, SpacingScale } from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function MainHeader() {
  const router = useRouter();
  return (
      <View style={styles.container}>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => console.log('Profile')}>
            <Ionicons name="person-circle-outline" size={SpacingScale.spaceL} color={Colors.white}/>
          </TouchableOpacity>
        </View>
        <Image style={styles.logo} contentFit='contain' source={require('../../assets/images/Horizon-Logo.png')}></Image>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => router.navigate('/notifications/notifications')}>
            <Ionicons name="notifications-outline" size={SpacingScale.spaceL} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SpacingScale.spaceXXL,
    padding: SpacingScale.spaceBase,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    flex: 1,
    height: '100%',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
