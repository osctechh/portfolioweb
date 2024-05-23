import Laravel from "./icons/Laravel"
import MySQLIcon from "./icons/MySQLIcon"
import TailwindIcon from "./icons/TailwindIcon"

function MarianaIcons() {
    return (
        <>
            <div>
                <ul className="w-36 flex justify-center gap-x-4 mb-4 rounded-full bg-white/20">
                    <li className="">
                        <Laravel />
                    </li>
                    <li>
                        <MySQLIcon />
                    </li>
                    <li>
                        <TailwindIcon />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MarianaIcons