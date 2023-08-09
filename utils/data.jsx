

const data = [
  {
    id: 1,
    title: "to do",
    identityColor: "#5030E5",
    count: 4,
    tasks: [
      {
        id: 31,
        priority: "low",
        title: "Brainstorming",
        img: null,
        description: `Brainstorming brings team members' diverse experience into play. `,
        comments: 12,
        files: 0,
        users: [
          {
            img: '/asset/4.png',
          },
          {
            img: '/asset/1.png',
          },
          {
            img: '/asset/2.png',
          },
        ],
      },
      {
        id: 32,
        priority: "high",
        title: "Research",
        img: null,
        description: `User research helps you to create an optimal product for users. `,
        comments: 10,
        files: 3,
        users: [
          {
            img: '/asset/3.png',
          },
          {
            img: '/asset/5.png',
          },
        ],
      },
      {
        id: 33,
        priority: "high",
        title: "Wireframes",
        img: null,
        description: `Low fidelity wireframes include the most basic content and visuals.. `,
        comments: 12,
        files: 13,
        users: [
          {
            img: '/asset/5.png',
          },
          {
            img: '/asset/2.png',
          },
          {
            img: '/asset/3.png',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "on progress",
    identityColor: "#FFA500",
    count: 3,
    tasks: [
      {
        id: 45,
        priority: "low",
        title: "Onboarding Illustrations ",
        img: '/asset/demo_1.jpg',
        description: null,
        comments: 14,
        files: 15,
        users: [
          {
            img: '/asset/3.png',
          },
          {
            img: '/asset/4.png',
          },
          {
            img: '/asset/5.png',
          },
        ],
      },
      {
        id: 46,
        priority: "low",
        title: "Moodboard",
        img: null,
        description: null,
        comments: 9,
        files: 10,
        users: [
          {
            img: '/asset/3.png',
          },
        ],
      },
      {
        id: 47,
        priority: "high",
        title: "Onboarding Illustrations ",
        img: null,
        description: null,
        comments: 14,
        files: 15,
        users: [
          {
            img: '/asset/5.png',
          },
          {
            img: '/asset/2.png',
          },
          {
            img: '/asset/3.png',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "done",
    identityColor: "#8BC48A",
    count: 2,
    tasks: [
      {
        id: 73,
        priority: "completed",
        title: "Mobile App Design",
        img: '/asset/demo_2.jpg',
        description: null,
        comments: 12,
        files: 15,
        users: [
          {
            img: '/asset/5.png',
          },
          {
            img: '/asset/1.png',
          },
        ],
      },
      {
        id: 74,
        priority: "completed",
        title: "Design System",
        img: null,
        description: `It just needs to adapt the UI from what you did before `,
        comments: 12,
        files: 15,
        users: [
          {
            img: '/asset/5.png',
          },
          {
            img: '/asset/2.png',
          },
          {
            img: '/asset/3.png',
          },
        ],
      },
    ],
  },
];
export default data;