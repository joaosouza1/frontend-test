import React, { FC, useCallback, useState } from "react";
import styled from "styled-components";
import { CTAButton } from "../components/CTAButton";
import { CheckboxO } from "./Checkbox";
import { FormLabel } from "./FormLabel";
import { RadioMenuFilter } from "./RadioMenuFilter";
import { isEqual } from 'lodash'

export interface FormValues {
  open: boolean
  price: '0' | '1' | '2' | '3' | '4'
  category: string
}

export interface FormOption {
  value: string, label: string
}

export type FormOptions = FormOption[]

const initialValues: FormValues = { open: false, price: '0', category: '' }

const priceOptions: FormOptions = [
  { value: '0', label: 'All' },
  { value: '1', label: '$' },
  { value: '2', label: '$$' },
  { value: '3', label: '$$$' },
  { value: '4', label: '$$$$' },
]

const categoryOptions: FormOptions = [
  { value: '', label: 'All' },
  { value: 'italian', label: 'Italian' },
  { value: 'seafood', label: 'Seafood' },
]

export const RestaurantFilterBar: FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialValues)

  const handleOpenChange = useCallback((event) => {
    setFormValues(formValues => ({ ...formValues, open: event.target.checked }))
  }, [])

  const handlePriceChange = useCallback((price) => {
    setFormValues(formValues => ({ ...formValues, price }))
  }, [])

  const handleCategoryChange = useCallback((category) => {
    setFormValues(formValues => ({ ...formValues, category }))
  }, [])

  const handleClearAll = useCallback(() => {
    setFormValues(initialValues)
  }, [])

  const isClear = isEqual(formValues, initialValues)

  return (
    <FilterWrapper>
      <div>Filter By:</div>
      <OptionsWrapper>

        <FormLabel>
          <CheckboxO input={
            <input
              type="checkbox"
              name="open-now"
              checked={formValues.open}
              onChange={handleOpenChange}
            />
          }>
            Open now
          </CheckboxO>
        </FormLabel>

        <RadioMenuFilter
          label="Price"
          inputName="price"
          options={priceOptions}
          currentValue={formValues.price}
          onChange={handlePriceChange}
        />

        <RadioMenuFilter
          label="Categories"
          inputName="category"
          options={categoryOptions}
          currentValue={formValues.category}
          onChange={handleCategoryChange}
        />

      </OptionsWrapper>

      <ClearAll small onClick={handleClearAll} disabled={isClear}>
        Clear all
      </ClearAll>
    </FilterWrapper>
  )
}

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 21px;
  padding-bottom: 21px;
`

const OptionsWrapper = styled.form`
  margin-left: 24px;
  margin-right: 24px;
  flex-grow: 1;
  display: flex;
  column-gap: 30px;
`

const ClearAll = styled(CTAButton)`width: 151px;`
