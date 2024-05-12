// pages/api/hello.js

export default function handler(req, res) {
  const posts = [
    {
      id: 1,
      time: "2024-04-02T10:00:00Z",
      title: "First Post",
      topics: ["topic1", "topic2"],
      author: "Wouter Mesker",
      textBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur sapien. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. */ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur sapien. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. */ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur sapien. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. */ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur sapien. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. */ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur sapien. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. */ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur sapien. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. */ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur sapien. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
    {
      id: 2,
      time: "2024-03-02T10:00:00Z",
      title: "Second Post",
      topics: ["topic3", "topic4"],
      author: "Author2",
      textBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur sapien. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. */ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur sapien. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. */ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur sapien. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. */ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur sapien. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. */ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur sapien. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. */ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur sapien. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. */ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur sapien. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
},
    // Add more posts as needed
  ];

  res.status(200).json(posts);
}
