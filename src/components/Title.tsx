export default function Title(_props) {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-2 text-2xl">
                {_props.children}
            </h1>
            <hr className="border-2 border-purple-500" />
        </div>
    )
}