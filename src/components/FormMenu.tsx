import React, { FC, ReactNode, useCallback, useRef, useState } from "react";
import styled from "styled-components";
import useOnClickOutside from 'use-onclickoutside';
import { FormLabel } from "./FormLabel";

interface FormMenuProps {
  label: ReactNode
}

export const FormMenu: FC<FormMenuProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false)
  const close = useCallback(() => setOpen(false), [])
  const toggle = useCallback(() => setOpen(open => !open), [])
  const ref = useRef()
  useOnClickOutside(ref, close)
  return (
    <div ref={ref}>
      <FormMenuLabel onClick={toggle}>
        {props.label}
      </FormMenuLabel>
      {open &&
        <FormMenuWrapper>
          <FormMenuContent>
            {props.children}
          </FormMenuContent>
        </FormMenuWrapper>
      }
    </div>
  )
}

const FormMenuLabel = styled(FormLabel)`
  cursor: pointer;
`

const FormMenuWrapper = styled.div`
  position: relative;
`

const FormMenuContent = styled.div`
  position: absolute;
  top: -1px;
  padding: 16px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border: 1px solid #c8c8c8;
  gap: 19px;
  box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.1), inset 0px -1px 0px #C8C8C8;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: #606060;
`
