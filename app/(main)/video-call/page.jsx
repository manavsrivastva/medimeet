'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import VideoCall from './_components/video-call';

const VideoCallPage = () => {
  const searchParams = useSearchParams();

  const sessionId = searchParams.get('sessionId');
  const token = searchParams.get('token');
  const appointmentId = searchParams.get('appointmentId');

  console.log({ sessionId, token, appointmentId });

  return (
    <div>
      <VideoCall sessionId={sessionId} token={token} appointmentId={appointmentId} />
    </div>
  );
};

export default VideoCallPage;
