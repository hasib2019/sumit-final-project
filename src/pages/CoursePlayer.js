/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from 'react'
import Nav from '../components/nav/Nav'
import { useGetvideosDataQuery } from '../features/vieros/vidersApi';
import { NotificationManager } from 'react-notifications';
import { Link } from 'react-router-dom';
import Quiz from './Quiz';

const CoursePlayer = () => {
    const [videos, setVideos] = useState();
    const [showVideo, setShowVideo] = useState({})
    const [quizId, setQuizId] = useState();
    const [isQuiz, setIsQuiz] = useState(false)
    console.log({ showVideo })
    const { data: allVideos, isLoading: loadningVideos, isError: videosIsError, error: videosError } = useGetvideosDataQuery()
    useEffect(() => {
        if (loadningVideos) {
            <p>Video Loading</p>
        } else if (videosError) {
            NotificationManager.error(videosError.data)
        } else {
            setVideos(allVideos)
            setShowVideo(allVideos[0])
        }
    }, [allVideos, loadningVideos, videosError]);

    const changeQuiz = (e) => {
        setQuizId(1)
        setIsQuiz(true)
    }

    const createdAt = (getData)=>{
        const date = new Date(getData);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        return formattedDate
    }



    return (
        <Fragment>
            {
                !isQuiz ? (
                    <section class="py-6 bg-primary">
                        <div class="mx-auto max-w-7xl px-5 lg:px-0">
                            <div class="grid grid-cols-3 gap-2 lg:gap-8">
                                <div class="col-span-full w-full space-y-8 lg:col-span-2">
                                    <iframe width="100%" class="aspect-video" src={showVideo?.url}
                                        title="Things I wish I knew as a Junior Web Developer - Sumit Saha - BASIS SoftExpo 2023"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>

                                    <div>
                                        <h1 class="text-lg font-semibold tracking-tight text-slate-100">
                                            {showVideo?.title}
                                        </h1>
                                        <h2 class=" pb-4 text-sm leading-[1.7142857] text-slate-400">
                                            Uploaded on  {createdAt(showVideo?.createdAt)}</h2>

                                        <div class="flex gap-4">
                                            <a href="#" class="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
                                                এসাইনমেন্ট
                                            </a>
                                            <Link onClick={(e) => changeQuiz(e)}>
                                                <a class="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
                                                    কুইজে অংশগ্রহণ করুন
                                                </a>
                                            </Link>
                                        </div>
                                        <p class="mt-4 text-sm text-slate-400 leading-6">
                                            {showVideo?.description}
                                        </p>


                                    </div>
                                </div>
                                <div
                                    class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
                                    {
                                        videos?.map((item) => (
                                            <div key={item?.id} class="w-full flex flex-row gap-2 cursor-pointer hover:bg-slate-900 p-2 py-3">
                                                {/* <!-- Thumbnail --> */}
                                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                                </svg>
                                                {/* <!-- Description --> */}
                                                <div clas="flex flex-col w-full">
                                                    <Link onClick={(e) => setShowVideo(item)}>
                                                        <p class="text-slate-50 text-sm font-medium">{item?.title}</p>
                                                    </Link>
                                                    <div>
                                                        <span class="text-gray-400 text-xs mt-1">{item?.duration} Mins</span>
                                                        <span class="text-gray-400 text-xs mt-1"> | </span>
                                                        <span class="text-gray-400 text-xs mt-1">{item?.views} views</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <Quiz {...{ quizId }} />
                )
            }
        </Fragment>
    )
}

export default CoursePlayer