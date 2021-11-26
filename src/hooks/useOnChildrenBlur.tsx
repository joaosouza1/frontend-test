import { useState, useCallback, useEffect } from "react"

// This hook runs a callback when all element's children lose focus.
//
// For example, consider this tree:
//
//   <div>
//      <button />
//      <input type="text" />
//   </div>
//
// If `button` has focus and the user moves the focus to the next element,
// `button` fires the `onblur` event, and `input` fires the `onfocus` event.
// The event bubbles up to `div`, which catches both `onblur` and `onfocus`.
//
// If you simply added a `onblur` event handler to the div,
// it would fire despite the fact that `input` gained focus.
//
// To make the callback run ONLY if ALL children lose focus, the hook listens
// to both `onblur` and `onfocus` and updates the `hasFocus` state.
// On the next tick (`setTimeout`), that is, after all events fired,
// if `hasFocus` turns out to be false, it means some child fired `onblur`
// and no child fired `onfocus`, so all children lost focus,
// so it's safe to run the callback function.
//
// Returns two callbacks: handleBlur and handleFocus.
// Assign both callbacks to the parent element.
const useOnChildrenBlur = (callback: () => any) => {
  const [hasFocus, setHasFocus] = useState<boolean>(false)
  const handleBlur = useCallback(() => setHasFocus(false), [])
  const handleFocus = useCallback(() => setHasFocus(true), [])

  // Wait until the next tick before running the callback,
  // to make sure the element really lost focus.
  useEffect(() => {
    const timeout = setTimeout(() => hasFocus || callback(), 100)
    return () => clearTimeout(timeout)
  }, [hasFocus])

  return [handleBlur, handleFocus]
}

export default useOnChildrenBlur
