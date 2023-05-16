import { FunctionComponent } from "react"

export const Heading: FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <div className="flex flex-row justify-center">
      <h1 className="p-12 text-center">{title}</h1>
    </div>
  )
}

