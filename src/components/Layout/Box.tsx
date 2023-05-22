import { FunctionComponent } from "react"

export const Box: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col justify-start w-screen h-screen bg-zinc-200 p-2 ">
        {children}
      </div>
    </>
  )
}
