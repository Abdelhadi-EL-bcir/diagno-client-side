import React, { useEffect, useState } from 'react';
import '../assets/css/test.css';

const Test = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const sampleData = [
      { question: 'Question 1' },
      { question: 'Question 2' },
    ];

    setList(sampleData);
  }, []);

    return (
        <section class="mt-5">
            <div class="row justify-content-center align-items-center">
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
                            <th>Option 1</th>
                            <th>Option 2</th>
                            <th>Option 3</th>
                            <th>Option 4</th>
                            <th>Option 5</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => (
                        <tr key={index}>
                            <td className="question-cell">{item.question}</td>
                            <td className="radio-cell">
                            <input type="radio" name={`question_${index}`} value="Option 1" />
                            </td>
                            <td className="radio-cell">
                            <input type="radio" name={`question_${index}`} value="Option 2" />
                            </td>
                            <td className="radio-cell">
                            <input type="radio" name={`question_${index}`} value="Option 3" />
                            </td>
                            <td className="radio-cell">
                            <input type="radio" name={`question_${index}`} value="Option 4" />
                            </td>
                            <td className="radio-cell">
                            <input type="radio" name={`question_${index}`} value="Option 5" />
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
      );
}

export default Test;