
const card = ({children, bg = 'bg-gray-100' }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shaddow-md`}>
        {children}
    </div>
  )
}

export default card
