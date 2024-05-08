import React from 'react';

export default function list({info, upcoming}) {
  return (
      <ul>
          {iterate(info, upcoming)}
      </ul>
  );
}

function iterate(data, flag){
    if (!data) return;
    const bgColor = flag ? { backgroundColor : "pink"} : {};
    return (
        <>
            {
                data.map( (person, index) => {
                   
                    return (
                        <li key={index}>
                            <div className="flex" style={bgColor}>
                               
                                <div className="title">
                                    <h3 className='empId'>{person.empId}</h3>
                                    <h3 className='name'>{person.name}</h3>
                                    <h5 className="age">{Old(person.birthday)} years</h5>
                                </div>

                                <img src={person.img} alt="img" />
                            </div>
                        </li>
                    )
                })
            }
        </>
    )
}

function Old(personAge){
    let year = new Date(personAge).getFullYear();
    let currentYear = new Date().getFullYear();
    
    let age = currentYear - year;
   return age;
}