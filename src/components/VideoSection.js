import React, {useState} from 'react';
import YouTube from 'react-youtube';

const VideoList = [
  {
    id: 'zbsCMu3Sqjw',
    title: 'Flaker (Live in Dublin 2019)'
  },
  {
    id: 'U6I39ov1OII',
    title: 'Pull Your Jocks Up'
  },
  {
    id: 'dfKuN7SJiKc',
    title: 'God Slap'
  },
  {
    id: '7XnpHMfoA3s',
    title: 'Head in the Sleeve'
  },
  {
    id: 'BcEIoDxzHg4',
    title: 'Cig in the Breeze'
  },
  {
    id: 't4CKZG2exVw',
    title: 'Old Dog'
  },
  {
    id: '2QWwnlvO-HQ',
    title: 'Cunla'
  },
  {
    id: 'dbqNKNkL4R4',
    title: 'Flaker'
  },
  {
    id: 'pUwUbz220xA',
    title: 'The Road to Ballyshannon'
  },
  {
    id: 'cjCe9lTMzLA',
    title: 'Shadow ft. Loah'
  },
  {
    id: 'NMXbfL8vLvk',
    title: 'Punisher'
  },
  {
    id: 'tA-lXi_SFvo',
    title: 'Get It Right Up Ye'
  },
  {
    id: 'escYjNE0YMo',
    title: 'Vico Road'
  }
];

const VideoImage = ({id, title, setActiveVideo}) => (
  <div className="videoImage" onClick={() => setActiveVideo(id)}>
    <h4>{title}</h4>
    <div className="image">
      <img src={`https://img.youtube.com/vi/${id}/0.jpg`} alt=""/>
      <i className="fa fa-play-circle"></i>
    </div>
  </div>
);

const VideoModal = ({activeVideo, setActiveVideo}) => (
  <div className="videoModal" onClick={(e) => {setActiveVideo(null)}}>
    <i className="fa fa-times"></i>
    <YouTube
      videoId={activeVideo}
      onReady={(event) => event.target.playVideo()}
    />
  </div>
);

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div>
      {VideoList.map((props) => <VideoImage {...props} setActiveVideo={setActiveVideo}/>)}
      {activeVideo && <VideoModal activeVideo={activeVideo} setActiveVideo={setActiveVideo}/>}
    </div>
  )
};

export default VideoSection;
