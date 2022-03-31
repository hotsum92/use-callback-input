import React, { useState, useCallback } from 'react'

export default () => {

  const [state2, setState2] = useState('')

  const [state3, setState3] = useState('')

  const FuncInput3 = () => {
    return (
      <div>
        <label htmlFor='func-input-3'>func-input-3：</label>
        <input id='func-input-3' value={state3} onChange={e => setState3(e.target.value)} />
      </div>
    )
  }

  const [state4, setState4] = useState('')

  const CallbackInput4 = useCallback(() => {
    return (
      <div>
        <label htmlFor='callback-input-4'>callback-input-4：</label>
        <input id='callback-input-4' value={state4} onChange={e => setState4(e.target.value)} />
      </div>
    )
  }, [state4])

  const CallbackUncontrolledInput5 = useCallback(() => {
    return (
      <div>
        <label htmlFor='callback-uncontrolled-input-5'>callback-uncontrolled-input-5：</label>
        <input id='callback-uncontrolled-input-5' />
      </div>
    )
  }, [])

  const [state6, setState6] = useState('')

  const CallbackWithoutDepsInput6 = useCallback(() => {
    return (
      <div>
        <label htmlFor='callback-without-deps-input-6'>callback-without-deps-input-6：</label>
        <input id='callback-without-deps-input-6' value={state6} onChange={e => setState6(e.target.value)} />
      </div>
    )
  }, [])

  return (
    <div>

      <div>
        <label htmlFor='row-input-1'>row-input-1:</label>
        <input id='row-input-1' />
      </div>

      <div>
        <label htmlFor='controlled-input-2'>controlled-input-2：</label>
        <input id='controlled-input-2' value={state2} onChange={e => setState2(e.target.value)} />
      </div>

      <FuncInput3 />

      <CallbackInput4 />

      <CallbackUncontrolledInput5 />

      <CallbackWithoutDepsInput6 />

    </div>
  )
}
