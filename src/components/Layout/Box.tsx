import { FunctionComponent } from "react"

export const Box: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col justify-start h-screen w-screen bg-zinc-200">
        {children}
      </div>
    </>
  )
}
