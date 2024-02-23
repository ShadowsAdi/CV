import '../assets/styles/main.scss'

export default function Skills({data}) {

    function skill(x, first = 0){
        if(first == 1)
            return <i style = {{fontWeight: 700, fontSize: 18}}>{x};    </i> //for the first property which is not an array (software)
        else
            return <i style = {{fontWeight: 700, fontSize: 18}}>{x}</i>
    }
    function proficiency(x){
        return <i style = {{fontWeight: 0, fontSize: 18}}>    ({x});    </i>
    }
    return(
        //data = data.skills.hard
        //data[index] = software,webdev...one at a time
            <div>
                {Object.keys(data).map((index) => {
                    let idk = Array.isArray(data[index]);
                    if(idk == true){
                        return data[index].map((value, key) => (
                            key % 2 ? proficiency(value) : skill(value)
                        ));
                    }
                    else
                        return skill(data[index], 1);
                })}
                
            </div>
    );
}