type BoxLayoutProps = {
    title: string;
    children: React.ReactNode;
};

export const Box = ({ title, children }: BoxLayoutProps) => {

    return (
        <>
            <div className="grid grid-cols-3 grid-rows-3 w-screen h-screen">
                <h1 className="col-start-2 row-start-1 text-center">{title}</h1>
                <div className="row-start-2 row-span-full col-start-2 col-end-3 col-span-full">
                    {children}
                </div>
            </div>
        </>
    )
}
