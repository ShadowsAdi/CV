
export default function Skills({data}) {
    return (
        <>
            {Object.keys(data).map(key => {
                const value = data[key];
                    return <i>{value}</i>
            })}
        </>
    );
}