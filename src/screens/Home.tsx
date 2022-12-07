import { Text } from 'react-native';
import CenteredContainer from '../components/CenteredContainer';
import { useLocale } from '../locales/useLocale';
import { Label } from '../locales/Label';

const Home = () => {
  const { t } = useLocale();

  return (
    <CenteredContainer>
      <Text>{t(Label.Home)}</Text>
    </CenteredContainer>
  );
};

export default Home;
