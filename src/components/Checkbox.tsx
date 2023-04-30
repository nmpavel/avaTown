import { useState } from 'react'

interface Props {
  label: string;
  placeholder?: string;
}

const Checkbox = ({ label,placeholder}: Props) => {
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked
    setChecked(isChecked)
  }

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-[12px] w-[12px] text-primary"
        checked={checked}
        onChange={handleCheckboxChange}
        placeholder={placeholder}
      />
      <label className="ml-2">{label}</label>
    </div>
  )
}

export default Checkbox
