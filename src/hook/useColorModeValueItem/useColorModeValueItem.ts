import { useColorModeValue } from '@chakra-ui/react';

const useColorModeValueItem = () => {
  const darkmodeColors = {
    border200: useColorModeValue('1px solid #D4D4D6', '1px solid #252A3F'),
    border250: useColorModeValue('1px solid #E6E8E8', '1px solid #252A3F'),
    border300: useColorModeValue('1px solid #E6E6E8', '1px solid #353E62'),
    border350: useColorModeValue('1px solid #BDBDBD', '1px solid #353E62'),
    border400: useColorModeValue('1px solid #E6E6E8', '1px solid #1F2231'),
    border450: useColorModeValue('1px solid #EFF0F2', '1px solid #1F2231'),

    border500: useColorModeValue('1px solid #EFF0F2', '1px solid #252A3F'),
    border700: useColorModeValue('1px solid #EFF0F2', '1px solid #353E62'),

    border800: useColorModeValue('1px solid #E6E6E8', '1px solid #545E85'),

    text100: useColorModeValue('#1E1E1E', 'white'),
    text125: useColorModeValue('#000000', 'white'),

    text150: useColorModeValue('rgba(0, 0, 0, 0.6)', '#FFFFFF'),

    text200: useColorModeValue('#505052', '#D4D4D6'),
    text250: useColorModeValue('#505052', '#9B9B9E'),

    text300: useColorModeValue('#505052', '#7C7C7E'),
    text310: useColorModeValue('#505052', '#9B9B9E'),
    text350: useColorModeValue('#717981', '#9B9B9E'),

    text400: useColorModeValue('#9B9B9E', '#7C7C7E'),
    text425: useColorModeValue('#7C7C7E', '#9B9B9E'),
    text430: useColorModeValue('#1E1E1E', '#9B9B9E'),
    text450: useColorModeValue('#9B9B9E', '#FFF'),
    text500: useColorModeValue('#7C7C7E', '#9B9B9E'),
    text525: useColorModeValue('#7C7C7E', '#545E85'),
    text550: useColorModeValue('#7C7C7E', '#D4D4D6'),
    text555: useColorModeValue('#7C7C7C', '#F6F7F9'),
    text600: useColorModeValue('#1E1E1E', 'white'),
    text650: useColorModeValue('#1E1E1E', '#F6F7F9'),
    text700: useColorModeValue('#505052', '#BDBDBF'),
    text750: useColorModeValue('#116CFF', '#BDBDBF'),
    text900: useColorModeValue('#116CFF', '#008FFF'),

    bg50: useColorModeValue('#E2F2FF', '#252A3F'),
    bg100: useColorModeValue('#fff', '#0F1017'),
    bg150: useColorModeValue('white', '#252A3F'),
    bg200: useColorModeValue('white', '#1F2231'),
    bg250: useColorModeValue('#F6F7F9', '#1F2231'),
    bg255: useColorModeValue('#F8F9FD', '#1F2231'),
    bg350: useColorModeValue('#343436', '#A1A7BB'),
    bg355: useColorModeValue('#EFF0F2', '#252A3F'),
    bg360: useColorModeValue('#2F363D', 'white'),
    bg400: useColorModeValue('#E2F2FF', '#252A3F'),
    bg450: useColorModeValue('#EFF0F2', '#1F2231'),
    bg460: useColorModeValue('#EFF0F2', '#0F1017'),
    bg470: useColorModeValue('#d4d4d840', '#36373b'),
    bg500: useColorModeValue('#E6E6E8', '#171924'),
    bg550: useColorModeValue('#E6F7FF', '#252A3F'),
    bg555: useColorModeValue('#09121F', 'white'),

    bg570: useColorModeValue('#E6E6E8', '#252A3F'),
    bg580: useColorModeValue('#cacacf', '#292e42'),
    bg600: useColorModeValue('#EFF0F2', '#171924'),
    bg650: useColorModeValue('#EFF0F2', '#252A3F'),
    bg655: useColorModeValue('#fafafa', '#0b0e11'),

    bg800: useColorModeValue('#F6F7F9', '#171924'),
    bg850: useColorModeValue('#EFF0F2', '#545E85'),
    bg900: useColorModeValue('#FFFFFF', '#171924'),
    bg925: useColorModeValue('#F8F9FD', '#0F1017'),
    bg950: useColorModeValue('#F8F9FD', '#171924'),
    bgColorRowEven: useColorModeValue('#F0F0F0', '#171924'),
    bgColorRowOdd: useColorModeValue('white', '#0F1017'),
  };

  return {
    darkmodeColors,
  };
};

export default useColorModeValueItem;
