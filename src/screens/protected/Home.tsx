import React from 'react';
import {
  H3,
  ScrollView,
  Stack,
  Text,
  XStack,
  Card,
  Image,
  Button,
  H2,
  Paragraph,
  H4,
  H5,
  useWindowDimensions,
} from 'tamagui';

import {COLORS, FONTS} from '../../constants';
import {useProducts} from '../../hooks/useProducts';
import {groupProducts} from '../../utils';

const Home = () => {
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
              {/* <UisAngleRight /> */}
            </XStack>
          </XStack>

          <XStack flexWrap="wrap" justifyContent="space-between" padding={'$2'}>
            {category.products.slice(0, 4).map(product => (
              <Card
                elevate
                size="$4"
                bordered
                backgroundColor={COLORS.WHITE}
                key={`product:${product.id}`}
                width={width / 2 - 30}
                maxWidth={width / 2 - 7}
                overflow="hidden"
                onPress={() => {}}>
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

                  <H5 numberOfLines={1} fontFamily={FONTS.MONTSERRAT_MEDIUM}>
                    {product.title}
                  </H5>
                  <Paragraph theme="alt2">${product.price}</Paragraph>
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
