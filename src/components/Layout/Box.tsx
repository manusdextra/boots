type ContainerLayoutProps = {
    title: string;
    children: React.ReactNode;
};

export const Box = ({ title, children }: ContainerLayoutProps) => {

    return (
        <>
            <div className="flex flex-col justify-start w-screen h-screen">
                <div className="flex flex-row justify-center">
                    <h1 className="p-12 text-center">{title}</h1>
                </div>
                <div className="">
                    {children}
                </div>
            </div>
        </>
    )
}
