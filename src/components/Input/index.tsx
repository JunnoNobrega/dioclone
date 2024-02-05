

import {IconContainer,InputText, InputContainer, ErrorText } from './styles'
import { Controller } from 'react-hook-form'
import { IInput } from './types'

const Input = ({leftIcon, name,control,errorText,  ...rest}: IInput) => {
  return (
    <>
        <InputContainer>
            {leftIcon?  (<IconContainer>{ leftIcon}</IconContainer>): null}
            <Controller  
              name={name} 
              control={control} 
              rules={{required: true}} 
              render={({field}) =><InputText  {...field}{...rest}/>} />
            
        </InputContainer>
        {errorText ? <ErrorText>{errorText}</ErrorText> : null}
    
    </> 
  )
}

export {Input}

