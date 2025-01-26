
export default function MiniBlogCard() {
  return (
    <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center">
            <span className="w-5 h-5 bg-slate-300 rounded-full"></span>
            <span>Tom Morton-Collings</span>
        </div>
        <p className="font-bold leading-6 capitalize text-sm text-primary-700">
            A comprehensive review of roling stone magazine's '500 greatest albums of all time
        </p>
        <p>1d ago</p>
    </div>
  )
}
