import React, { FC, useCallback } from 'react'

import Input from '../Input'
import { t } from '@lingui/macro'
import useENS from '../../hooks/useENS'
import { useLingui } from '@lingui/react'

interface AddressInputPanelProps {
  id?: string
  value: string
  onChange: (value: string) => void
}

const AddressInputPanel: FC<AddressInputPanelProps> = ({ id, value, onChange }) => {
  const { i18n } = useLingui()
  const { address, loading } = useENS(value)

  const handleInput = useCallback(
    (event) => {
      const input = event.target.value
      const withoutSpaces = input.replace(/\s+/g, '')
      onChange(withoutSpaces)
    },
    [onChange]
  )

  const error = Boolean(value.length > 0 && !loading && !address)

  return (
    <div
      className={`flex flex-row bg-secondary rounded items-center h-[68px] ${error ? 'border border-red border-opacity-50' : ''
        }`}
      id={id}
    >
      <div className="flex justify-between w-full px-5 align-center sm:w-2/5">
        <span className="text-[18px] text-primary">{i18n._(t`Send to:`)}</span>
        <span className="mt-[3px] text-sm underline cursor-pointer text-blue" onClick={() => onChange(null)}>
          {i18n._(t`Remove`)}
        </span>
      </div>
      <div className="flex w-full px-3 py-1 mr-5 rounded bg-[#353742] sm:w-3/5">
        <Input.Address className="bg-transparent" onUserInput={handleInput} value={value} />
      </div>
    </div>
  )
}

export default AddressInputPanel
