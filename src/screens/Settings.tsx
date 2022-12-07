import { Text } from 'react-native';
import CenteredContainer from '../components/CenteredContainer';
import { useLocale } from '../locales/useLocale';
import { Label } from '../locales/Label';

const Settings = () => {
  const { t } = useLocale();

  return (
    <CenteredContainer>
      <Text>{t(Label.Settings)}</Text>
    </CenteredContainer>
  );
};

export default Settings;
