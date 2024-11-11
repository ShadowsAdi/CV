import "../assets/styles/main.scss"

export default function Experience({experience, bool}){

    const { when, location, about } = experience;

    if(bool == 0) {
        return (
            <>
                <div>
                    <p>{when}</p>
                </div>
                <div>
                    <p style = {{fontWeight: 700, fontSize: 18}}>{location}</p>
                </div>
            </>
        );
    } else {
        return (
            <div class = "about">
                <ul>
                    {about.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}