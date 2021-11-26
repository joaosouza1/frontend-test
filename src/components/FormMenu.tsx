import React, { FC, ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import useOnClickOutside from 'use-onclickoutside';
import useOnChildrenBlur from "../hooks/useOnChildrenBlur";
import { FormLabel } from "./FormLabel";

interface FormMenuProps {
  label: ReactNode
}

const menuKeyCodes: Record<string, boolean> = {
  Enter: true,
  Space: true,
}

export const FormMenu: FC<FormMenuProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false)
  const close = useCallback(() => setOpen(false), [])
  const toggle = useCallback(() => setOpen(open => !open), [])
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, close)
  const [handleBlur, handleFocus] = useOnChildrenBlur(close)
  const handleKeyPress = useCallback<React.KeyboardEventHandler<HTMLDivElement>>((event) => {
    if (!menuKeyCodes[event.code]) return
    event.preventDefault()
    toggle()
  }, [toggle])

  return (
    <div ref={ref} onBlur={handleBlur} onFocus={handleFocus}>
      <FormMenuLabel
        onClick={toggle}
        onKeyPress={handleKeyPress}
        tabIndex={0}
        role="button"
        aria-expanded={open}
      >
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
  max-height: 330px;
  overflow-y: auto;
`
