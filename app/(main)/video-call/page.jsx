'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react'; // <-- Fix: Import Suspense from 'react'
import VideoCall from './_components/video-call';

const VideoCallContent = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('sessionId');
  const token = searchParams.get('token');
  const appointmentId = searchParams.get('appointmentId');

  return (
    <VideoCall 
      sessionId={sessionId} 
      token={token} 
      appointmentId={appointmentId} 
    />
  );
};

const VideoCallPage = () => {
  return (
    <Suspense fallback={<div>Loading call parameters...</div>}>
      <VideoCallContent />
    </Suspense>
  );
};

export default VideoCallPage;