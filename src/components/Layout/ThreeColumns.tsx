import { FunctionComponent } from "react"

interface ThreeColumnsChildren {
  left: React.ReactNode, centre: React.ReactNode, right: React.ReactNode
}

export const ThreeColumns: FunctionComponent<Partial<ThreeColumnsChildren>> = ({ left, centre, right }) => {
  return (
    <>
      <div className="flex flex-row justify-center py-1 ">
        <div className="flex flex-row justify-end w-full">
          {left}
        </div>
        <div className="flex justify-center w-max flex-row">
          {centre}
        </div>
        <div className="flex flex-row justify-start w-full">
          {right}
        </div>
      </div>
    </>
  )
}
