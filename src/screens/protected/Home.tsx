import React from 'react';
import {
  H3,
  ScrollView,
  Stack,
  Text,
  XStack,
  Card,
  Image,
  Paragraph,
  H5,
  useWindowDimensions,
} from 'tamagui';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {COLORS, FONTS} from '../../constants';
import {useProducts} from '../../hooks/useProducts';
import {groupProducts} from '../../utils';
import {ProtectedStackParamList} from '../../types';

type Props = NativeStackScreenProps<ProtectedStackParamList, 'Home'>;
const Home = ({navigation}: Props) => {
  const {height, width} = useWindowDimensions();
  const {data: products, isError, isLoading} = useProducts();

  const grouped = groupProducts(products);

  if (isLoading && isError) return <Text>Loading</Text>;
  return (
    <ScrollView paddingHorizontal={'$2'} space={'$10'}>
      {grouped?.map((category, i) => (
        <Stack key={i} space={'$5'}>
          <XStack justifyContent="space-between" alignItems="center">
            <H3
              textTransform={'capitalize'}
              fontFamily={FONTS.MONTSERRAT_SEMI_BOLD}>
              {category.category}
            </H3>
            <XStack>
              <Text color={COLORS.PLACEHOLDER} fontFamily={FONTS.MONTSERRAT}>
                More
              </Text>
            </XStack>
          </XStack>

          <XStack flexWrap="wrap" justifyContent="space-between" padding={'$2'}>
            {category.products.slice(0, 4).map((product, i) => (
              <Card
                elevate
                size="$4"
                bordered
                marginBottom={
                  (i !== category.products.slice(0, 4).length - 2 ||
                    i !== category.products.slice(0, 4).length - 1) &&
                  10
                }
                backgroundColor={COLORS.WHITE}
                key={`product:${product.id}`}
                width={width / 2 - 30}
                maxWidth={width / 2 - 7}
                overflow="hidden"
                onPress={() => {
                  navigation.navigate('Product', {productId: product.id});
                }}>
                <Card.Header>
                  <Stack alignItems="center" marginBottom={'$3'}>
                    <Image
                      source={{
                        uri: product.image,
                        width: width / 2 - 60,
                        height: height / grouped.length - 90,
                      }}
                      style={{objectFit: 'contain'}}
                      borderRadius={5}
                    />
                  </Stack>

                  <H5 fontFamily={FONTS.MONTSERRAT_BLACK}>${product.price}</H5>
                  <Paragraph
                    theme="alt2"
                    fontFamily={FONTS.MONTSERRAT_MEDIUM}
                    numberOfLines={3}
                    ellipsizeMode="tail">
                    {product.title}
                  </Paragraph>
                </Card.Header>
              </Card>
            ))}
          </XStack>
        </Stack>
      ))}
    </ScrollView>
  );
};

export default Home;
