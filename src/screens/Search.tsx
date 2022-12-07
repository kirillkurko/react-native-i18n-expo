import { Text } from 'react-native';
import CenteredContainer from '../components/CenteredContainer';
import { useLocale } from '../locales/useLocale';
import { Label } from '../locales/Label';

const Search = () => {
  const { t } = useLocale();

  return (
    <CenteredContainer>
      <Text>{t(Label.Search)}</Text>
    </CenteredContainer>
  );
};

export default Search;
