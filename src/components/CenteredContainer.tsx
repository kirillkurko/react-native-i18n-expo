import { StyleSheet, View } from 'react-native';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const CenteredContainer = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

export default CenteredContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
