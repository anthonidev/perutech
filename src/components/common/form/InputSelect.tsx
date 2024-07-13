type Props = {
  items: {
    value: string
    id: string
  }[]
  label: string
}

const InputSelect = ({ items, label }: Props) => {
  return (
    <div className="flex flex-col space-y-3">
      <label className="tracking-widest text-gray-700">
        {label}
      </label>
      <select
        // name="Genero"
        className="text-blue-500  border border-blue-500 px-5 py-3 mt-1 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {
          items.map(({ id, value }) =>
            <option key={id} value={value}>{value}</option>,
          )
        }
      </select>
    </div>

  )
    ;
};
export default InputSelect;
