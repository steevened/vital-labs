import useModalStore from '../../store/VitalStore';

export default function SelectModal({
  options,
  title,
  cols,
  value,
  onChange,
  name,
  fieldsDisabled,
}) {
  return (
    <select
      name={name}
      onChange={onChange}
      disabled={fieldsDisabled}
      value={value}
      className={`select select-sm select-bordered w-full mt-3 shadow-base-300 shadow-lg cols  cols-${
        !cols || cols === 1 ? '1' : cols
      }`}
    >
      <option disabled>{title}</option>
      {options.map((option, i) => (
        <option key={i}>{option}</option>
      ))}
    </select>
  );
}
