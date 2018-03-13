const fetchRecentFilesByDate = async () => filesByDate;

const filesByDate = [
  {
    date: 'Today',
    files: [
      {
        title: 'Buildings.mp4',
        type: 'video',
        thumbnailUrl:
          'https://visualhunt.com/photos/l/7/skyscraper-building-japan.jpg',
        author: 'Thomas',
        sizeInMb: 759,
        commentCount: 2,
        lengthInSeconds: 105,
        inProgress: true,
        featured: true,
      },
      {
        title: 'Nature.mp4',
        type: 'video',
        thumbnailUrl: 'https://i.imgur.com/BCW5LB4.jpg',
        thumbnailPrimaryColor: '#3796A4',
        author: 'Thomas',
        sizeInMb: 136,
        commentCount: 8,
        lengthInSeconds: 310,
      },
      {
        title: 'Soundtrack.mp3',
        type: 'audio',
        thumbnailUrl: '1',
        author: 'Anna',
        thumbnailPrimaryColor: '#3796A4',
        sizeInMb: 12,
        commentCount: 4,
        lengthInSeconds: 76,
      },
      {
        title: 'Voice.mp3',
        type: 'audio',
        thumbnailUrl: '2',
        thumbnailPrimaryColor: '#3796A4',
        author: 'Anna',
        sizeInMb: 9,
        commentCount: 4,
        lengthInSeconds: 155,
      },
      {
        title: 'Space.mp4',
        type: 'video',
        thumbnailUrl:
          'https://images.unsplash.com/photo-1504221507732-5246c045949b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3db8b05daf1b70f000d052709198134c&auto=format&fit=crop&w=3300&q=80',
        thumbnailPrimaryColor: '#976F77',
        author: 'Jakub',
        sizeInMb: 241,
        commentCount: 8,
        lengthInSeconds: 441,
      },
      {
        title: 'People.mp4',
        type: 'video',
        thumbnailUrl:
          'https://tallguides.com/wp-content/uploads/2017/11/Tall-Fashion-startup-759x500.jpg',
        thumbnailPrimaryColor: '#759CA1',
        author: 'Thomas',
        sizeInMb: 1300,
        commentCount: 5,
        lengthInSeconds: 144,
      },
      {
        title: 'Future.mp4',
        type: 'video',
        thumbnailUrl:
          'https://images.unsplash.com/photo-1502866004299-b0c00b86d59f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=559fd923837e252e3ddd0ec718f2e2dc&auto=format&fit=crop&w=3300&q=80',
        thumbnailPrimaryColor: '#7672E5',
        author: 'Thomas',
        sizeInMb: 783,
        commentCount: 8,
        lengthInSeconds: 484,
      },
    ],
  },
  {
    date: 'Yesterday',
    files: [
      {
        title: 'Buildings.mp4',
        type: 'video',
        thumbnailUrl:
          'https://visualhunt.com/photos/l/7/skyscraper-building-japan.jpg',
        author: 'Thomas',
        sizeInMb: 759,
        commentCount: 2,
        lengthInSeconds: 105,
      },
      {
        title: 'Nature.mp4',
        type: 'video',
        thumbnailUrl: 'https://i.imgur.com/BCW5LB4.jpg',
        thumbnailPrimaryColor: '#3796A4',
        author: 'Thomas',
        sizeInMb: 136,
        commentCount: 8,
        lengthInSeconds: 310,
      },
      {
        title: 'Soundtrack.mp3',
        type: 'audio',
        thumbnailUrl: '1',
        author: 'Anna',
        thumbnailPrimaryColor: '#3796A4',
        sizeInMb: 12,
        commentCount: 4,
        lengthInSeconds: 76,
      },
      {
        title: 'Voice.mp3',
        type: 'audio',
        thumbnailUrl: '2',
        thumbnailPrimaryColor: '#3796A4',
        author: 'Anna',
        sizeInMb: 9,
        commentCount: 4,
        lengthInSeconds: 155,
      },
      {
        title: 'Space.mp4',
        type: 'video',
        thumbnailUrl:
          'https://images.unsplash.com/photo-1504221507732-5246c045949b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3db8b05daf1b70f000d052709198134c&auto=format&fit=crop&w=3300&q=80',
        thumbnailPrimaryColor: '#976F77',

        author: 'Jakub',
        sizeInMb: 241,
        commentCount: 8,
        lengthInSeconds: 441,
      },
      {
        title: 'People.mp4',
        type: 'video',
        thumbnailUrl:
          'https://tallguides.com/wp-content/uploads/2017/11/Tall-Fashion-startup-759x500.jpg',
        thumbnailPrimaryColor: '#759CA1',
        author: 'Thomas',
        sizeInMb: 1300,
        commentCount: 5,
        lengthInSeconds: 144,
      },
      {
        title: 'Future.mp4',
        type: 'video',
        thumbnailUrl:
          'https://images.unsplash.com/photo-1502866004299-b0c00b86d59f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=559fd923837e252e3ddd0ec718f2e2dc&auto=format&fit=crop&w=3300&q=80',
        thumbnailPrimaryColor: '#7672E5',
        author: 'Thomas',
        sizeInMb: 783,
        commentCount: 8,
        lengthInSeconds: 484,
      },
    ],
  },
];

export { fetchRecentFilesByDate };
