import React, { useEffect, useState } from 'react'
import { NotificationManager } from 'react-notifications';
import { useGetQuizDataQuery } from '../features/quiz/quizsApi';

const Quiz = ({quizId}) => {
    const [quizData, setQuizData] = useState([])
    console.log({quizId, quizData})
    const {data, isLoading, isError, error} = useGetQuizDataQuery(quizId);
    useEffect(() => {
        if (isLoading) {
            <p>Quiz Loading</p>
        } else if (error) {
            NotificationManager.error(error.data)
        } else {
            setQuizData(data)
        }

    }, [data, isLoading, error]);
    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-7xl px-5 lg:px-0">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold">Quizzes for "Debounce Function in JavaScript - JavaScript Job Interview question"
                    </h1>
                    <p className="text-sm text-slate-200">Each question contains 5 Mark</p>
                </div>
                <div className="space-y-8 ">
                    {
                        quizData?.map((item, i)=>(
                            <div className="quiz" >
                            <h4 className="question">{item?.question}</h4>
                            <form className="quizOptions">
                                {/* <!-- Option 1 --> */}
                                <label for="option1_q1">
                                    <input type="checkbox" id="option1_q1" />
                                    A function that is called after a certain time interval
                                </label>
    
                                {/* <!-- Option 2 --> */}
                                <label for="option2_q1">
                                    <input type="checkbox" id="option2_q1" />
                                    A function that is called after a certain time interval
                                </label>
    
                                {/* <!-- Option 3 --> */}
                                <label for="option3_q1">
                                    <input type="checkbox" id="option3_q1" />
                                    A function that is called after a certain time interval
                                </label>
    
                                {/* <!-- Option 4 --> */}
                                <label for="option4_q1">
                                    <input type="checkbox" id="option4_q1" />
                                    A function that is called after a certain time interval
                                </label>
                            </form>
                        </div>
                        ))
                    }
                 

               
                </div>

                <button
                    className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">Submit</button>
            </div>
        </section>
    )
}

export default Quiz