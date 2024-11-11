import "../assets/styles/main.scss"

export default function Education({education}, text = "undergrad"){

    return(
        <>
            <h3>
                {education[education.length - 1]}
            </h3>
            <ul>
                {education.slice(0, education.length - 1).map((item, index) => (
                    <li  style = {{fontWeight: 700, fontSize: 18}} key = {index}>{item}</li>
                ))}
            </ul>
        </>
    )
}