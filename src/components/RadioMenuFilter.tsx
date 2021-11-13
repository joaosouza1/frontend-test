import React, { FC, ReactNode, useCallback } from "react";
import { CheckboxV } from "./Checkbox";
import { FormMenu } from "./FormMenu";
import { FormOptions } from "./RestaurantFilterBar";

interface RadioMenuFilterProps {
  label: ReactNode
  inputName: string
  currentValue: string
  options: FormOptions
  onChange: (value: string) => any
}

export const RadioMenuFilter: FC<RadioMenuFilterProps> = (props) => {
  const handleChange = useCallback((event) => {
    props.onChange(event.target.value)
  }, [props.onChange])

  return (
    <FormMenu label={props.label}>
      {props.options.map(option => (
        <CheckboxV
          key={option.value}
          input={
            <input
              type="radio"
              name={props.inputName}
              value={option.value}
              checked={option.value === props.currentValue}
              onChange={handleChange}
            />
          }
        >
          {option.label}
        </CheckboxV>
      ))}
    </FormMenu>
  )
}
