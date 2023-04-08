import Navbar from "../src/components/nav/Nav";
export default function Layout({children}) {

    return (
        <>
             <Navbar />
                <div className="">{children}</div>
        </>
    );
}