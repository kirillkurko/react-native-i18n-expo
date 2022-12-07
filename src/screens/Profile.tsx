import { Text } from 'react-native';
import CenteredContainer from '../components/CenteredContainer';
import { useLocale } from '../locales/useLocale';
import { Label } from '../locales/Label';

const Profile = () => {
  const { t } = useLocale();

  return (
    <CenteredContainer>
      <Text>{t(Label.Profile)}</Text>
    </CenteredContainer>
  );
};

export default Profile;
