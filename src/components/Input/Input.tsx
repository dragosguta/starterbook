import React from 'react';
import {
  Input as ThemedInput,
  Label as ThemedLabel,
  ThemeUIStyleObject,
} from 'theme-ui';

import { Grower } from '../Loader';
import { ExclamationCircle } from '../Icon';
import { getGenericSizes } from '../../utils';

const getBaseInputStyles = (
  size: 'small' | 'medium' | 'large',
  invalid: boolean
) => {
  switch (size) {
    case 'small': {
      return {
        input: {
          ...getGenericSizes(size),
          padding: '0.5rem',
          border: 0,
          borderBottom: '0.125rem solid',
          ':focus': {
            outline: '0.125rem solid',
            outlineColor: invalid ? 'red' : 'primary',
            outlineOffset: '-0.125rem',
          },
        },
        label: {
          fontSize: [2, 2, 2, 3],
        },
        icon: {
          transform: 'scale(1)',
          marginLeft: '-2rem',
        },
        loader: {
          width: '1rem',
          height: '1rem',
          marginLeft: '-2rem',
        },
      };
    }
    case 'medium': {
      return {
        input: {
          ...getGenericSizes(size),
          padding: '0.75rem',
          border: 0,
          borderBottom: '0.25rem solid',
          ':focus': {
            outline: '0.25rem solid',
            outlineColor: invalid ? 'red' : 'primary',
            outlineOffset: '-0.25rem',
          },
        },
        label: {
          fontSize: [3, 3, 3, 4],
        },
        icon: {
          transform: 'scale(1.5)',
          marginLeft: '-2.25rem',
        },
        loader: {
          width: '1.5rem',
          height: '1.5rem',
          marginLeft: '-2.5rem',
        },
      };
    }
    case 'large': {
      return {
        input: {
          ...getGenericSizes(size),
          padding: '1rem',
          border: 0,
          borderBottom: '0.5rem solid',
          ':focus': {
            outline: '0.5rem solid',
            outlineColor: invalid ? 'red' : 'primary',
            outlineOffset: '-0.5rem',
          },
        },
        label: {
          fontSize: [4, 4, 4, 5],
        },
        icon: {
          transform: 'scale(2)',
          marginLeft: '-2.75rem',
        },
        loader: {
          width: '2rem',
          height: '2rem',
          marginLeft: '-3.5rem',
        },
      };
    }
    default: {
      throw new Error(
        `Field 'size' must be of type: 'small' | 'medium' | 'large'`
      );
    }
  }
};

export interface TextInputProps {
  size: 'small' | 'medium' | 'large';
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  isLoading?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  csx?: ThemeUIStyleObject;
}

export function TextInput({
  size,
  label,
  name,
  onChange,
  placeholder,
  invalid = false,
  isLoading = false,
  disabled = false,
  csx,
}: TextInputProps) {
  const {
    label: labelStyle,
    input: inputStyle,
    icon: iconStyle,
    loader: loaderStyle,
  } = getBaseInputStyles(size ?? 'small', invalid);
  return (
    <div>
      <ThemedLabel
        htmlFor={name}
        sx={{
          ...labelStyle,
          my: '0.25rem',
          fontWeight: 300,
          color: 'primary',
        }}
      >
        {label}
      </ThemedLabel>
      <div sx={{ display: 'flex', alignItems: 'center' }}>
        <ThemedInput
          name={name}
          type="text"
          placeholder={isLoading ? undefined : placeholder}
          onChange={onChange}
          disabled={isLoading || disabled}
          sx={{
            ...inputStyle,
            color: 'primary',
            borderRadius: 0,
            backgroundColor: 'hinted',
            borderBottomColor: invalid
              ? 'red'
              : isLoading
              ? 'muted'
              : 'primary',
            ':disabled': {
              cursor: 'not-allowed',
            },
            ...csx,
          }}
        />
        {invalid ? (
          <ExclamationCircle csx={{ ...iconStyle, color: 'red' }} />
        ) : isLoading ? (
          <Grower csx={{ ...loaderStyle, color: 'muted' }} />
        ) : null}
      </div>
    </div>
  );
}
