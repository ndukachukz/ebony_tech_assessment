import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ProtectedStackParamList} from '../../types';
import {useProduct} from '../../hooks/useProduct';
import {
  Image,
  ScrollView,
  useWindowDimensions,
  Text,
  H1,
  H2,
  H3,
  H4,
  Stack,
  H6,
  H5,
} from 'tamagui';
import {COLORS, FONTS} from '../../constants';
import {Paragraph} from 'tamagui';

type Props = NativeStackScreenProps<ProtectedStackParamList, 'Product'>;

const Product = ({navigation, route}: Props) => {
  const {height, width} = useWindowDimensions();
  const {
    data: product,
    isLoading,
    isError,
  } = useProduct(route.params.productId);

  if (isLoading && isError) return <Text>Loading</Text>;

  return (
    <ScrollView
      backgroundColor={COLORS.WHITE}
      paddingHorizontal={'$4'}
      paddingTop={'$4'}
      contentContainerStyle={{paddingBottom: 50}}>
      {product?.image && (
        <Image
          source={{uri: product.image, height: height / 2.5, width}}
          style={{objectFit: 'contain'}}
        />
      )}

      <Stack space={'$4'}>
        <Stack space={'$3'}>
          <H4 fontFamily={FONTS.MONTSERRAT_BOLD}>{product?.title}</H4>
          <Text fontFamily={FONTS.MONTSERRAT_BLACK}>${product?.price}</Text>
        </Stack>

        <Paragraph theme="alt2" fontFamily={FONTS.MONTSERRAT_MEDIUM}>
          {product?.description}
        </Paragraph>
      </Stack>
    </ScrollView>
  );
};

export default Product;
