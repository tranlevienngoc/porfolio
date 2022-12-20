import AndroidPlatform from '../../components/svg/AndroidPlatform';
import AppStorePlatform from '../../components/svg/AppStorePlatform';
import DarkModeTheme from '../../components/svg/DarkModeTheme';
import GooglePlayPlatform from '../../components/svg/GooglePlayPlatform';
import LightModeTheme from '../../components/svg/LightModeTheme';
import SystemTheme from '../../components/svg/SystemTheme';

export const THEME = [
  {
    label: 'Light mode',
    theme: <LightModeTheme />,
  },
  {
    label: 'Dark mode',
    theme: <DarkModeTheme />,
  },
  {
    label: 'System mode',
    theme: <SystemTheme />,
  },
];

export const LIST_LANGUAGE = [
  {
    label: 'English',
    value: 'EN',
  },

  {
    label: 'Tiếng Việt',
    value: 'VI',
  },
];

export const LIST_CURRENCY = [
  {
    name: 'USA Dollar',
    value: 'USA-$',
    label: 'USD - US Dollar',
  },

  {
    name: 'VietNamDong',
    value: 'VND',
    label: 'VND - VN Dong',
  },
];

export const LANGUAGE_CURRENCY = [
  {
    name: 'Language',
    options: [
      {
        label: 'English',
        value: 'EN',
      },

      {
        label: 'Tiếng Việt',
        value: 'VI',
      },
    ],
  },
  {
    name: 'Currency',
    options: [
      {
        name: 'USA Dollar',
        value: 'USA-$',
        label: 'USD - US Dollar',
      },

      {
        name: 'VietNamDong',
        value: 'VND',
        label: 'VND - VN Dong',
      },
    ],
  },
];

export const LIST_PREFERENCES = [
  {
    label: 'Language',
    list: LIST_LANGUAGE,
  },
  {
    label: 'Currency',
    list: LIST_CURRENCY,
  },
];

export const LIST_PLATFORM_DOWNLOAD = [
  {
    label: 'AppStore',
    icon: <AppStorePlatform />,
  },
  {
    label: 'GooglePlay',
    icon: <GooglePlayPlatform />,
  },
  {
    label: 'Android',
    icon: <AndroidPlatform />,
  },
];
