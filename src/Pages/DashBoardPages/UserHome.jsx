import UseAuthContext from "../../hooks/AuthLoad";

const UserHome = () => {
    const {user} = UseAuthContext()
    return (
        <div>
            
            <h1><span>Hello , Wellcome </span>
            {user?.displayName ? user?.displayName : "back"}
            </h1>
        </div>
    );
};

export default UserHome;