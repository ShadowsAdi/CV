
function Greeting() {
    
    const alimente = ["mama", "tata", "alex"]
    return (
        <>
            <h1>&quot;looool&quot;</h1>
            <h1>Nush frt</h1>
            {alimente.map(
                (membru) => {
                    return <li key = {membru}>{membru}</li>
                }
            )}
        </>
    );
}

export default Greeting;