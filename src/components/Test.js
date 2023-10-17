import React, { useEffect, useState } from 'react';
import '../assets/css/test.css';
import axios from 'axios';

const Test = () => {
    const [list, setList] = useState([]);
    const [responses, setResponses] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/api/questions/all")
            .then((response) => {
                console.log(response.data);
                setList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleRadioChange = (event, item) => {

        setResponses([...responses, {
            reponse: event.target.value,
            diaganostic: {
                id_diagnostic: 1,
            },
            question: {
                id_question: item.id_question
            }
        }]);
    };

    const handleSubmit = () => {
        responses.forEach(responce => {
            axios.post("http://localhost:8081/res/add" , responce).then(
                res => console.log(res.data)
                ).catch(
                    error => console.log(error)
                )          
        });
    };

    return (
        <section className="mt-5">
            <div className="row justify-content-center align-items-center">
                <table className="rounded-table">
                    <thead>
                        <tr>
                            <th colSpan="6" className="text-center">
                                <span style={{ fontWeight: 'bold', fontSize: '40px' }}>TRAINING EVALUATION FORM</span>
                            </th>
                        </tr>
                        <tr>
                            <th colSpan="6" className="text-center" style={{ backgroundColor: 'blue', color: 'white' }}>
                                <span>TRAINING EVALUATION FORM</span>
                            </th>
                        </tr>
                        <tr className="text-center">
                            <th>Questions</th>
                            <th>Toute à fait d'accord</th>
                            <th>D'accord</th>
                            <th>Neutre</th>
                            <th>Pas d'accord</th>
                            <th>Désaccord total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => (
                            <tr key={index}>
                                <td className="question-cell">{item.nom_question}</td>
                                <td className="radio-cell">
                                    <input
                                        onChange={(event) => handleRadioChange(event, item)}
                                        type="radio" name={`qs-${index}`} value="Tout_A_Fait_Daccord"
                                    />
                                </td>
                                <td className="radio-cell">
                                    <input
                                        onChange={(event) => handleRadioChange(event, item)}
                                        type="radio" name={`qs-${index}`} value="Daccord"
                                    />
                                </td>
                                <td className="radio-cell">
                                    <input
                                        onChange={(event) => handleRadioChange(event, item)}
                                        type="radio" name={`qs-${index}`} value="Neutre"
                                    />
                                </td>
                                <td className="radio-cell">
                                    <input
                                        onChange={(event) => handleRadioChange(event, item)}
                                        type="radio" name={`qs-${index}`} value="Pas_daccord"
                                    />
                                </td>
                                <td className="radio-cell">
                                    <input
                                        onChange={(event) => handleRadioChange(event, item)}
                                        type="radio" name={`qs-${index}`} value="Desaccord_Total"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='container'>
                    <div className='text-center'>
                      <button className='btn btn-primary m-3' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Test;
