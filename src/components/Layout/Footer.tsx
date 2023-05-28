import { FunctionComponent } from "react"

export const Footer: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <div className="bg-zinc-300 flex flex-row h-full p-2 justify-center">
                {children}
            </div>
        </>
    )
}
