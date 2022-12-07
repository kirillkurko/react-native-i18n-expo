import { Text } from 'react-native';
import CenteredContainer from '../components/CenteredContainer';
import { Label } from '../locales/Label';
import { useLocale } from '../locales/useLocale';

const Feed = () => {
  const { t } = useLocale();

  return (
    <CenteredContainer>
      <Text>{t(Label.Feed)}</Text>
    </CenteredContainer>
  );
};

export default Feed;
