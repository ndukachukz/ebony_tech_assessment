import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text, Stack, H1, Button, Input, Spinner} from 'tamagui';
import {useForm, Controller} from 'react-hook-form';

import {COLORS, FONTS} from '../../constants';
import {useLogin} from '../../hooks/useLogin';
import {UilAngleRightB, UilSpinnerAlt} from '../../components/svgs';

interface Form {
  username: string;
  password: string;
}

export const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const mutation = useLogin<Form>();

  const onSubmit = (data: Form) => mutation.mutate(data);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, backgroundColor: 'white'}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Stack padding={'$5'} flex={1} justifyContent="space-evenly">
          <Stack alignItems="center">
            <H1
              style={{
                fontFamily: FONTS.MONTSERRAT_MEDIUM,
                fontSize: 36,
                fontWeight: '500',
                color: COLORS.RAISING_BLACK,
              }}>
              Login Screen
            </H1>
            <Text fontSize={14} style={{fontFamily: FONTS.MONTSERRAT}}>
              sign in to access your account
            </Text>
          </Stack>

          <Stack space={25} spaceDirection="vertical">
            <Controller
              name="username"
              control={control}
              rules={{required: true}}
              render={({field: {onChange, value, onBlur}}) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  borderWidth={!errors.username ? 0 : 0.5}
                  borderColor={errors.username && 'red'}
                  placeholder="Enter your username"
                  placeholderTextColor={COLORS.PLACEHOLDER}
                  fontFamily={FONTS.MONTSERRAT_LIGHT}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{required: true}}
              render={({
                field: {onChange, value, onBlur},
                formState: {errors},
              }) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  borderWidth={!errors.password ? 0 : 0.5}
                  borderColor={errors.password && 'red'}
                  placeholder="Password"
                  placeholderTextColor={COLORS.PLACEHOLDER}
                  fontFamily={FONTS.MONTSERRAT_LIGHT}
                  secureTextEntry
                />
              )}
            />
          </Stack>

          <Button
            disabled={mutation.isLoading}
            backgroundColor={COLORS.LIGHT_BLUE}
            color={COLORS.WHITE}
            style={{
              fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
              fontSize: 20,
            }}
            scaleIcon={2}
            iconAfter={
              mutation.isLoading ? (
                <Spinner size="small" color={COLORS.WHITE} />
              ) : undefined
            }
            onPress={handleSubmit(onSubmit)}>
            Next
          </Button>
        </Stack>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
