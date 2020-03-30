const mediaConstraints = {
  video: {
    width: {
      min: 1280
    },
    height: {
      min: 720
    }
  }
};

export const getMediaStream = (): Promise<MediaStream> => {
  return navigator.mediaDevices.getUserMedia(mediaConstraints);
};
