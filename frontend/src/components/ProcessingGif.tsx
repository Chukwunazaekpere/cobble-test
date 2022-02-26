import React from 'react'

interface Props {
    status?: "loading" | "success" | "error"
    message?: string
}

const ProcessingGif = (props: Props) => {
    console.log("\n\t ProcessingGif: ", props.message, props.status)
    return (
        <div style={{ height: "100vh", width: "100vw"}} className="d-flex justify-content-center gif">
            {
                props.status === "loading" ?
                <article style={{ width: "100vw", flexDirection: "column"}} className="bg-black d-flex">
                    <img className="align-self-center" width={700} height={500} src={require("../assets/gifs/loading-gif5.gif")} />
                    <p className="font-serif text-2xl animate__animated animate__pulse animate__infinite">{props.message}</p>
                </article>
                :
                props.status === "success" ?
                <article style={{ width: "100vw", flexDirection: "column"}} className="bg-white d-flex ">
                    <img  className="align-self-center mt-4" width={300} height={100} src={require("../assets/gifs/success.gif")} />
                    <p className="font-serif text-2xl animate__animated animate__pulse animate__infinite">{props.message}</p>
                </article>
                :
                <article style={{ width: "100vw", flexDirection: "column"}} className="bg-white d-flex">
                    <img className="align-self-center" width={200} height={100} src={require("../assets/gifs/error2.jpeg")} />
                    <p className="font-serif text-2xl animate__animated animate__pulse animate__infinite">{props.message}</p>
                </article>
            }
        </div>
    )
}

export default ProcessingGif;