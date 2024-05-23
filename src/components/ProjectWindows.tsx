import MarianaIcons from "./MarianaIcons"

function ProjectWindows() {
    return (
        <>
            <div className="flex flex-col mb-36">

                <h1 className="flex flex-row mb-4">Mariana App</h1>
                <p className="flex flex-row mb-6">Esta aplicacion fue creada con la finalidad de para ser usada en un supermercado</p>
                <MarianaIcons />
                <img className="flex flex-row w-auto rounded shadow-2xl shadow-white/35" src="./src/assets/SuperMaker.webp" alt="" />
            </div>
        </>
    )
}

export default ProjectWindows