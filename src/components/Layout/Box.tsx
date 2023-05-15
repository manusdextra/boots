type ContainerLayoutProps = {
    title: string;
    children: React.ReactNode;
};

export const Box = ({ title, children }: ContainerLayoutProps) => {

    return (
        <>
            <div className="grid grid-cols-3 grid-rows-3 w-screen h-screen">
                <div className="col-start-2 row-start-1 ">
                    <h1 className="text-center">{title}</h1>
                </div>
                <div className="row-start-2 row-span-full col-start-2 col-end-3 col-span-full">
                    {children}
                </div>
            </div>
        </>
    )
}
