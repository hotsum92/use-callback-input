import React, { useState, useCallback, useMemo } from 'react'

export default () => {

  const [state2, setState2] = useState('')

  const [state3, setState3] = useState('')

  const FuncInput3 = () => {
    return (
      <div>
        <label htmlFor='func-input-3'>func-input-3 X:</label>
        <input id='func-input-3' value={state3} onChange={e => setState3(e.target.value)} />
      </div>
    )
  }

  const [state4, setState4] = useState('')

  const CallbackInput4 = useCallback(() => {
    return (
      <div>
        <label htmlFor='callback-input-4'>callback-input-4 X:</label>
        <input id='callback-input-4' value={state4} onChange={e => setState4(e.target.value)} />
      </div>
    )
  }, [state4])

  const CallbackUncontrolledInput5 = useCallback(() => {
    return (
      <div>
        <label htmlFor='callback-uncontrolled-input-5'>callback-uncontrolled-input-5 O:</label>
        <input id='callback-uncontrolled-input-5' />
      </div>
    )
  }, [])

  const [state6, setState6] = useState('')

  const CallbackWithoutDepsInput6 = useCallback(() => {
    return (
      <div>
        <label htmlFor='callback-without-deps-input-6'>callback-without-deps-input-6 X:</label>
        <input id='callback-without-deps-input-6' value={state6} onChange={e => setState6(e.target.value)} />
      </div>
    )
  }, [])

  const [state7, setState7] = useState('')

  const Input7 = () => {

    return (
      <input id='callback-inside-input-7' value={state7} onChange={e => setState7(e.target.value)} />
    )
  }

  const CallbackInsideInput7 = useCallback(() => {
    return (
      <div>
        <label htmlFor='callback-inside-inside-input-7'>callback-inside-input-7 X:</label>
        <Input7 />
      </div>
    )
  }, [state7])

  /* error
  const [state8, setState8] = useState('')

  const MemoInput8 = useMemo(() => {
    return (
      <div>
        <label htmlFor='memo-input-8'>memo-input-8 X:</label>
        <input id='memo-input-8' value={state8} onChange={e => setState8(e.target.value)} />
      </div>
    )
  }, [state8]) as unknown as React.ElementType
  */

  const [state9, setState9] = useState('')

  const MemoWithoutDepthsInput9 = useMemo(() => {
    return () => {
      return (
        <div>
          <label htmlFor='memo-without-depths-input-9'>memo-without-depths-input-9 X:</label>
          <input id='memo-without-depths-input-9' value={state9} onChange={e => setState9(e.target.value)} />
        </div>
      )
    }
  }, []) as unknown as React.ElementType

  const [state10, setState10] = useState('')

  const MemoInput10 = useMemo(() => {
    return () => {
      return (
        <div>
          <label htmlFor='memo-input-10'>memo-input-10 X:</label>
          <input id='memo-input-10' value={state10} onChange={e => setState10(e.target.value)} />
        </div>
      )
    }
  }, [state10]) as unknown as React.ElementType

  return (
    <div>

      <div>
        <label htmlFor='row-input-1'>row-input-1 O:</label>
        <input id='row-input-1' />
      </div>

      <div>
        <label htmlFor='controlled-input-2'>controlled-input-2 O:</label>
        <input id='controlled-input-2' value={state2} onChange={e => setState2(e.target.value)} />
      </div>

      <FuncInput3 />

      <CallbackInput4 />

      <CallbackUncontrolledInput5 />

      <CallbackWithoutDepsInput6 />

      <CallbackInsideInput7 />

      {/*
        <MemoInput8 />
      */}

      <MemoWithoutDepthsInput9 />

      <MemoInput10 />

    </div>
  )
}
