import React, { useState, useCallback, useEffect } from 'react'
import { TextInputProps } from 'react-native'
import { Control, Controller } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { BorderlessButton } from 'react-native-gesture-handler';

import * as S from './styles'

interface InputCustomerProps extends TextInputProps {
  iconName: string;
  control: Control;
  name: string;
  error: string
  secureTextEntry?: boolean
}

export function InputCustomer({ iconName, control, name, error, secureTextEntry = false, ...rest}: InputCustomerProps) {
  const theme = useTheme()
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback((value) => {
    setIsFocused(false)

    setIsFilled(!!value)
  }, [])

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(prevState => !prevState)
  }

  return (
    <>
      <S.Container isErrored={!!error} isFocused={isFocused}>
        <Controller
          control={control}
          render={({ field: { onChange, value }}) => (
            <>
              <S.Icon
                name={iconName}
                size={18}
                isFocused={isFocused}
              />
              <S.InputText
                onFocus={handleInputFocus}
                onBlur={() => handleInputBlur(value)}
                value={value}
                onChangeText={onChange}
                underlineColorAndroid="transparent"
                placeholderTextColor={theme.colors.text_detail}
                secureTextEntry={secureTextEntry ? isPasswordVisible : false}
                {...rest}
              />
              {secureTextEntry ?
                <BorderlessButton onPress={handlePasswordVisibilityChange}>
                  <S.IconContainer>
                    <S.Icon
                      name={isPasswordVisible ? 'eye-off' : 'eye'}
                      size={18}
                    />
                  </S.IconContainer>
                </BorderlessButton>
              : null}
            </>
          )}
          name={name}
        />
      </S.Container>
      {error && <S.Error>{error}</S.Error>}
    </>
  )
}
