/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react'
import Nav from '../components/nav/Nav'
import { useGetAssgnmentDataQuery, useGetLeaderBoardDataQuery } from '../features/leader-board/leaderBoardApi'
import { NotificationManager } from 'react-notifications';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Leaderboard = () => {
  const auth = useSelector((state) => state.auth)
  console.log({ auth: auth?.user?.id })

  const [leaderBoard, setLeaderBoard] = useState([]);
  const [userData, setUserData] = useState({})
  const [asignmentd, setAsignmentd] = useState({})
  console.log({ leaderBoard, userData })
  const { data: leaderBoardData, isLoading, isError, error } = useGetLeaderBoardDataQuery();
  const { data: asignmentdData, isLoading: assignemtisLoading, isError: assignemtIsError, error: assignemterror } = useGetAssgnmentDataQuery();

  useEffect(() => {
    if (isLoading && assignemtisLoading){
      <p>loading.....</p>
    } else {
      const findData = leaderBoardData?.filter((content) => content?.student_id !== auth?.user?.id)
      setLeaderBoard(findData);
      const findUserData = leaderBoardData?.find((content) => content?.student_id === auth?.user?.id)
      setUserData(findUserData)
      setAsignmentd(asignmentdData)
    }
   
  }, [leaderBoardData, asignmentdData, isLoading, assignemtisLoading])

  const findAsignemntMark =(id)=>{
    if(asignmentdData){
      const data = asignmentdData?.find((row)=>row.id===id)
      console.log({data})
      return data?.totalMark
    } else return 0

  }

  return (
    <Fragment>
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <div>
            <h3 className="text-lg font-bold">Your Position in Leaderboard</h3>
            <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
              <thead>
                <tr>
                  <th className="table-th !text-center">Rank</th>
                  <th className="table-th !text-center">Name</th>
                  <th className="table-th !text-center">Quiz Mark</th>
                  <th className="table-th !text-center">Assignment Mark</th>
                  <th className="table-th !text-center">Total</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-2 border-cyan">
                  <td className="table-td text-center font-bold">4</td>
                  <td className="table-td text-center font-bold">{userData?.student_name}</td>
                  <td className="table-td text-center font-bold">{userData?.mark}</td>
                  <td className="table-td text-center font-bold">{findAsignemntMark(userData?.assignment_id)}</td>
                  <td className="table-td text-center font-bold">{userData?.mark+findAsignemntMark(userData?.assignment_id)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-8">
            <h3 className="text-lg font-bold">Top 20 Result</h3>
            <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="table-th !text-center">Rank</th>
                  <th className="table-th !text-center">Name</th>
                  <th className="table-th !text-center">Quiz Mark</th>
                  <th className="table-th !text-center">Assignment Mark</th>
                  <th className="table-th !text-center">Total</th>
                </tr>
              </thead>

              <tbody>
                {
                  leaderBoard.map((row, i) => (
                    <tr className="border-b border-slate-600/50">
                      <td className="table-td text-center">4</td>
                      <td className="table-td text-center">{row?.student_name}</td>
                      <td className="table-td text-center">{row?.mark}</td>
                      <td className="table-td text-center">{findAsignemntMark(row?.assignment_id)}</td>
                      <td className="table-td text-center">{row?.mark+findAsignemntMark(row?.assignment_id)}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Leaderboard