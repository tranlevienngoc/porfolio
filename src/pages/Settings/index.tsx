import { Box, Flex, Popover, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import PopupItem from 'components/common/PopupItem';
import SelectItem from 'components/common/SelectItem';
import TemplateText from 'components/common/Text/TemplateText';
import {
  LANGUAGE_CURRENCY,
  LIST_PLATFORM_DOWNLOAD,
  THEME,
} from 'data/setting/setting';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Settings = () => {
  const [value, setValue] = useState('');

  const [lang, setLang] = useState('English');

  const [currency, setCurrency] = useState('USD - US Dollar');
  const [select, setSelect] = useState('currency');
  const handleSelelect = (value: string) => {
    if (select === 'Language') setLang(value);
    if (select === 'Currency') setCurrency(value);
  };
  return (
    <Box p='16px' className='settings-page' width='100%' height='100vh'>
      <TemplateText fontSize='36px' fontWeight={600} txt='Setting' />
      <TemplateText
        fontSize='16px'
        fontWeight={400}
        txt='CoinsPlus helps you to find the easy way to send any tokens or NFTs with fews click.'
        color='#343436'
      />
      <Box mt='56px'>
        <TemplateText txt='Theme' fontSize='18px' fontWeight={600} />
        <TemplateText
          fontSize='16px'
          fontWeight={400}
          color='gray.100'
          txt='Feeling adventurous? Customize the look of your app'
        />
        <Flex
          gap={{ base: '24px', md: '40px', xl: '64px' }}
          mt='16px'
          flexWrap='wrap'
        >
          {THEME.map((item) => (
            <Box key={uuidv4()}>
              <Box>{item.theme}</Box>

              <RadioGroup mt='12px' onChange={setValue} value={value}>
                <Stack direction='row'>
                  <Radio color='red' value={item.label}>
                    {item.label}
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
          ))}
        </Flex>
        <Box mt='56px'>
          <TemplateText fontSize='18px' fontWeight={600} txt='Preferences' />
          <TemplateText
            fontSize='16px'
            fontWeight={400}
            color='gray.500'
            txt='Set your app with your prefrences'
          />

          {LANGUAGE_CURRENCY.map((item) => (
            <Flex key={uuidv4()} mt='16px' gap='75px' alignItems='center'>
              <TemplateText
                w='70px'
                fontSize='13px'
                fontWeight={400}
                txt={item.name}
              />

              <Popover>
                {({ onClose }) => (
                  <>
                    <Box
                      onClick={() => {
                        setSelect(item.name);
                      }}
                    >
                      <PopupItem
                        text={item.name === 'Language' ? lang : currency}
                      >
                        <SelectItem
                          options={item.options}
                          onClose={onClose}
                          onChange={handleSelelect}
                        />
                      </PopupItem>
                    </Box>
                  </>
                )}
              </Popover>
            </Flex>
          ))}

          <Box mt='56px'>
            <TemplateText fontSize='18px' fontWeight={600} txt='Mobile Apps' />
            <TemplateText
              color='gray.500'
              fontSize='16px'
              fontWeight={400}
              txt='Choose your version to download'
            />
            <Flex mt='16px' gap={{ base: '10px', md: '20px' }} flexWrap='wrap'>
              {LIST_PLATFORM_DOWNLOAD.map((item) => (
                <Box key={uuidv4()}>{item.icon}</Box>
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
