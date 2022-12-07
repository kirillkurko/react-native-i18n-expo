import { RouteName } from './RouteName';

type EmptyObject = Record<string, never>;

export type RootStackParamList = {
  [RouteName.Feed]?: EmptyObject;
  [RouteName.Home]?: EmptyObject;
  [RouteName.Profile]?: EmptyObject;
  [RouteName.Search]?: EmptyObject;
  [RouteName.Settings]?: EmptyObject;
};
