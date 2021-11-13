import React, { FC, useCallback, useState } from "react";
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

interface FilterContextProps {
  formValues: FormValues
  isClear: boolean
  handleOpenChange: HandleOpenChange
  handlePriceChange: HandlePriceChange
  handleCategoryChange: HandleCategoryChange
  handleClearAll: () => any
}

type HandleOpenChange = (open: FormValues['open']) => any
type HandlePriceChange = (open: FormValues['price']) => any
type HandleCategoryChange = (open: FormValues['category']) => any

export const FilterContext = React.createContext<FilterContextProps>({
  formValues: initialValues,
  isClear: true,
  handleOpenChange: () => null,
  handlePriceChange: () => null,
  handleCategoryChange: () => null,
  handleClearAll: () => null,
})

export const FilterContextContainer: FC = (props) => {
  const [formValues, setFormValues] = useState<FormValues>(initialValues)

  const isClear = isEqual(formValues, initialValues)

  const handleOpenChange = useCallback<HandleOpenChange>(open => {
    setFormValues(formValues => ({ ...formValues, open }))
  }, [])

  const handlePriceChange = useCallback<HandlePriceChange>(price => {
    setFormValues(formValues => ({ ...formValues, price }))
  }, [])

  const handleCategoryChange = useCallback<HandleCategoryChange>(category => {
    setFormValues(formValues => ({ ...formValues, category }))
  }, [])

  const handleClearAll = useCallback(() => {
    setFormValues(initialValues)
  }, [])

  const value: FilterContextProps = {
    formValues,
    isClear,
    handleOpenChange,
    handlePriceChange,
    handleCategoryChange,
    handleClearAll,
  }

  return (
    <FilterContext.Provider value={value}>
      {props.children}
    </FilterContext.Provider>
  )
}
