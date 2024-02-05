
const HeaderName = ({subHeader, header}) => {
    return (
        <div className="w-4/12 text-center m-auto my-12" >
            <p className="text-orange-600 mb-4">---{subHeader}---</p>
            <p className="uppercase text-4xl border-y-2 py-6 ">{header}</p>
            
        </div>
    );
};

export default HeaderName;