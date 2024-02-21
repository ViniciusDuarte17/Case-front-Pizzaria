import React from 'react';

export interface PropsInput {
    type: string;
    placeholder: string;
    value: string;
    onChangeText: (text: React.ChangeEvent<HTMLInputElement> ) => void;
}